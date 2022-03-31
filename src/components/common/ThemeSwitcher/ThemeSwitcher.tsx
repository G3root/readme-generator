import * as React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { ActionIcon } from '@mantine/core'
import { useTheme } from 'next-themes'
export interface IThemeSwitcherProps {}

export function ThemeSwitcher(props: IThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()

  return (
    <ActionIcon
      aria-label="Toggle Dark Mode"
      variant="default"
      onClick={() => {
        if (theme === 'dark') {
          setTheme('light')
        } else {
          setTheme('dark')
        }
      }}
      size={30}
    >
      {theme === 'dark' ? <FiSun size={16} aria-hidden /> : <FiMoon size={16} aria-hidden />}
    </ActionIcon>
  )
}
