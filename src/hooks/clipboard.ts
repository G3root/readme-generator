import copy from 'copy-text-to-clipboard'
import * as React from 'react'

export function useClipboard(timeout = 1500) {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopy = (data: string) => {
    copy(data)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, timeout)
  }

  return {
    isCopied,
    handleCopy,
  }
}
