import * as React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'

export interface IThemeSwitcherProps {}

export function ThemeSwitcher(props: IThemeSwitcherProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
      aria-label="Toggle Dark Mode"
      variant="default"
      onClick={() => toggleColorScheme()}
      size={30}
    >
      {colorScheme === 'dark' ? <FiSun size={16} aria-hidden /> : <FiMoon size={16} aria-hidden />}
    </ActionIcon>
  )
}
