import * as React from 'react'
import { blockValuesAtom, allBlocks } from '~/store'
import { useAtomValue } from 'jotai'
import { BlockType } from '~/types'
import { SingleItemContent } from './SingleItemContent'
import { MultipleItemsContent } from './MultipleItemsContent'

export interface ICardEditableContentProps {
  id: string
}

function CardEditableContentRoot({ id }: ICardEditableContentProps) {
  const defaultBlocksType = useAtomValue(allBlocks)[id].type
  const blockValueType = useAtomValue(blockValuesAtom)[id].type
  const single = BlockType.Single
  const multiple = BlockType.Multiple

  return (
    <>
      {defaultBlocksType === single && blockValueType === single ? (
        <SingleItemContent id={id} />
      ) : null}
      {defaultBlocksType === multiple && blockValueType === multiple ? (
        <MultipleItemsContent id={id} />
      ) : null}
    </>
  )
}

export const CardEditableContent = React.memo(CardEditableContentRoot)
