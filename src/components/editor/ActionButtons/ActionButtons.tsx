import * as React from 'react'

import { FiDownload, FiClipboard, FiCheck } from 'react-icons/fi'
import { useAtomCallback } from 'jotai/utils'
import { markdownAtom } from '~/store'
import { SiKofi } from 'react-icons/si'
import { useTranslation } from 'next-i18next'
import { Box, Group, Button } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'

export interface IActionButtonsProps {}

export function ActionButtons(props: IActionButtonsProps) {
  const clipboard = useClipboard({ timeout: 1500 })
  const { t } = useTranslation('editor')

  const generateMarkdown = useAtomCallback(
    React.useCallback((get) => {
      const markdown = get(markdownAtom)
      return markdown
    }, [])
  )

  const onCopy = async () => {
    const markdown = await generateMarkdown()
    clipboard.copy(markdown)
  }

  const handleDownload = async () => {
    const markdown = await generateMarkdown()
    const a = document.createElement('a')
    const blob = new Blob([markdown])
    a.href = URL.createObjectURL(blob)
    a.download = 'README.md'
    a.click()
  }

  return (
    <>
      <Button
        size="xs"
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://ko-fi.com/nfs21"
        leftIcon={<SiKofi size={20} aria-hidden />}
        color="red"
        variant="filled"
      >
        {t('support-me')}
      </Button>
      <Button
        size="xs"
        leftIcon={
          clipboard.copied ? (
            <FiCheck size={15} aria-hidden />
          ) : (
            <FiClipboard size={15} aria-hidden />
          )
        }
        variant="light"
        onClick={onCopy}
      >
        {clipboard.copied ? t('button-copied') : t('button-copy')}
      </Button>
      <Button
        size="xs"
        onClick={handleDownload}
        variant="light"
        color="cyan"
        leftIcon={<FiDownload size={15} aria-hidden />}
      >
        {t('button-download')}
      </Button>
    </>
  )
}
