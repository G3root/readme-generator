import * as React from 'react'
import { NavbarLogo } from '~/components/common'
import { SidebarFilterForm, SideBarListCard } from '~/components/editor'
import { Category } from '~/types'
import { inActiveBlocksAtom, allBlocks } from '~/store'
import { useAtomValue } from 'jotai/utils'

export interface ISideBarContentProps {}

export function SideBarContent(props: ISideBarContentProps) {
  const list = useAtomValue(inActiveBlocksAtom)
  const blocks = useAtomValue(allBlocks)
  const [query, setquery] = React.useState('')
  const [blockType, setBlockType] = React.useState<'all' | 'project' | 'profile'>('all')

  const handleBlockType = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setBlockType(e.target.value as any)

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => setquery(e.target.value)

  const data = React.useMemo(
    () =>
      list.map((id) => ({
        id,
        name: blocks[id].name,
        category: blocks[id].category,
      })),
    [list, blocks]
  )

  const filteredData = React.useMemo(
    () =>
      data.filter((element) => {
        if (blockType === 'project') {
          return query === ''
            ? element.category === Category.Project || Category.CustomProject
            : element.category === Category.Project ||
                (Category.CustomProject && element.name.toLowerCase().includes(query.toLowerCase()))
        } else if (blockType === 'profile') {
          return query === ''
            ? element.category === Category.GithubProfile || Category.CustomGithubProfile
            : element.category === Category.GithubProfile ||
                (Category.CustomGithubProfile &&
                  element.name.toLowerCase().includes(query.toLowerCase()))
        } else {
          return query === '' ? element : element.name.toLowerCase().includes(query.toLowerCase())
        }
      }),
    [blockType, query, data]
  )

  return (
    <div className="drawer-side" style={{ scrollBehavior: 'smooth', scrollPaddingTop: '5rem' }}>
      <label htmlFor="drawer" className="drawer-overlay" />
      <aside className="w-80 bg-base-200">
        <div className="sticky top-0 z-20 hidden items-center gap-2 bg-base-200 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex ">
          <NavbarLogo />
        </div>
        <div className="grid-row-2 sticky top-0 z-10 grid w-full gap-y-2 bg-base-200 bg-opacity-90 py-3 px-2 backdrop-blur lg:top-10  ">
          <SidebarFilterForm
            blockType={blockType}
            query={query}
            handleBlockType={handleBlockType}
            handleQuery={handleQuery}
          />
        </div>
        <div className="h-4" />
        <ul className="menu menu-compact flex flex-col p-0 px-4">
          {filteredData.map(({ id, name }) => (
            <SideBarListCard id={id} name={name} key={id} />
          ))}
        </ul>
        <div className="pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t from-base-200 to-transparent" />
      </aside>
    </div>
  )
}
