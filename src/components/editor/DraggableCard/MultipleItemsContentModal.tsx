import * as React from 'react'
import { Dialog, Transition, Combobox } from '@headlessui/react'
import { Button } from '~/components/primitives'
import { FiCheck } from 'react-icons/fi'
import { BlockType } from '~/types'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormControl } from '~/components/primitives'

import { blockValuesAtom, addItemsModalStateAtom, toggleMultipleBlockItemAtom } from '~/store'
import { useAtom, useAtomValue } from 'jotai'
import { useUpdateAtom } from 'jotai/utils'
import { HiOutlineSelector } from 'react-icons/hi'
import { ExplicitMultipleBlockValue } from '~/types'
import { ModalBase } from '~/components/common'

export interface IMultipleItemsContentModalProps {
  id: string
}

type Inputs = {
  item: string
}

export function MultipleItemsContentModal({ id }: IMultipleItemsContentModalProps) {
  const [isOpen, setIsOpen] = useAtom(addItemsModalStateAtom)
  const blockValues = useAtomValue(blockValuesAtom)
  const addItem = useUpdateAtom(toggleMultipleBlockItemAtom)
  const multipleBlockValue = blockValues[id] as ExplicitMultipleBlockValue
  const inactiveItems = multipleBlockValue.snippets.filter((value) => !value.isActive)
  const items = inactiveItems.map((item) => item.name)
  const { handleSubmit, setValue, getValues, register, watch } = useForm<Inputs>()

  const handleClose = () => {
    setIsOpen(false)
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addItem({ id, name: data.item })
    setValue('item', '')
    handleClose()
  }

  const [query, setQuery] = React.useState('')

  const filteredName =
    query === ''
      ? items
      : items.filter((item) =>
          item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  React.useEffect(() => {
    register('item', { required: 'you should select at least one item' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const itemValue = watch('item')

  return (
    <ModalBase isOpen={isOpen} handleClose={handleClose}>
      <form className="plg:px-8 space-y-2 px-6 " onSubmit={handleSubmit(onSubmit)}>
        <Dialog.Title as="h3" className="text-xl font-medium ">
          Update configs
        </Dialog.Title>
        <FormControl>
          <Combobox
            value={itemValue}
            onChange={(value) => {
              setValue('item', value, { shouldValidate: true })
            }}
          >
            <div className="relative mt-4">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-base-100 text-left shadow-md  sm:text-sm">
                <Combobox.Label className="sr-only">add items</Combobox.Label>
                <Combobox.Input
                  className="input w-full  bg-base-300 "
                  displayValue={(item: string) => item}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <HiOutlineSelector className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>
              </div>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute  mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-100 py-1 text-base shadow-lg ring-1 ring-base-300 ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredName.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 ">
                      Nothing found.
                    </div>
                  ) : (
                    filteredName.map((item) => (
                      <Combobox.Option
                        key={item}
                        className={({ active }) =>
                          `relative z-40 cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-primary text-primary-content' : ''
                          }`
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {item}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-primary-content' : 'text-primary'
                                }`}
                              >
                                <FiCheck className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </FormControl>

        <div className=" flex items-center justify-end">
          <Button scheme="success" className="mt-4" type="submit">
            Add Item
          </Button>
        </div>
      </form>
    </ModalBase>
  )
}
