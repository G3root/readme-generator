import * as React from 'react'

import { useRouter } from 'next/router'
import { FiChevronDown } from 'react-icons/fi'
import { IoLanguageOutline } from 'react-icons/io5'
import { useTranslation } from 'next-i18next'
import { Menu, ActionIcon } from '@mantine/core'
import NextLink from 'next/link'

export const languageSupports = [
  {
    label: 'English',
    route: 'en',
  },
]
export interface ILanguageSwitcherProps {}

export function LanguageSwitcher(props: ILanguageSwitcherProps) {
  const { t } = useTranslation('home')
  const router = useRouter()
  const currentPath = router.asPath
  return (
    <Menu
      menuButtonLabel={t('switch-language')}
      control={
        <ActionIcon>
          <IoLanguageOutline size={20} aria-hidden />
        </ActionIcon>
      }
      withArrow
    >
      {languageSupports.map(({ label, route }) => (
        <NextLink key={label} href={currentPath} locale={route} passHref>
          <Menu.Item component="a">{label}</Menu.Item>
        </NextLink>
      ))}
    </Menu>
  )
}
