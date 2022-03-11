import { IconButton } from '~/components/primitives'
import { FiPlus } from 'react-icons/fi'
import { makeBlockActiveAtom } from '~/store'
import { useUpdateAtom } from 'jotai/utils'

export interface ISideBarListCardProps {
  name: string
  id: string
}

export function SideBarListCard({ name, id }: ISideBarListCardProps) {
  const makeBlockActive = useUpdateAtom(makeBlockActiveAtom)
  const handleClick = () => {
    makeBlockActive({ id })
  }
  return (
    <li>
      <div className="flex gap-4 " style={{ cursor: 'default !important' }}>
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
  )
}
