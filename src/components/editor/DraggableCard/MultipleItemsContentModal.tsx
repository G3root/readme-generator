import * as React from 'react'

import { blockValuesAtom, addItemsModalStateAtom, toggleMultipleBlockItemAtom } from '~/store'
import { useAtom, useAtomValue } from 'jotai'
import { useUpdateAtom } from 'jotai/utils'
import { ExplicitMultipleBlockValue } from '~/types'
import { Modal, Select, Stack, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
export interface IMultipleItemsContentModalProps {
  id: string
}

interface FormValues {
  item: string | undefined
}

export function MultipleItemsContentModal({ id }: IMultipleItemsContentModalProps) {
  const [isOpen, setIsOpen] = useAtom(addItemsModalStateAtom)
  const blockValues = useAtomValue(blockValuesAtom)
  const addItem = useUpdateAtom(toggleMultipleBlockItemAtom)
  const multipleBlockValue = blockValues[id] as ExplicitMultipleBlockValue
  const inactiveItems = multipleBlockValue.snippets.filter((value) => !value.isActive)
  const items = inactiveItems.map((item) => item.name)

  const handleClose = () => {
    setIsOpen(false)
  }

  const form = useForm<FormValues>({
    initialValues: {
      item: undefined,
    },
    validate: (values) => ({
      item: values.item === undefined ? 'Add items is required' : null,
    }),
  })

  return (
    <Modal centered opened={isOpen} onClose={() => handleClose()} title="Update configs">
      <form
        onSubmit={form.onSubmit(({ item }: FormValues) => {
          if (item) {
            addItem({ id, name: item })
            handleClose()
          }
        })}
      >
        <Stack>
          <Select
            required
            label="add items"
            searchable
            nothingFound="No options"
            data={items}
            {...form.getInputProps('item')}
          />
          <Button type="submit">Add Item</Button>
        </Stack>
      </form>
    </Modal>
  )
}
