import { useAtom } from 'jotai'
import * as React from 'react'
import { createCustomBlockAtom, customBlockModalStateAtom } from '~/store'

import { Category } from '~/types'
import { useUpdateAtom } from 'jotai/utils'
import { Modal, Button, TextInput, Stack, Select } from '@mantine/core'
import { useForm } from '@mantine/form'
const options = [
  { label: 'project readme', value: String(Category.CustomProject) },
  { label: 'github profile readme', value: String(Category.CustomGithubProfile) },
]

export interface ICustomBlockModalProps {}

interface FormValues {
  name: string
  category: string | undefined
}

export default function CustomBlockModal(props: ICustomBlockModalProps) {
  const [isOpen, setIsOpen] = useAtom(customBlockModalStateAtom)
  const createCustomBlock = useUpdateAtom(createCustomBlockAtom)

  const handleClose = () => {
    setIsOpen(false)
  }
  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      category: undefined,
    },
    validate: (values) => ({
      category: values.category === undefined ? 'block category is required' : null,
    }),
  })

  return (
    <Modal centered opened={isOpen} onClose={() => handleClose()} title="Update configs">
      <form
        onSubmit={form.onSubmit(({ name, category }: FormValues) => {
          createCustomBlock({ name, category: Number(category) })
          handleClose()
        })}
      >
        <Stack>
          <TextInput id="block-name" label="Block Name" required {...form.getInputProps('name')} />
          <Select
            id="block-category"
            required
            label="Block Category"
            data={options}
            {...form.getInputProps('category')}
          />
          <Button type="submit">Add Block</Button>
        </Stack>
      </form>
    </Modal>
  )
}
