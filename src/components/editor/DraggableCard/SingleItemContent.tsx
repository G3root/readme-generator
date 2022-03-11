import * as React from 'react'
import { ExplicitSingleBlockValue } from '~/types'
import pupa from 'pupa'
import { useUpdateAtom } from 'jotai/utils'
import { blockConfigModalStateAtom, blockValuesAtom, updateBlockValueMarkdownAtom } from '~/store'
import { useAtomValue } from 'jotai'
import { Button } from '~/components/primitives'
import { SingleItemContentModal } from './SingleItemContentModal'
import { clsx } from '~/utils'

export interface ISingleItemContentProps {
  id: string
}

export function SingleItemContent({ id }: ISingleItemContentProps) {
  const blockValue = useAtomValue(blockValuesAtom)[id] as ExplicitSingleBlockValue
  const setMarkdown = useUpdateAtom(updateBlockValueMarkdownAtom)
  const toggleModal = useUpdateAtom(blockConfigModalStateAtom)

  const onEditableChange = (code: string) => {
    setMarkdown({ id, code })
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
        className={clsx(
          'textarea textarea-bordered h-full w-full p-3',
          options && 'textarea-disabled'
        )}
        rows={5}
        disabled={options ? true : false}
      />
      {options ? <SingleItemContentModal id={id} /> : null}
    </div>
  )
}
