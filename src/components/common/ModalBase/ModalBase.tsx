import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconButton } from '~/components/primitives'
import { FiX } from 'react-icons/fi'

export interface IModalBaseProps {
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
}

export function ModalBase({ isOpen, handleClose, children }: IModalBaseProps) {
  const focusref = React.useRef(null)
  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isOpen}
        onClose={() => handleClose()}
        initialFocus={focusref}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-neutral-focus bg-opacity-40 transition-opacity duration-200 ease-in-out" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block transform  rounded-lg bg-base-100 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-base-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-end p-2">
                  <IconButton
                    aria-label="close modal"
                    size="sm"
                    shape="square"
                    Icon={<FiX />}
                    onClick={handleClose}
                    ref={focusref}
                  />
                </div>
                <div className="flex flex-col">{children}</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
