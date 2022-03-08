import { IconButton } from "~/components/primitives";
import { FiPlus } from "react-icons/fi";
import { activeBlocksAtom, inActiveBlocksAtom } from "~/store";
import { useUpdateAtom } from "jotai/utils";

export interface ISideBarListCardProps {
  name: string;
  id: string;
}

export function SideBarListCard({ name, id }: ISideBarListCardProps) {
  const setactiveBlocksAtom = useUpdateAtom(activeBlocksAtom);
  const setinActiveBlocksAtom = useUpdateAtom(inActiveBlocksAtom);
  const handleClick = () => {
    setinActiveBlocksAtom((draft) => {
      const filtered = draft.filter((value) => value !== id);
      return (draft = filtered);
    });
    setactiveBlocksAtom((draft) => {
      const items = draft;
      items.push(id);
      return (draft = items);
    });
  };
  return (
    <li>
      <div className="flex gap-4 " style={{ cursor: "default !important" }}>
        <span className="flex-none">
          <IconButton
            scheme="success"
            size="sm"
            aria-label="add item"
            Icon={<FiPlus />}
            onClick={handleClick}
          />
        </span>
        <span className="flex-1">{name}</span>
      </div>
    </li>
  );
}
