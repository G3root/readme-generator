import * as React from 'react'
import { FiX, FiArrowDown, FiArrowUp, FiRefreshCw, FiTrash } from 'react-icons/fi'
import { VscGripper } from 'react-icons/vsc'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useAtomValue } from 'jotai'
import { useUpdateAtom, useAtomCallback } from 'jotai/utils'
import {
  removeBlockAtom,
  allBlocks,
  deleteCustomBlockAtom,
  moveBlockAtom,
  handleResetAtom,
} from '~/store'
import { Category } from '~/types'
import { CardEditableContent } from './CardEditableContent'
import {
  Card,
  Text,
  Accordion,
  Group,
  useMantineTheme,
  Box,
  ActionIcon,
  Space,
} from '@mantine/core'

export interface IDraggableCardProps {
  id: string
  position: number
}

export function DraggableCard({ id, position }: IDraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const block = useAtomValue(allBlocks)[id]
  const name = block.name
  const deleteCustomBlock = useUpdateAtom(deleteCustomBlockAtom)
  const moveBlock = useUpdateAtom(moveBlockAtom)
  const resetBlock = useUpdateAtom(handleResetAtom)
  const removeBlock = useUpdateAtom(removeBlockAtom)

  const defaultBlocks = useAtomCallback(
    React.useCallback((get) => {
      const blocks = get(allBlocks)
      return blocks
    }, [])
  )

  const handleRemove = () => {
    removeBlock({ id })
  }
  const handleDelete = () => {
    deleteCustomBlock({ id })
  }
  const handleUp = () => {
    moveBlock({ position, dir: 'up' })
  }
  const handleDown = () => {
    moveBlock({ position, dir: 'down' })
  }
  const handleReset = async () => {
    const blocks = await defaultBlocks()
    resetBlock({ id, blocks })
  }

  const isCustomBlock =
    block.category == Category.CustomProject || block.category == Category.CustomGithubProfile
  const theme = useMantineTheme()
  return (
    <Card shadow="sm" p="lg" ref={setNodeRef} style={style} {...attributes}>
      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>{name}</Text>
        <Box>
          <Group>
            <ActionIcon
              onClick={handleDown}
              color="teal"
              variant="light"
              aria-label="move block down"
            >
              <FiArrowDown aria-hidden />
            </ActionIcon>
            <ActionIcon onClick={handleUp} color="teal" variant="light" aria-label="move block up">
              <FiArrowUp aria-hidden />
            </ActionIcon>
            <ActionIcon onClick={handleReset} color="teal" variant="light" aria-label="reset block">
              <FiRefreshCw aria-hidden />
            </ActionIcon>
            <ActionIcon
              onClick={handleRemove}
              color="red"
              variant="light"
              aria-label="remove block"
            >
              <FiX aria-hidden />
            </ActionIcon>
            {isCustomBlock ? (
              <ActionIcon
                onClick={handleDelete}
                color="red"
                variant="light"
                aria-label="delete block"
              >
                <FiTrash aria-hidden />
              </ActionIcon>
            ) : null}
            <ActionIcon variant="light" aria-label="drag block">
              <VscGripper size={20} aria-hidden {...listeners} />
            </ActionIcon>
          </Group>
        </Box>
      </Group>
      <Space h="sm" />
      <Box>
        <Accordion iconPosition="right">
          <Accordion.Item label="Show editable content">
            <CardEditableContent id={id} />
          </Accordion.Item>
        </Accordion>
      </Box>
    </Card>
  )
}
