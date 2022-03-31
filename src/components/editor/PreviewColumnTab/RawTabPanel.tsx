import * as React from 'react'
import { useAtomValue } from 'jotai'
import { markdownAtom } from '~/store'
import { Prism } from '@mantine/prism'
import { Box } from '@mantine/core'

export interface IRawTabPanelProps {}

export function RawTabPanel(props: IRawTabPanelProps) {
  const markdown = useAtomValue(markdownAtom)
  return (
    <Box
      sx={(theme) => ({
        overflow: 'auto',
        height: '70vh',

        [theme.fn.largerThan('sm')]: {
          height: '80vh',
        },
      })}
    >
      <Prism withLineNumbers language="markdown">
        {markdown}
      </Prism>
    </Box>
  )
}
