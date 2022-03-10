import { atom } from 'jotai'
import { BlockValuesObject, BlocksObjectWithId } from '~/types'
import { atomWithImmer } from 'jotai/immer'
import { atomWithToggle, generateBlockData, GenerateMarkdown } from '~/utils'

const { nextId, inActiveBlocks, blockValues, defaultBlocks } = generateBlockData()

// atoms wich key of defaultBlocksAtom/customBlocksAtom which are active
export const activeBlocksAtom = atomWithImmer<string[]>([])

// atoms wich key of defaultBlocksAtom/customBlocksAtom which are active
export const inActiveBlocksAtom = atomWithImmer<string[]>(inActiveBlocks)

// key for customBlocksAtom which increments
export const nextIdAtom = atomWithImmer<Number>(nextId)

//atom which holds editable values of customBlocksAtom/defaultBlocksAtom
export const blockValuesAtom = atomWithImmer<BlockValuesObject>(blockValues)

// atoms wich controls modal states
export const blockConfigModalStateAtom = atomWithToggle(false)
export const addItemsModalStateAtom = atomWithToggle(false)
export const customBlockModalStateAtom = atomWithToggle(false)

// atom wich holds default blocks
export const defaultBlocksAtom = atomWithImmer<BlocksObjectWithId>(defaultBlocks)

// atom wich holds custom blocks
export const customBlocksAtom = atomWithImmer<BlocksObjectWithId>({})

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
