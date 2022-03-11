import '~/styles/globals.css'
import '~/styles/markdown-color.css'
import '~/styles/markdown.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
