import { cva } from 'class-variance-authority'
import { ExtractClass, Component } from '~/types'

export const toolTipStyles = cva(['tooltip'], {
  variants: {
    direction: {
      default: '',
      bottom: 'tooltip-bottom',
      left: 'tooltip-left',
      right: 'tooltip-right',
    },
    scheme: {
      default: '',
      primary: 'tooltip-primary',
      secondary: 'tooltip-secondary',
      accent: 'tooltip-accent',
      info: 'tooltip-info',
      success: 'tooltip-success',
      warning: 'tooltip-warning',
      error: 'tooltip-error',
    },
    forceOpen: {
      true: 'tooltip-open',
    },
  },
})

export type ToolTipStyleProps = Component<'div'> & ExtractClass<typeof toolTipStyles>
