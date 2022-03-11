import * as React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { FiChevronDown } from 'react-icons/fi'
import { IoLanguageOutline } from 'react-icons/io5'
import { useTranslation } from 'next-i18next'

export const languageSupports = [
  {
    label: 'English',
    route: '/en',
  },
]
export interface ILanguageSwitcherProps {}

export function LanguageSwitcher(props: ILanguageSwitcherProps) {
  const { t } = useTranslation('home')
  const router = useRouter()
  return (
    <Menu as="div" className="relative mr-2 inline-block text-left">
      <Menu.Button className="btn btn-ghost  rounded-btn">
        <span className="sr-only">{t('switch-language')}</span>
        <span className="flex items-center">
          <IoLanguageOutline size={20} className="mr-2" aria-hidden />
          <FiChevronDown size={15} aria-hidden />
        </span>
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right  rounded-md bg-base-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {languageSupports.map(({ label, route }, index) => (
              <Menu.Item key={`${label}_${index}`}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-primary text-primary-content' : 'text-base-content'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push(route)}
                  >
                    {label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
