import * as React from 'react'
import { Tab } from '@headlessui/react'
import { clsx } from '~/utils'
import { RawTabPanel } from './RawTabPanel'
import { PreviewTabPanel } from './PreviewTabPanel'
import { EditorColumnTabPanel } from './EditorColumnTabPanel'
import { useTranslation } from 'next-i18next'

const Panels = [
  { id: 1, component: <EditorColumnTabPanel /> },
  { id: 2, component: <PreviewTabPanel /> },
  { id: 3, component: <RawTabPanel /> },
]

export interface IPreviewColumnTabProps {}

export function PreviewColumnTab(props: IPreviewColumnTabProps) {
  const { t } = useTranslation('editor')
  const Tablist = [t('editor-tab-title'), t('preview-tab-title'), t('raw-tab-title')]
  return (
    <Tab.Group>
      <Tab.List className="tabs">
        {Tablist.map((data) => (
          <Tab
            className={({ selected }) => clsx('tab tab-bordered ', selected ? 'tab-active' : '')}
            key={data}
          >
            {data}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {Panels.map((data) => (
          <Tab.Panel className={clsx(' rounded-xl p-3')} key={data.id}>
            {data.component}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
