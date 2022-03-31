/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import * as React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { useTranslation } from 'next-i18next'
import {
  Container,
  Group,
  Button,
  createStyles,
  useMantineTheme,
  Text,
  Space,
  Box,
} from '@mantine/core'
import { NextLink } from '@mantine/next'

const BREAKPOINT = '@media (max-width: 960px)'

export interface IHeroProps {}

export function Hero(props: IHeroProps) {
  const theme = useMantineTheme()
  const { t } = useTranslation('home')
  return (
    <Container size="xl" px="16px" mt="xl">
      <Container
        sx={() => ({
          textAlign: 'left',
          ['@media (min-width: 1024px)']: {
            textAlign: 'center',
          },
        })}
      >
        <Box
          component="h1"
          sx={() => ({
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
            fontWeight: 800,
            letterSpacing: '-.025em',
            textAlign: 'left',
            ['@media (min-width: 640px)']: {
              fontSize: '3rem',
              lineHeight: 1,
            },
            ['@media (min-width: 768px)']: {
              fontSize: '4rem',
              lineHeight: 1,
            },
            ['@media (min-width: 1024px)']: {
              textAlign: 'center',
            },
          })}
        >
          <Box>Create readme files</Box>
          <Box
            sx={{
              backgroundImage: 'linear-gradient(to right, rgb(96, 165, 250), rgb(52, 211, 153))',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            with speed
          </Box>
        </Box>
        <Text
          sx={() => ({
            fontSize: 24,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
            [BREAKPOINT]: {
              fontSize: 18,
            },
          })}
        >
          All in one tool to quickly generate a readme for your project or github profile
        </Text>
        <Space h="lg" />
        <Group position="center">
          <Button
            component={NextLink}
            href="/editor"
            size="xl"
            variant="gradient"
            gradient={{ from: 'blue', to: 'teal', deg: 105 }}
            sx={() => ({
              width: '100%',
              [theme.fn.largerThan('sm')]: {
                width: 'auto',
              },
            })}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/G3root/readme-generator"
            target="_blank"
            rel="noopener noreferrer"
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            size="xl"
            variant="outline"
            radius="md"
            leftIcon={<DiGithubBadge size={35} />}
            sx={() => ({
              width: '100%',
              [theme.fn.largerThan('sm')]: {
                width: 'auto',
              },
            })}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </Container>
  )
}
