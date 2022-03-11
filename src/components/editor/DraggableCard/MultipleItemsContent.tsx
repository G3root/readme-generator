import { useAtomValue } from 'jotai'
import * as React from 'react'
import { FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi'
import { Button, IconButton } from '~/components/primitives'
import {
  addItemsModalStateAtom,
  blockValuesAtom,
  allBlocks,
  moveMultipleBlockItemAtom,
  toggleMultipleBlockItemAtom,
} from '~/store'
import { ExplicitMultipleBlock, ExplicitMultipleBlockValue } from '~/types'
import { useUpdateAtom } from 'jotai/utils'
import { MultipleItemsContentModal } from './MultipleItemsContentModal'

export interface IMultipleItemsContentProps {
  id: string
}

export function MultipleItemsContent({ id }: IMultipleItemsContentProps) {
  const blockvalues = useAtomValue(blockValuesAtom)
  const moveItem = useUpdateAtom(moveMultipleBlockItemAtom)
  const removeItem = useUpdateAtom(toggleMultipleBlockItemAtom)
  const toggleModal = useUpdateAtom(addItemsModalStateAtom)
  const multipleBlockValue = blockvalues[id] as ExplicitMultipleBlockValue
  const block = useAtomValue(allBlocks)[id] as ExplicitMultipleBlock

  const mergeBlockAndValues = multipleBlockValue.snippets.map((snippet) => {
    const markdown = block.snippets.find((item) => item.name === snippet.name)?.markdown as string
    return { ...snippet, markdown }
  })
  const activeItems = mergeBlockAndValues.filter((value) => value.isActive)

  const handleRemove = (name: string) => {
    removeItem({ id, name })
  }

  const handleMoveBlock = (dir: 'left' | 'right', name: string) => {
    moveItem({ dir, name, id })
  }

  return (
    <div className="cursor-auto">
      <div className="mb-3 flex items-center justify-end py-3">
        <Button onClick={() => toggleModal()} size="sm" scheme="success">
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
                  onClick={() => {
                    console.log('left click')

                    handleMoveBlock('left', data.name)
                  }}
                />
                <IconButton
                  aria-label="move block right"
                  Icon={<FiArrowRight />}
                  size="xs"
                  scheme="success"
                  outline
                  onClick={() => {
                    console.log('right click')

                    handleMoveBlock('right', data.name)
                  }}
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
