import '~/styles/markdown-color.css'
import '~/styles/markdown.css'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import { appWithTranslation } from 'next-i18next'
import { MantineProvider } from '@mantine/core'
import { Global } from '@mantine/core'

import { ThemeProvider, useTheme } from 'next-themes'

function MantineProviders({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return (
    <MantineProvider
      theme={{
        colorScheme: theme === 'dark' ? 'dark' : 'light',
        fontFamily: 'Manrope, sans serif',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  )
}
function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider>
      <MantineProviders>
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
      </MantineProviders>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
