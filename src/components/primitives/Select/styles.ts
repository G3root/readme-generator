import { cva } from 'class-variance-authority'
import { ExtractClass, Component } from '~/types'

export const selectInputStyles = cva(['select w-full'], {
  variants: {
    variant: {
      default: '',
      bordered: 'select-bordered',
      ghost: 'select-ghost',
    },
    size: {
      lg: 'select-lg',
      md: 'select-md',
      default: '',
      sm: 'select-sm',
      xs: 'select-xs',
    },
    scheme: {
      default: '',
      primary: 'select-primary',
      secondary: 'select-secondary',
      accent: 'select-accent',
      info: 'select-info',
      success: 'select-success',
      warning: 'select-warning',
      error: 'select-error',
    },
  },
  defaultVariants: {
    variant: 'bordered',
  },
})

export type SelectInputStyleProps = Omit<Component<'select'>, 'size'> &
  ExtractClass<typeof selectInputStyles>
