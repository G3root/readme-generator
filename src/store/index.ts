import { atom } from "jotai";
import { BlockValuesObject, BlocksObjectWithId } from "~/types";
import { atomWithImmer } from "jotai/immer";
import { generateBlockData, GenerateMarkdown } from "~/utils";

const { nextId, inActiveBlocks, blockValues, defaultBlocks } =
  generateBlockData();

export const activeBlocksAtom = atomWithImmer<string[]>([]);
export const inActiveBlocksAtom = atomWithImmer<string[]>(inActiveBlocks);
export const nextIdAtom = atomWithImmer<Number>(nextId);
export const blockValuesAtom = atomWithImmer<BlockValuesObject>(blockValues);

export const blockConfigModalStateAtom = atom(false);
export const addItemsModalStateAtom = atom(false);

export const defaultBlocksAtom =
  atomWithImmer<BlocksObjectWithId>(defaultBlocks);

export const markdownAtom = atom((get) => {
  const blockIds = get(activeBlocksAtom);
  const blocks = get(defaultBlocksAtom);
  const blockValues = get(blockValuesAtom);
  const markdown = GenerateMarkdown({ blockIds, blocks, blockValues });
  return markdown;
});
