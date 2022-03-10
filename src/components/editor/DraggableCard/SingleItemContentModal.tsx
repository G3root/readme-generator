import * as React from 'react'
import { Dialog } from '@headlessui/react'
import { Button } from '~/components/primitives'
import { OptionType, Options, SingleBlockValueOptions } from '~/types'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormControl, Label, Select, TextInput } from '~/components/primitives'
import { selectAtom } from 'jotai/utils'
import { blockConfigModalStateAtom, blockValuesAtom, allBlocks } from '~/store'
import { useAtom, useAtomValue } from 'jotai'
import { ModalBase } from '~/components/common'

export interface ISingleItemContentModalProps {
  id: string
}

export function SingleItemContentModal({ id }: ISingleItemContentModalProps) {
  const [isOpen, setIsOpen] = useAtom(blockConfigModalStateAtom)

  const handleClose = () => {
    setIsOpen(false)
  }

  const blockAtom = selectAtom(
    allBlocks,
    React.useCallback((block: any) => block[id].options, [id])
  )

  const blockValueAtom = selectAtom(
    blockValuesAtom,
    React.useCallback((block: any) => block[id].options, [id])
  )

  const blockValueOptions = useAtomValue(blockValueAtom) as SingleBlockValueOptions[]

  const blockOptions = useAtomValue(blockAtom) as OptionType[]

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    // setOptionsValue(id, data);
    // onClose();
    handleClose()
  }

  const data = blockOptions.map((option, index) => {
    const type = option.type
    const currentValue = blockValueOptions[index]
    const name = currentValue.name
    const value = currentValue.value
    const label = option.label

    switch (type) {
      case Options.CheckBox:
        return (
          <FormControl key={name}>
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                defaultChecked={value as boolean}
                {...register(name)}
                type="checkbox"
                className="checkbox"
              />
            </label>
          </FormControl>
        )
      case Options.Select:
        return (
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
      case Options.Text:
        return (
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
  })

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
