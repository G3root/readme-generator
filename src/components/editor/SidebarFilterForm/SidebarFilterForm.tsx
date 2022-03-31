import { useAtom } from 'jotai'
import * as React from 'react'
import { FiPlus } from 'react-icons/fi'
import { customBlockModalStateAtom } from '~/store'
import CustomBlockModal from '../CustomBlockModal/CustomBlockModal'
import { useTranslation } from 'next-i18next'
import { Stack, TextInput, Select, Button } from '@mantine/core'

export interface ISidebarFilterFormProps {
  blockType: 'all' | 'project' | 'profile'
  query: string
  handleBlockType: (value: 'all' | 'project' | 'profile' | null) => void
  handleQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const options = [
  {
    label: 'All blocks',
    value: 'all',
  },
  {
    label: 'Project Readme',
    value: 'project',
  },
  {
    label: 'Github Profile Readme',
    value: 'profile',
  },
]

export function SidebarFilterForm({
  query,
  handleQuery,
  blockType,
  handleBlockType,
}: ISidebarFilterFormProps) {
  const [isOpen, toggleModal] = useAtom(customBlockModalStateAtom)
  const { t } = useTranslation('editor')
  return (
    <Stack>
      <Select
        value={blockType}
        onChange={(value) => handleBlockType(value as any)}
        label="Active Blocks"
        data={options}
      />
      <TextInput
        autoComplete="off"
        id="block-query"
        placeholder="search blocks..."
        value={query}
        onChange={handleQuery}
        aria-label="search blocks"
      />
      <Button leftIcon={<FiPlus aria-hidden />} onClick={() => toggleModal()}>
        {t('custom-block')}
      </Button>
      {isOpen ? <CustomBlockModal /> : null}
    </Stack>
  )
}
