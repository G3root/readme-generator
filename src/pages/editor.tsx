import * as React from 'react'
import type { NextPage } from 'next'
import { MobileOnlyHeader, PreviewColumnTab } from '~/components/editor'
import { EditorLayout } from '~/components/layouts'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers'
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable'
import { useAtomCallback, useUpdateAtom } from 'jotai/utils'
import { useCallback } from 'react'
import { activeBlocksAtom } from '~/store'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

const Editor: NextPage = () => {
  const moveBlocks = useUpdateAtom(activeBlocksAtom)
  const blockIds = useAtomCallback(
    useCallback((get) => {
      const ids = get(activeBlocksAtom)
      return ids
    }, [])
  )

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    const ids = await blockIds()
    if (over?.id) {
      if (active.id !== over.id) {
        const oldIndex = ids.findIndex((s) => s === active.id)
        const newIndex = ids.findIndex((s) => s === over.id)
        moveBlocks((draft) => {
          const movedArray = arrayMove(draft, oldIndex, newIndex)
          return (draft = movedArray)
        })
      }
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
    >
      <EditorLayout>
        <MobileOnlyHeader />
        <PreviewColumnTab />
      </EditorLayout>
    </DndContext>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? '', ['common', 'editor'])),
  },
})

export default Editor
