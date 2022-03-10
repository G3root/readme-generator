import { useAtomValue } from "jotai";
import * as React from "react";
import { DraggableCard } from "~/components/editor";
import { activeBlocksAtom } from "~/store";

import { SortableContext } from "@dnd-kit/sortable";

export interface IEditorColumnTabPanelProps {}

export function EditorColumnTabPanel(props: IEditorColumnTabPanelProps) {
  const blockIds = useAtomValue(activeBlocksAtom);
  return (
    <SortableContext items={blockIds}>
      <div className="h-[74vh] overflow-auto border p-4 lg:h-[83vh]">
        <ul className="flex flex-col space-y-2">
          {blockIds.map((data, index) => (
            <DraggableCard key={data} id={data} positon={index} />
          ))}
        </ul>
      </div>
    </SortableContext>
  );
}
