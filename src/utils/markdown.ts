import { BlockType, BlocksObject, BlockValuesObject } from '~/types'
import pupa from 'pupa'

export function GenerateMarkdown({
  blockIds,
  blocks,
  blockValues,
}: {
  blockIds: string[]
  blocks: BlocksObject
  blockValues: BlockValuesObject
}) {
  const markdown = blockIds.reduce((prev, current) => {
    const block = blocks[current]
    const blockValue = blockValues[current]

    switch (blockValue.type) {
      case BlockType.Single:
        if (blockValue.options) {
          const placeHolder = blockValue.options.reduce(
            (
              prev: {
                [key: string]: string | boolean
              },
              current
            ) => {
              if (current.isColor && typeof current.value === 'string') {
                prev[current.name] = current.value.replace('#', '')
              } else {
                prev[current.name] = current.value
              }
              return prev
            },
            {}
          )
          const markdown = pupa(blockValue.markdown, placeHolder)
          return prev + markdown
        }
        return prev + blockValue.markdown

      case BlockType.Multiple:
        const snippets = blockValue.snippets.reduce((preSnippet, currSnippet) => {
          const snippetMarkdown =
            block.type === BlockType.Multiple
              ? block.snippets.find(({ name }) => name === currSnippet.name)?.markdown
              : ''
          return currSnippet.isActive ? preSnippet + snippetMarkdown : preSnippet
        }, '')
        return prev + snippets
      default:
        return prev
    }
  }, '')
  return markdown
}
