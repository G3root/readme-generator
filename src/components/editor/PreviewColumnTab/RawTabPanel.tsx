import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { clsx } from '~/utils'
import { useAtomValue } from 'jotai'
import { markdownAtom } from '~/store'

export interface IRawTabPanelProps {}

export function RawTabPanel(props: IRawTabPanelProps) {
  const markdown = useAtomValue(markdownAtom)
  return (
    <div className="h-[74vh] overflow-auto rounded-lg bg-[#011627] p-5 lg:h-[83vh]">
      <Highlight {...defaultProps} code={markdown} theme={theme} language="markdown">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const { className, ...rest } = getLineProps({ line, key: i })
              return (
                <div key={i} className={clsx(className, 'px-5')} {...rest}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
