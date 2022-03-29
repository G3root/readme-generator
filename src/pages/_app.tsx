import '~/styles/globals.css'
import '~/styles/markdown-color.css'
import '~/styles/markdown.css'
import { getCookie, setCookies } from 'cookies-next'
import { useState } from 'react'
import { GetServerSidePropsContext } from 'next'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import { appWithTranslation } from 'next-i18next'
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core'
function MyApp(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
  }
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

MyApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
})

export default appWithTranslation(MyApp)
