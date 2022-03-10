import * as React from 'react'

export interface IEditorLayoutProps {
  children: React.ReactNode
}

export function EditorLayout({ children }: IEditorLayoutProps) {
  return (
    <div className="drawer drawer-mobile h-screen bg-base-100">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  )
}
