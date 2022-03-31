import '~/styles/markdown-color.css'
import '~/styles/markdown.css'
import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import { appWithTranslation } from 'next-i18next'
import { MantineProvider, ColorScheme, ColorSchemeProvider, Global } from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme, fontFamily: 'Manrope, sans serif' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <DefaultSeo {...SEO} />
        <Global
          styles={[
            {
              '@font-face': {
                src: `url('/fonts/Manrope.woff2') format("woff2")`,
                fontFamily: 'Manrope',
                fontStyle: 'normal',
                fontWeight: '100 900',
                fontDisplay: 'swap',
              },
            },
          ]}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default appWithTranslation(MyApp)
