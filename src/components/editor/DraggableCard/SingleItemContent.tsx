import * as React from 'react'
import { ExplicitSingleBlockValue } from '~/types'
import pupa from 'pupa'
import { useUpdateAtom } from 'jotai/utils'
import { blockConfigModalStateAtom, blockValuesAtom, updateBlockValueMarkdownAtom } from '~/store'
import { useAtomValue } from 'jotai'
import { SingleItemContentModal } from './SingleItemContentModal'
import { Box, Space, Textarea, Button, Group } from '@mantine/core'

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
    <Box>
      {options ? (
        <>
          <Group position="right">
            <Button onClick={() => toggleModal()}>update configs</Button>
          </Group>
          <Space h="sm" />
        </>
      ) : null}
      <Textarea
        value={markdown}
        onChange={(e) => onEditableChange(e.currentTarget.value)}
        autosize
        maxRows={12}
        disabled={options ? true : false}
      />
      {options ? <SingleItemContentModal id={id} /> : null}
    </Box>
  )
}
