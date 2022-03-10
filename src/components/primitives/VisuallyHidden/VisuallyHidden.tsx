import * as React from 'react'

export interface IVisuallyHiddenProps {
  children: React.ReactNode
}

export function VisuallyHidden({ children }: IVisuallyHiddenProps) {
  return <div className="sr-only">{children}</div>
}
