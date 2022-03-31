import * as React from 'react'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import { Tabs } from '@mantine/core'

const EditorColumnTabPanel = dynamic<{}>(() =>
  import('./EditorColumnTabPanel').then((mod) => mod.EditorColumnTabPanel)
)
const PreviewTabPanel = dynamic<{}>(() =>
  import('./PreviewTabPanel').then((mod) => mod.PreviewTabPanel)
)
const RawTabPanel = dynamic<{}>(() => import('./RawTabPanel').then((mod) => mod.RawTabPanel))

export interface IPreviewColumnTabProps {}

export function PreviewColumnTab(props: IPreviewColumnTabProps) {
  const { t } = useTranslation('editor')
  const tabList = React.useMemo(
    () => [
      { label: t('editor-tab-title'), content: <EditorColumnTabPanel /> },
      { label: t('preview-tab-title'), content: <PreviewTabPanel /> },
      { label: t('raw-tab-title'), content: <RawTabPanel /> },
    ],
    [t]
  )
  return (
    <Tabs variant="default">
      {tabList.map(({ label, content }) => (
        <Tabs.Tab key={label} label={label}>
          {content}
        </Tabs.Tab>
      ))}
    </Tabs>
  )
}
