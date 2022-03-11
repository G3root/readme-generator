import type { DefaultSeoProps } from 'next-seo'

const APP_URL = 'nxt-readme.vercel.app'
const FULL_APP_URL = `https://${APP_URL}/`

const defaultSEO: DefaultSeoProps = {
  titleTemplate: `%s | ${APP_URL}`,
  defaultTitle: 'Github Readme Generator',
  description:
    "A fully featured editor with drag and drop interface to create your README's with speed.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: FULL_APP_URL,
    title: 'Github Readme Generator',
    description: `A fully featured editor with drag and drop interface to create your README's with speed.`,
    site_name: 'Github Readme Generator',
  },
  twitter: {
    handle: '@NFS__21',
    cardType: 'summary',
  },
}

export default defaultSEO
