import { useAtomValue } from 'jotai'
import * as React from 'react'
import { DraggableCard } from '~/components/editor'
import { activeBlocksAtom } from '~/store'

import { SortableContext } from '@dnd-kit/sortable'
import { Stack } from '@mantine/core'
import { ScrollArea } from '@mantine/core'

export interface IEditorColumnTabPanelProps {}

export function EditorColumnTabPanel(props: IEditorColumnTabPanelProps) {
  const blockIds = useAtomValue(activeBlocksAtom)

  return (
    <SortableContext items={blockIds}>
      <ScrollArea
        sx={(theme) => ({
          height: '70vh',
          padding: theme.spacing.sm,
          [theme.fn.largerThan('sm')]: {
            height: '80vh',
          },
        })}
      >
        <Stack>
          {blockIds.map((data, index) => (
            <DraggableCard key={data} id={data} position={index} />
          ))}
        </Stack>
      </ScrollArea>
    </SortableContext>
  )
}
