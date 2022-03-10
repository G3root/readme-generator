import * as React from 'react'
import { clsx } from '~/utils'

export interface ILabelProps {
  labelText: string
  labelTextAlt?: string
  labelTextClassName?: string
}

export function Label({
  labelTextAlt,
  labelText,
  className,
  labelTextClassName,
  ...rest
}: ILabelProps & JSX.IntrinsicElements['label']) {
  return (
    <label className={clsx('label', className)} {...rest}>
      <span className={clsx('label-text', labelTextClassName)}>{labelText}</span>
      {labelTextAlt ? <span className="label-text-alt">{labelTextAlt}</span> : null}
    </label>
  )
}
