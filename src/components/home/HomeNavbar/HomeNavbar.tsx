import * as React from 'react'
import { LanguageSwitcher, NavbarLogo, ThemeSwitcher } from '~/components/common'
import { Header, Box, MediaQuery, Burger, useMantineTheme, Group } from '@mantine/core'
export interface IHomeNavbarProps {}

export function HomeNavbar(props: IHomeNavbarProps) {
  return (
    <Header height={50} p="md">
      <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Group align="center" position="apart" sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavbarLogo />
          </Box>

          <Group position="center" spacing="sm">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </Group>
        </Group>
      </Box>
    </Header>
  )
}
