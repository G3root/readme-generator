import * as React from "react";
import { selectAtom } from "jotai/utils";
import { blockValuesAtom, defaultBlocksAtom } from "~/store";
import { useAtomValue } from "jotai";
import { BlockType } from "~/types";
import { SingleItemContent } from "./SingleItemContent";
import { MultipleItemsContent } from "./MultipleItemsContent";

export interface ICardEditableContentProps {
  id: string;
}

export function CardEditableContent({ id }: ICardEditableContentProps) {
  const blockValueAtom = selectAtom(
    blockValuesAtom,
    React.useCallback((block) => block[id].type, [id])
  );
  const defaultValueAtom = selectAtom(
    defaultBlocksAtom,
    React.useCallback((block) => block[id].type, [id])
  );

  const defaultBlocksType = useAtomValue(defaultValueAtom);
  const blockValueType = useAtomValue(blockValueAtom);
  const single = BlockType.Single;
  const multiple = BlockType.Multiple;
  return (
    <>
      {defaultBlocksType === single && blockValueType === single ? (
        <SingleItemContent id={id} />
      ) : null}
      {defaultBlocksType === multiple && blockValueType === multiple ? (
        <MultipleItemsContent id={id} />
      ) : null}
    </>
  );
}
