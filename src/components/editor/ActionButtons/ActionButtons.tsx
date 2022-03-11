import * as React from 'react'
import { Button } from '~/components/primitives'
import { FiDownload, FiClipboard, FiCheck } from 'react-icons/fi'
import { useClipboard } from '~/hooks'
import { useAtomCallback } from 'jotai/utils'
import { markdownAtom } from '~/store'
import { SiKofi } from 'react-icons/si'
import { useTranslation } from 'next-i18next'

export interface IActionButtonsProps {}

export function ActionButtons(props: IActionButtonsProps) {
  const { handleCopy, isCopied } = useClipboard()
  const { t } = useTranslation('editor')

  const generateMarkdown = useAtomCallback(
    React.useCallback((get) => {
      const markdown = get(markdownAtom)
      return markdown
    }, [])
  )

  const onCopy = async () => {
    const markdown = await generateMarkdown()
    handleCopy(markdown)
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
    <div className="mr-4 flex items-center space-x-2">
      <a
        href="https://ko-fi.com/nfs21"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-error btn-outline btn-xs flex lg:btn-sm"
      >
        <span className="mr-2">
          <SiKofi size={20} aria-hidden={true} />
        </span>
        {t('support-me')}
      </a>

      <Button onClick={onCopy} outline className="btn-xs lg:btn-sm">
        <span className="mr-2">
          {isCopied ? (
            <FiCheck size={15} aria-hidden={true} />
          ) : (
            <FiClipboard size={15} aria-hidden={true} />
          )}
        </span>
        {isCopied ? t('button-copied') : t('button-copy')}
      </Button>
      <Button onClick={handleDownload} scheme="success" className="btn-xs lg:btn-sm">
        <span className="mr-2">
          <FiDownload size={15} aria-hidden={true} />
        </span>
        {t('button-download')}
      </Button>
    </div>
  )
}
