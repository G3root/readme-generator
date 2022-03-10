import { useAtom } from 'jotai'
import * as React from 'react'
import { FiPlus } from 'react-icons/fi'
import {
  Button,
  FormControl,
  Label,
  Select,
  TextInput,
  VisuallyHidden,
} from '~/components/primitives'
import { customBlockModalStateAtom } from '~/store'
import CustomBlockModal from '../CustomBlockModal/CustomBlockModal'

export interface ISidebarFilterFormProps {
  blockType: 'all' | 'project' | 'profile'
  query: string
  handleBlockType: (e: React.ChangeEvent<HTMLSelectElement>) => void
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
  return (
    <>
      <FormControl>
        <Label htmlFor="active-block" labelText="Active Blocks" />
        <Select defaultValue={blockType} onChange={handleBlockType} size="sm" id="active-block">
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl className="mt-2">
        <VisuallyHidden>
          <Label htmlFor="block-query" labelText="search blocks" />
        </VisuallyHidden>
        <TextInput
          size="sm"
          name="search"
          autoComplete="off"
          id="block-query"
          placeholder="search blocks..."
          defaultValue={query}
          onChange={handleQuery}
        />
        <div className="mt-4 mr-4 flex items-center justify-end">
          <Button onClick={() => toggleModal()} outline scheme="success" size="sm">
            <span className="mr-2">
              <FiPlus aria-hidden />
            </span>
            Custom Block
          </Button>
        </div>
      </FormControl>
      {isOpen ? <CustomBlockModal /> : null}
    </>
  )
}
