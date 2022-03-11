import { useAtom } from 'jotai'
import * as React from 'react'
import { ModalBase } from '~/components/common'
import { createCustomBlockAtom, customBlockModalStateAtom } from '~/store'
import { Dialog } from '@headlessui/react'
import { Button, FormControl, Label, Select, TextInput } from '~/components/primitives'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Category } from '~/types'
import { useUpdateAtom } from 'jotai/utils'

const options = [
  { label: 'project readme', value: Category.CustomProject },
  { label: 'github profile readme', value: Category.CustomGithubProfile },
]

type Inputs = {
  name: string
  category: Category.CustomProject | Category.CustomGithubProfile
}

export interface ICustomBlockModalProps {}

export default function CustomBlockModal(props: ICustomBlockModalProps) {
  const [isOpen, setIsOpen] = useAtom(customBlockModalStateAtom)
  const createCustomBlock = useUpdateAtom(createCustomBlockAtom)

  const handleClose = () => {
    setIsOpen(false)
  }
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({ name, category }) => {
    createCustomBlock({ name, category })
    handleClose()
  }

  return (
    <ModalBase isOpen={isOpen} handleClose={handleClose}>
      <form className="plg:px-8 space-y-2 px-6 " onSubmit={handleSubmit(onSubmit)}>
        <Dialog.Title as="h3" className="text-xl font-medium ">
          Update configs
        </Dialog.Title>

        <FormControl>
          <Label htmlFor="block-name" labelText="Block Name" />
          <TextInput
            id="block-name"
            {...register('name', { required: 'this field is required' })}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="block-category" labelText="Block Category" />
          <Select
            id="block-category"
            {...register('category', { required: 'this field is required' })}
          >
            {options.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}{' '}
              </option>
            ))}
          </Select>
        </FormControl>
        <div className=" flex items-center justify-end">
          <Button scheme="success" className="mt-2" type="submit">
            Add Block
          </Button>
        </div>
      </form>
    </ModalBase>
  )
}
