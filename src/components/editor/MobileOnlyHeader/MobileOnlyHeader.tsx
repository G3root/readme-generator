import { Box, Group, MediaQuery, Space } from '@mantine/core'
import * as React from 'react'
import { ActionButtons } from '~/components/editor'

export interface IMobileOnlyHeaderProps {}

export function MobileOnlyHeader(props: IMobileOnlyHeaderProps) {
  return (
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      <Box>
        <Group position="right">
          <ActionButtons />
        </Group>
        <Space h="md" />
      </Box>
    </MediaQuery>
  )
}
