import { useAtom, useAtomValue } from 'jotai'
import * as React from 'react'
import { FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi'
import { Button, IconButton } from '~/components/primitives'
import { addItemsModalStateAtom, blockValuesAtom, allBlocks } from '~/store'
import { BlockType, ExplicitMultipleBlock, ExplicitMultipleBlockValue } from '~/types'
import { useUpdateAtom } from 'jotai/utils'
import { MultipleItemsContentModal } from './MultipleItemsContentModal'
import { arrayMove } from '@dnd-kit/sortable'

export interface IMultipleItemsContentProps {
  id: string
}

export function MultipleItemsContent({ id }: IMultipleItemsContentProps) {
  const [blockvalues, setBlockvalues] = useAtom(blockValuesAtom)

  const multipleBlockValue = blockvalues[id] as ExplicitMultipleBlockValue

  const block = useAtomValue(allBlocks)[id] as ExplicitMultipleBlock

  const mergeBlockAndValues = multipleBlockValue.snippets.map((snippet) => {
    const markdown = block.snippets.find((item) => item.name === snippet.name)?.markdown as string

    return { ...snippet, markdown }
  })
  const activeItems = mergeBlockAndValues.filter((value) => value.isActive)
  const setAddItemModalState = useUpdateAtom(addItemsModalStateAtom)

  const handleRemove = (name: string) => {
    setBlockvalues((draft) => {
      const obj = draft
      const item = obj[id]
      if (item.type === BlockType.Multiple) {
        const snippets = item.snippets
        const index = snippets.findIndex((snippet) => snippet.name === name)
        if (index !== -1) {
          snippets[index].isActive = false
          return (draft = obj)
        }
      }
    })
  }

  const handleMoveBlock = (dir: 'left' | 'right', name: string) => {
    setBlockvalues((draft) => {
      const obj = draft
      const item = obj[id]
      if (item.type === BlockType.Multiple) {
        const snippets = item.snippets
        const position = snippets.findIndex((snippet) => snippet.name === name)
        if (position !== -1) {
          const moved = arrayMove(snippets, position, dir == 'left' ? position - 1 : position + 1)
          item.snippets = moved
          return (draft = obj)
        }
      }
    })
  }

  return (
    <div className="cursor-auto">
      <div className="mb-3 flex items-center justify-end py-3">
        <Button onClick={() => setAddItemModalState((state) => !state)} size="sm" scheme="success">
          <span className="mr-2">
            <FiPlus />
          </span>
          add Items
        </Button>
      </div>
      <div className="flex flex-wrap items-center ">
        {activeItems.map((data) => (
          <div key={data.name} className="card  mr-2 mb-2 bg-base-100 shadow-xl">
            <div className="card-body  ">
              <div className="flex items-center justify-between">
                <IconButton
                  aria-label="move block left"
                  Icon={<FiArrowLeft />}
                  size="xs"
                  scheme="success"
                  outline
                  onClick={() => handleMoveBlock('left', data.name)}
                />
                <IconButton
                  aria-label="move block right"
                  Icon={<FiArrowRight />}
                  size="xs"
                  scheme="success"
                  outline
                  onClick={() => handleMoveBlock('right', data.name)}
                />
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <p>{data.name}</p>
                <div dangerouslySetInnerHTML={{ __html: data.markdown }} />
              </div>

              <div className="card-actions">
                <Button
                  type="button"
                  onClick={() => handleRemove(data.name)}
                  scheme="error"
                  size="xs"
                >
                  remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MultipleItemsContentModal id={id} />
    </div>
  )
}
