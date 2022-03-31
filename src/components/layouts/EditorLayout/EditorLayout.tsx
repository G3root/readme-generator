import * as React from 'react'
import { AppShell, Navbar, Text } from '@mantine/core'
import { EditorNavbar, SideBarContent } from '~/components/editor'
import { useAtomValue } from 'jotai'
import { sidebarDrawerStateAtom } from '~/store'
export interface IEditorLayoutProps {
  children: React.ReactNode
}

export function EditorLayout({ children }: IEditorLayoutProps) {
  const isOpen = useAtomValue(sidebarDrawerStateAtom)
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!isOpen} width={{ sm: 200, lg: 300 }}>
          <SideBarContent />
        </Navbar>
      }
      header={<EditorNavbar />}
    >
      {children}
    </AppShell>
  )
}
