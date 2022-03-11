import * as React from 'react'
import { NavbarLogo, ThemeSwitcher } from '~/components/common'

export interface IHomeNavbarProps {}

export function HomeNavbar(props: IHomeNavbarProps) {
  return (
    <div className="mx-auto h-16 max-w-screen-2xl">
      <div className="flex h-full w-full items-center justify-between px-6">
        <div>
          <NavbarLogo />
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
