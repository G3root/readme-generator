import * as React from 'react'
import { Dialog } from '@headlessui/react'
import { Button } from '~/components/primitives'
import {
  OptionType,
  Options,
  SingleBlockValueOptions,
  ExplicitSingleBlock,
  ExplicitSingleBlockValue,
} from '~/types'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { FormControl, Label, Select, TextInput } from '~/components/primitives'
import {
  blockConfigModalStateAtom,
  blockValuesAtom,
  allBlocks,
  updateOptionsValueAtom,
} from '~/store'
import { useAtom, useAtomValue } from 'jotai'
import { ModalBase } from '~/components/common'
import { useUpdateAtom } from 'jotai/utils'

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

  const {
    register,
    handleSubmit,

    formState: { errors },
    control,
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data)

    setOptionsValue({ id, values: data })
    handleClose()
  }

  let data = []

  for (let index = 0; index < blockOptions.length; index++) {
    const option = blockOptions[index]
    const type = option.type
    const currentValue = blockValueOptions[index]
    const name = currentValue.name
    const value = currentValue.value
    const label = option.label

    if (type === Options.Select) {
      data.push(
        <FormControl key={name}>
          <Label id={name} labelText={label} />
          <Select defaultValue={value as string} {...register(name)} id={name}>
            {option.options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </FormControl>
      )
    }
    if (type === Options.CheckBox) {
      data.push(
        <FormControl key={name}>
          <label className="label cursor-pointer">
            <span className="label-text">{label}</span>
            <Controller
              control={control}
              name={name}
              defaultValue={value}
              render={({ field }) => (
                <input
                  {...field}
                  onChange={(e) => {
                    return field.onChange(e.target.checked)
                  }}
                  defaultChecked={field.value ? true : false}
                  type="checkbox"
                  className="checkbox"
                />
              )}
            />
          </label>
        </FormControl>
      )
    }
    if (type === Options.Text) {
      data.push(
        <FormControl key={name}>
          <Label id={name} labelText={label} />
          <TextInput
            defaultValue={value as string}
            {...register(name)}
            id={name}
            type={option.textType}
          />
        </FormControl>
      )
    }
  }

  return (
    <ModalBase isOpen={isOpen} handleClose={handleClose}>
      <form className="plg:px-8 space-y-2 px-6 " onSubmit={handleSubmit(onSubmit)}>
        <Dialog.Title as="h3" className="text-xl font-medium ">
          Update configs
        </Dialog.Title>

        {data}
        <div className=" flex items-center justify-end">
          <Button className="mt-2" type="submit">
            update config
          </Button>
        </div>
      </form>
    </ModalBase>
  )
}
