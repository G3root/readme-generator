import * as React from 'react'
import { ActionButtons } from '~/components/editor'

export interface IMobileOnlyHeaderProps {}

export function MobileOnlyHeader(props: IMobileOnlyHeaderProps) {
  return (
    <div className="flex items-center justify-end py-2 lg:hidden">
      <ActionButtons />
    </div>
  )
}
