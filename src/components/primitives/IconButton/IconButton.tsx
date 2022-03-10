import * as React from 'react'
import { ButtonStyleProps, buttonStyles } from './styles'

export interface IIconButtonProps extends ButtonStyleProps {
  Icon: JSX.Element
  'aria-label': string
}

const IconButtonInner = (
  { scheme, shape, size, outline, className, Icon, ...rest }: IIconButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const iconComponent = React.cloneElement(Icon, {
    'aria-hidden': true,
  })

  return (
    <button
      className={buttonStyles({
        scheme,
        shape,
        size,
        outline,
        class: className,
      })}
      {...rest}
      ref={ref}
    >
      {iconComponent}
    </button>
  )
}

export const IconButton = React.forwardRef(IconButtonInner)
