import { atom } from 'jotai'
import { BlockValuesObject, BlocksObjectWithId, BlockType } from '~/types'
import { atomWithImmer, withImmer } from 'jotai/immer'
import { atomWithToggle, generateBlockData, GenerateMarkdown } from '~/utils'
import { arrayMove } from '@dnd-kit/sortable'
import { atomWithStorage } from 'jotai/utils'

const { nextId, inActiveBlocks, blockValues, defaultBlocks } = generateBlockData()

// atoms which key of defaultBlocksAtom/customBlocksAtom which are active
// @ts-ignore
export const activeBlocksAtom = withImmer<string[]>(atomWithStorage('active', []))

// atoms which key of defaultBlocksAtom/customBlocksAtom which are active
export const inActiveBlocksAtom = withImmer<string[]>(atomWithStorage('inactive', inActiveBlocks))

// key for customBlocksAtom which increments
export const nextIdAtom = withImmer(atomWithStorage('id', nextId))

//atom which holds editable values of customBlocksAtom/defaultBlocksAtom
export const blockValuesAtom = withImmer<BlockValuesObject>(atomWithStorage('values', blockValues))

// atoms which controls modal states
export const blockConfigModalStateAtom = atomWithToggle(false)
export const addItemsModalStateAtom = atomWithToggle(false)
export const customBlockModalStateAtom = atomWithToggle(false)

// atoms which hide sidebar on mobile
export const sidebarDrawerStateAtom = atomWithToggle(false)

// atom which holds default blocks
export const defaultBlocksAtom = atomWithImmer<BlocksObjectWithId>(defaultBlocks)

// atom which holds custom blocks
export const customBlocksAtom = withImmer<BlocksObjectWithId>(atomWithStorage('custom-blocks', {}))

// a derived atom which generates markdown from block value which are active
export const markdownAtom = atom((get) => {
  const blockIds = get(activeBlocksAtom)
  const blocks = get(defaultBlocksAtom)
  const blockValues = get(blockValuesAtom)
  const markdown = GenerateMarkdown({ blockIds, blocks, blockValues })
  return markdown
})

// a derived atom which returns combination of customBlocksAtom and defaultBlocksAtom
export const allBlocks = atom((get) => {
  const defaultBlocks = get(defaultBlocksAtom)
  const customBlocks = get(customBlocksAtom)
  return Object.assign(defaultBlocks, customBlocks)
})

// a derived atom for creating custom block
export const createCustomBlockAtom = atom(null, (get, set, { name, category }) => {
  const id = get(nextIdAtom).toString()
  set(customBlocksAtom, (draft) => {
    draft[id] = { id, name, category, type: BlockType.Single, markdown: '' }
    return (draft = draft)
  })
  set(blockValuesAtom, (draft) => {
    draft[id] = { id, name, markdown: '', type: BlockType.Single }
    return (draft = draft)
  })
  set(activeBlocksAtom, (draft) => {
    draft.unshift(id)
    return (draft = draft)
  })
  set(nextIdAtom, (draft) => {
    let new_id = draft + 1
    return (draft = new_id)
  })
})

export const deleteCustomBlockAtom = atom(null, (get, set, { id }) => {
  set(activeBlocksAtom, (draft) => {
    const index = draft.findIndex((item) => item === id)
    if (index !== -1) {
      set(blockValuesAtom, (blockValues) => {
        delete blockValues[id]
        return (blockValues = blockValues)
      })
      set(customBlocksAtom, (blockValues) => {
        delete blockValues[id]
        return (blockValues = blockValues)
      })
      draft.splice(index, 1)
      return (draft = draft)
    }
  })
})

export const removeBlockAtom = atom(null, (get, set, { id }: { id: string }) => {
  set(activeBlocksAtom, (draft) => {
    const index = draft.findIndex((item) => item === id)
    if (index !== -1) {
      set(inActiveBlocksAtom, (inActiveDraft) => {
        inActiveDraft.unshift(id)
        return (inActiveDraft = inActiveDraft)
      })
      draft.splice(index, 1)
      return (draft = draft)
    }
  })
})

export const moveBlockAtom = atom(
  null,
  (get, set, { position, dir }: { position: number; dir: 'up' | 'down' }) => {
    set(activeBlocksAtom, (draft) => {
      const items = arrayMove(draft, position, dir === 'down' ? position + 1 : position - 1)
      return (draft = items)
    })
  }
)

export const handleResetAtom = atom(
  null,
  (get, set, { id, blocks }: { id: string; blocks: BlocksObjectWithId }) => {
    set(blockValuesAtom, (draft) => {
      const items = draft
      const element = items[id]
      const markdown = blocks[id]
      const single = BlockType.Single
      const multiple = BlockType.Multiple
      if (element.type === single && markdown.type === single) {
        element.markdown = markdown.markdown
      } else if (element.type === multiple && markdown.type === multiple) {
        element.snippets = markdown.snippets.filter(({ name, isActive }) => ({
          name,
          isActive,
        }))
      }
      return (draft = items)
    })
  }
)

export const makeBlockActiveAtom = atom(null, (get, set, { id }: { id: string }) => {
  set(inActiveBlocksAtom, (draft) => {
    const filtered = draft.filter((value) => value !== id)
    return (draft = filtered)
  })
  set(activeBlocksAtom, (draft) => {
    const items = draft
    items.push(id)
    return (draft = items)
  })
})

export const toggleMultipleBlockItemAtom = atom(
  null,
  (get, set, { id, name }: { id: string; name: string }) => {
    set(blockValuesAtom, (draft) => {
      const item = draft[id]
      if (item.type === BlockType.Multiple) {
        const snippets = item.snippets
        const index = snippets.findIndex((snippet) => snippet.name === name)
        if (index !== -1) {
          const currentValue = snippets[index].isActive
          snippets[index].isActive = !currentValue
          return (draft = draft)
        }
      }
      return (draft = draft)
    })
  }
)

export const moveMultipleBlockItemAtom = atom(
  null,
  (get, set, { dir, name, id }: { dir: 'left' | 'right'; name: string; id: string }) => {
    set(blockValuesAtom, (draft) => {
      const item = draft[id]
      if (item.type === BlockType.Multiple) {
        const snippets = item.snippets
        const position = snippets.findIndex((snippet) => snippet.name === name)
        if (position !== -1) {
          const moved = arrayMove(snippets, position, dir == 'left' ? position - 1 : position + 1)
          item.snippets = moved
          return (draft = draft)
        }
      }
    })
  }
)

export const updateBlockValueMarkdownAtom = atom(
  null,
  (get, set, { id, code }: { id: string; code: string }) => {
    set(blockValuesAtom, (draft) => {
      const element = draft[id]
      const single = BlockType.Single
      if (element.type === single) {
        element.markdown = code
      }
      return (draft = draft)
    })
  }
)

export const updateOptionsValueAtom = atom(null, (get, set, { id, values }) => {
  set(blockValuesAtom, (draft) => {
    const element = draft[id]
    const single = BlockType.Single
    if (element.type === single && element.options) {
      const options = element.options
      const keys = Object.keys(values)
      keys.forEach((key) => {
        const index = options.findIndex((item) => item.name === key)
        if (index !== -1) options[index].value = values[key]
      })
      return (draft = draft)
    }

    return (draft = draft)
  })
})
