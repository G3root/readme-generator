import { useAtomValue } from 'jotai'
import * as React from 'react'
import { FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi'
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
import { Box, Button, Grid, Group, Space, Card, Text, Stack, ActionIcon } from '@mantine/core'

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
    <Box>
      <Group position="right">
        <Button leftIcon={<FiPlus />} onClick={() => toggleModal()} size="sm">
          Add Items
        </Button>
      </Group>
      <Space h="sm" />
      <Grid>
        {activeItems.map((data) => (
          <Grid.Col key={data.name} span={2}>
            <div>
              <Card shadow="sm" p="lg">
                <Stack>
                  <Group position="apart">
                    <ActionIcon
                      variant="light"
                      color="teal"
                      aria-label="move block left"
                      onClick={() => {
                        handleMoveBlock('left', data.name)
                      }}
                    >
                      <FiArrowLeft aria-hidden />
                    </ActionIcon>
                    <ActionIcon
                      variant="light"
                      color="teal"
                      aria-label="move block right"
                      onClick={() => {
                        handleMoveBlock('right', data.name)
                      }}
                    >
                      <FiArrowRight aria-hidden />
                    </ActionIcon>
                  </Group>
                  <Box>
                    <Stack align="center">
                      <Text weight={500}>{data.name}</Text>
                      <div dangerouslySetInnerHTML={{ __html: data.markdown }} />
                    </Stack>
                  </Box>
                  <Button
                    variant="light"
                    color="red"
                    onClick={() => handleRemove(data.name)}
                    size="xs"
                  >
                    remove
                  </Button>
                </Stack>
              </Card>
            </div>
          </Grid.Col>
        ))}
      </Grid>
      <MultipleItemsContentModal id={id} />
    </Box>
  )
}
