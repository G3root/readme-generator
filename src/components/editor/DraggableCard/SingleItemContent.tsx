import * as React from 'react'
import { BlockType, ExplicitSingleBlockValue } from '~/types'
import pupa from 'pupa'
import { useUpdateAtom, selectAtom } from 'jotai/utils'
import { blockConfigModalStateAtom, blockValuesAtom } from '~/store'
import { useAtom, useAtomValue } from 'jotai'
import { Button } from '~/components/primitives'
import { SingleItemContentModal } from './SingleItemContentModal'

export interface ISingleItemContentProps {
  id: string
}

export function SingleItemContent({ id }: ISingleItemContentProps) {
  const blockValueAtom = selectAtom(
    blockValuesAtom,
    React.useCallback((block) => block[id], [id])
  )

  const blockValue = useAtomValue(blockValueAtom) as ExplicitSingleBlockValue
  const setBlockValue = useUpdateAtom(blockValuesAtom)
  const toggleModal = useUpdateAtom(blockConfigModalStateAtom)

  const onEditableChange = (code: string) => {
    setBlockValue((draft) => {
      const items = draft
      const element = items[id]
      const single = BlockType.Single
      if (element.type === single) {
        element.markdown = code
      }
      return (draft = items)
    })
  }

  let markdown = blockValue.markdown

  const options = blockValue.options
  if (options) {
    const placeHolder = options.reduce(
      (
        prev: {
          [key: string]: string | boolean
        },
        current
      ) => {
        if (current.isColor && typeof current.value === 'string') {
          prev[current.name] = current.value.replace('#', '')
        } else {
          prev[current.name] = current.value
        }
        return prev
      },
      {}
    )
    markdown = pupa(markdown, placeHolder)
  }

  return (
    <div className="cursor-auto text-xs">
      {options ? (
        <div className="mb-3 flex items-center justify-end py-3">
          <Button onClick={() => toggleModal()} size="sm">
            update configs
          </Button>
        </div>
      ) : null}
      <textarea
        value={markdown}
        onChange={(e) => onEditableChange(e.target.value)}
        className="textarea textarea-bordered h-full w-full p-3"
        rows={5}
      />
      {options ? <SingleItemContentModal id={id} /> : null}
    </div>
  )
}
