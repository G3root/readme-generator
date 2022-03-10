/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import * as React from 'react'
import { DiGithubBadge } from 'react-icons/di'

export interface IHeroProps {}

export function Hero(props: IHeroProps) {
  return (
    <div className="mx-auto px-8 pt-10 pb-20">
      <div className="xl:9/12 mx-auto w-full text-left md:w-11/12 lg:text-center">
        <h1 className="text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
          <span className="block">Create readme files</span>
          <span className="block text-primary">with speed</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base  sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          All in one tool to quickly generate a readme for your project or github profile
        </p>

        <div className="mt-10 flex flex-col items-center justify-center space-x-0 space-y-4 sm:flex-row   sm:space-y-0 sm:space-x-2">
          <Link href="/editor">
            <a className=" btn btn-success btn-lg w-full sm:w-auto">get started</a>
          </Link>
          <a
            href="https://github.com/G3root"
            target="__blank"
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
