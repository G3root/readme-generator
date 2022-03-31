import { FiPlus } from 'react-icons/fi'
import { makeBlockActiveAtom } from '~/store'
import { useUpdateAtom } from 'jotai/utils'
import { ThemeIcon, UnstyledButton, Group, Text, ListItem, Box } from '@mantine/core'

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
    <ListItem>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
        onClick={handleClick}
      >
        <Group spacing="xs">
          <Box component="span" sx={{ flex: 'none' }}>
            <ThemeIcon color="teal">
              <FiPlus />
            </ThemeIcon>
          </Box>

          <Box component="span" sx={{ flex: '1 1 0%' }}>
            <Text size="sm">{name}</Text>
          </Box>
        </Group>
      </UnstyledButton>
    </ListItem>
  )
}
