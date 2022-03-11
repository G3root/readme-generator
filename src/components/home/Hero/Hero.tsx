/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import * as React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { useTranslation } from 'next-i18next'

export interface IHeroProps {}

export function Hero(props: IHeroProps) {
  const { t } = useTranslation('home')
  return (
    <div className="mx-auto px-8 pt-10 pb-20">
      <div className="xl:9/12 mx-auto w-full text-left md:w-11/12 lg:text-center">
        <h1 className="text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
          <span className="block">{t('title-main')}</span>
          <span className="block text-primary">{t('title-highlighted')}</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base  sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          {t('message')}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center space-x-0 space-y-4 sm:flex-row   sm:space-y-0 sm:space-x-2">
          <Link href="/editor">
            <a className=" btn btn-success btn-lg w-full sm:w-auto">{t('get-started')}</a>
          </Link>
          <a
            href="https://github.com/G3root"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline  btn-lg w-full sm:w-auto"
          >
            <span className="mr-2">
              <DiGithubBadge size="2rem" />
            </span>
            Github
          </a>
        </div>
      </div>
      <div className=" mx-auto mt-20 w-10/12 text-center">
        <img
          src="/images/editor-screenshot.png"
          alt="editor page screenshot"
          className="w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}
