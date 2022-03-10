import * as React from 'react'
import { FiX, FiArrowDown, FiArrowUp, FiRefreshCw, FiChevronUp, FiTrash } from 'react-icons/fi'
import { VscGripper } from 'react-icons/vsc'
import { IconButton, ToolTip } from '~/components/primitives'
import { Disclosure } from '@headlessui/react'
import { clsx } from '~/utils'
import { useSortable, arrayMove } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useAtomValue } from 'jotai'
import { useUpdateAtom, useAtomCallback, selectAtom } from 'jotai/utils'
import {
  activeBlocksAtom,
  blockValuesAtom,
  allBlocks,
  inActiveBlocksAtom,
  customBlocksAtom,
} from '~/store'
import { BlockType, Category } from '~/types'
import { CardEditableContent } from './CardEditableContent'

export interface IDraggableCardProps {
  id: string
  positon: number
}

export function DraggableCard({ id, positon }: IDraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const block = useAtomValue(allBlocks)[id]
  const name = block.name
  const updateActiveBlock = useUpdateAtom(activeBlocksAtom)
  const updateInactiveBlock = useUpdateAtom(inActiveBlocksAtom)
  const updateBlockValues = useUpdateAtom(blockValuesAtom)
  const updateCustomBlocks = useUpdateAtom(customBlocksAtom)

  const defaultBlocks = useAtomCallback(
    React.useCallback((get) => {
      const blocks = get(allBlocks)
      return blocks
    }, [])
  )

  const handleRemove = () => {
    updateActiveBlock((draft) => {
      const index = draft.findIndex((item) => item === id)
      if (index !== -1) {
        updateInactiveBlock((inActiveDraft) => {
          const inactiveItems = inActiveDraft
          inactiveItems.unshift(id)
          return (inActiveDraft = inactiveItems)
        })
        const items = draft
        items.splice(index, 1)
        return (draft = items)
      }
    })
  }
  const handleDelete = () => {
    updateActiveBlock((draft) => {
      const index = draft.findIndex((item) => item === id)
      if (index !== -1) {
        updateBlockValues((blockValues) => {
          let blockItems = blockValues
          delete blockItems[id]
          return (blockValues = blockItems)
        })
        updateCustomBlocks((blockValues) => {
          let blockItems = blockValues
          delete blockItems[id]
          return (blockValues = blockItems)
        })
        const items = draft
        items.splice(index, 1)
        return (draft = items)
      }
    })
  }
  const handleUp = () => {
    updateActiveBlock((draft) => {
      const items = arrayMove(draft, positon, positon - 1)
      return (draft = items)
    })
  }
  const handleDown = () => {
    updateActiveBlock((draft) => {
      const items = arrayMove(draft, positon, positon + 1)
      return (draft = items)
    })
  }
  const handleReset = async () => {
    const blocks = await defaultBlocks()
    updateBlockValues((draft) => {
      const items = draft
      const element = items[id]
      const markdown = blocks[id]
      const single = BlockType.Single
      const multiple = BlockType.Multiple
      if (element.type === single && markdown.type === single) {
        element.markdown = markdown.markdown
      } else if (element.type === multiple && markdown.type === multiple) {
        element.snippets = markdown.snippets.filter(({ name, isActive }) => ({
          name,
          isActive,
        }))
      }
      return (draft = items)
    })
  }

  const isCustomBlock =
    block.category === Category.CustomProject || Category.CustomGithubProfile ? true : false
  return (
    <li ref={setNodeRef} style={style} {...attributes}>
      <div className="card border border-base-300 bg-base-100  shadow-md">
        <div className="card-body">
          <div className="card-actions mb-3 justify-between">
            <div>
              <h1>{name}</h1>
            </div>
            <div className="flex items-center">
              <div className="mt-1 flex items-center space-x-2">
                <ToolTip direction="bottom" value="move block down">
                  <IconButton
                    size="xs"
                    shape="square"
                    scheme="success"
                    aria-label="move block down"
                    outline
                    Icon={<FiArrowDown />}
                    onClick={handleDown}
                  />
                </ToolTip>
                <ToolTip direction="bottom" value="move block up">
                  <IconButton
                    size="xs"
                    shape="square"
                    scheme="success"
                    aria-label="move block up"
                    outline
                    Icon={<FiArrowUp />}
                    onClick={handleUp}
                  />
                </ToolTip>
                <ToolTip direction="bottom" value="reset block">
                  <IconButton
                    size="xs"
                    shape="square"
                    scheme="success"
                    aria-label="reset block"
                    outline
                    Icon={<FiRefreshCw />}
                    onClick={handleReset}
                  />
                </ToolTip>
                <ToolTip direction="bottom" value="remove block">
                  <IconButton
                    size="xs"
                    shape="square"
                    scheme="error"
                    aria-label="remove block"
                    outline
                    Icon={<FiX />}
                    onClick={handleRemove}
                  />
                </ToolTip>
                {isCustomBlock ? (
                  <ToolTip direction="bottom" value="delete block">
                    <IconButton
                      size="xs"
                      shape="square"
                      scheme="error"
                      aria-label="delete block"
                      outline
                      Icon={<FiTrash />}
                      onClick={handleDelete}
                    />
                  </ToolTip>
                ) : null}
              </div>
              <IconButton
                size="sm"
                shape="square"
                scheme="ghost"
                aria-label="drag block"
                Icon={<VscGripper size={20} />}
                {...listeners}
              />
            </div>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between  rounded-md border border-base-300 bg-base-200 px-4 py-2 text-left text-sm font-medium">
                  <span>Show editable content</span>
                  <FiChevronUp
                    className={clsx(
                      'h-5 w-5 transition delay-75 ease-in-out',
                      open && 'rotate-180 transform'
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className=" border-b px-4 pt-4 pb-2 text-sm">
                  <CardEditableContent id={id} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </li>
  )
}
