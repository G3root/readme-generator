import * as React from 'react'
import { LanguageSwitcher, NavbarLogo, ThemeSwitcher } from '~/components/common'
import { ActionButtons } from '~/components/editor'
import { Header, Box, MediaQuery, Burger, useMantineTheme, Group } from '@mantine/core'
import { useAtom } from 'jotai'
import { sidebarDrawerStateAtom } from '~/store'

export interface IEditorNavbarProps {}

export function EditorNavbar(props: IEditorNavbarProps) {
  const theme = useMantineTheme()
  const [isOpened, toggle] = useAtom(sidebarDrawerStateAtom)
  return (
    <Header height={70} p="md">
      <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Group align="center" position="apart" sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={isOpened}
                onClick={() => toggle()}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <NavbarLogo />
          </Box>

          <Group position="center" spacing="sm">
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Group>
                <ActionButtons />
              </Group>
            </MediaQuery>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </Group>
        </Group>
      </Box>
    </Header>
  )
}
