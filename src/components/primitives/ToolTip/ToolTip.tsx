import * as React from 'react'
import { toolTipStyles, ToolTipStyleProps } from './styles'

export interface IToolTipProps extends ToolTipStyleProps {
  value: string
}

export function ToolTip({
  direction,
  className,
  forceOpen,
  scheme,
  children,
  value,
  ...rest
}: IToolTipProps) {
  return (
    <div
      className={toolTipStyles({
        direction,
        forceOpen,
        scheme,
        class: className,
      })}
      data-tip={value}
      {...rest}
    >
      {children}
    </div>
  )
}
