// @ts-nocheck
import * as React from 'react'
import {
  OptionType,
  Options,
  SingleBlockValueOptions,
  ExplicitSingleBlock,
  ExplicitSingleBlockValue,
} from '~/types'
import {
  blockConfigModalStateAtom,
  blockValuesAtom,
  allBlocks,
  updateOptionsValueAtom,
} from '~/store'
import { useAtom, useAtomValue } from 'jotai'
import { useUpdateAtom } from 'jotai/utils'
import {
  Modal,
  Button,
  TextInput,
  Stack,
  Select,
  Checkbox,
  ColorInput,
  NumberInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'

export interface ISingleItemContentModalProps {
  id: string
}

export function SingleItemContentModal({ id }: ISingleItemContentModalProps) {
  const [isOpen, setIsOpen] = useAtom(blockConfigModalStateAtom)

  const handleClose = () => {
    setIsOpen(false)
  }

  const blockValue = useAtomValue(blockValuesAtom)[id] as ExplicitSingleBlockValue
  const blockValueOptions = blockValue.options as SingleBlockValueOptions[]

  const block = useAtomValue(allBlocks)[id] as ExplicitSingleBlock
  const blockOptions = block.options as OptionType[]

  const setOptionsValue = useUpdateAtom(updateOptionsValueAtom)

  const form = useForm({
    initialValues: {},
  })

  let data = []

  for (let index = 0; index < blockOptions.length; index++) {
    const option = blockOptions[index]
    const type = option.type
    const currentValue = blockValueOptions[index]
    const name = currentValue.name
    const value = currentValue.value
    const label = option.label

    if (type === Options.Select) {
      const selectData = option.options.map((item) => ({ label: item, value: item }))
      data.push(
        <Select
          defaultValue={value as string}
          label={label}
          id={name}
          key={name}
          data={selectData}
          {...form.getInputProps(name as any)}
        />
      )
    }
    if (type === Options.CheckBox) {
      data.push(
        <Checkbox
          defaultValue={value as any}
          key={name}
          label={label}
          {...form.getInputProps(name as any, { type: 'checkbox' })}
        />
      )
    }

    if (type === Options.Text) {
      if (option.textType === 'color') {
        data.push(
          <ColorInput
            defaultValue={value as string}
            label={label}
            id={name}
            type={option.textType as any}
            key={name}
            {...form.getInputProps(name as any)}
          />
        )
      } else {
        data.push(
          <TextInput
            defaultValue={value as string}
            label={label}
            id={name}
            type={option.textType as any}
            key={name}             
            {...form.getInputProps(name as any)}
          />
          
        )
      }
    }
  }

  return (
    <Modal centered opened={isOpen} onClose={() => handleClose()} title="Update configs">
      <form
        onSubmit={form.onSubmit((data) => {
          setOptionsValue({ id, values: data })
          handleClose()
        })}
      >
        <Stack>
          {data}
          <Button className="mt-2" type="submit">
            Save Config
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}
