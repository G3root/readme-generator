import { BlockValuesObject, BlocksObjectWithId } from "~/types";
import { atomWithImmer } from "jotai/immer";
import { generateBlockData } from "~/utils";

const { nextId, inActiveBlocks, blockValues, defaultBlocks } =
  generateBlockData();

export const activeBlocksAtom = atomWithImmer<string[]>([]);
export const inActiveBlocksAtom = atomWithImmer<string[]>(inActiveBlocks);
export const nextIdAtom = atomWithImmer<Number>(nextId);
export const blockValuesAtom = atomWithImmer<BlockValuesObject>(blockValues);
export const defaultBlocksAtom =
  atomWithImmer<BlocksObjectWithId>(defaultBlocks);
