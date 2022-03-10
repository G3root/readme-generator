import * as React from 'react'
import { SelectInputStyleProps, selectInputStyles } from './styles'
export interface ISelectProps extends SelectInputStyleProps {
  children: React.ReactNode
}

function SelectInner(
  { variant, className, size, scheme, children, ...rest }: ISelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) {
  return (
    <select
      className={selectInputStyles({
        variant,
        size,
        scheme,
        class: className,
      })}
      {...rest}
      ref={ref}
    >
      {children}
    </select>
  )
}

export const Select = React.forwardRef(SelectInner)
