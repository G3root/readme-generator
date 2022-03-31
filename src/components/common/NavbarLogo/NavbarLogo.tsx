import * as React from 'react'
import { Text } from '@mantine/core'
import { NextLink } from '@mantine/next'

export interface INavbarLogoProps {}

export function NavbarLogo(props: INavbarLogoProps) {
  return (
    <Text
      component={NextLink}
      href="/"
      sx={{
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        fontWeight: 800,
        ['@media (min-width: 1024px)']: {
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
        },
      }}
    >
      Readme
    </Text>
  )
}
