import { BlockValuesObject } from "~/types";
import { atomWithImmer } from "jotai/immer";

export const activeBlocksAtom = atomWithImmer<string[]>([]);
export const inActiveBlocksAtom = atomWithImmer<string[]>([]);
export const nextIdAtom = atomWithImmer<Number>(200);
export const blockValuesAtom = atomWithImmer<BlockValuesObject>({});
