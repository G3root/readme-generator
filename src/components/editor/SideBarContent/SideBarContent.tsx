import * as React from 'react'
import { SidebarFilterForm, SideBarListCard } from '~/components/editor'
import { Category } from '~/types'
import { inActiveBlocksAtom, allBlocks } from '~/store'
import { useAtomValue } from 'jotai/utils'
import { Navbar, ScrollArea, Box, List } from '@mantine/core'

export interface ISideBarContentProps {}

interface filterBlockArgs {
  item: { id: string; name: string; category: Category }[]
  blockType: 'all' | 'project' | 'profile'
  query: string
}

const filterBlock = ({ item, blockType, query }: filterBlockArgs) => {
  let blocks = []
  for (let index = 0; index < item.length; index++) {
    const element = item[index]
    const isQueryEmpty = query === ''
    const category = element.category
    const isProject = category === Category.Project || category === Category.CustomProject
    const isProfile =
      category == Category.GithubProfile || category === Category.CustomGithubProfile
    const isMatches = element.name.toLowerCase().includes(query.toLowerCase())

    switch (blockType) {
      case 'project':
        if (isProject) {
          if (isQueryEmpty) {
            blocks.push(element)
          } else {
            if (isMatches) {
              blocks.push(element)
            }
          }
        }
        break

      case 'profile':
        if (isProfile) {
          if (isQueryEmpty) {
            blocks.push(element)
          } else {
            if (isMatches) {
              blocks.push(element)
            }
          }
        }
        break
      default:
        if (isQueryEmpty) {
          blocks.push(element)
        } else {
          if (isMatches) {
            blocks.push(element)
          }
        }
        break
    }
  }
  return blocks
}

export function SideBarContent(props: ISideBarContentProps) {
  const list = useAtomValue(inActiveBlocksAtom)
  const blocks = useAtomValue(allBlocks)
  const [query, setQuery] = React.useState('')
  const [blockType, setBlockType] = React.useState<'all' | 'project' | 'profile'>('all')

  const handleBlockType = (value: 'all' | 'project' | 'profile' | null) => {
    if (value !== null) {
      setBlockType(value)
    }
  }

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)

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
    () => filterBlock({ item: data, blockType, query }),
    [blockType, data, query]
  )

  return (
    <>
      <Navbar.Section>
        <SidebarFilterForm
          blockType={blockType}
          query={query}
          handleBlockType={handleBlockType}
          handleQuery={handleQuery}
        />
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Box py="md">
          <List listStyleType="none">
            {filteredData.map(({ id, name }) => (
              <SideBarListCard id={id} name={name} key={id} />
            ))}
          </List>
        </Box>
      </Navbar.Section>
    </>
  )
}
