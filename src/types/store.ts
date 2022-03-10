import { HTMLInputTypeAttribute } from 'react'

export enum Category {
  GithubProfile,
  Project,
  CustomGithubProfile,
  CustomProject,
}

export enum Options {
  Select,
  Text,
  CheckBox,
}

export enum BlockType {
  Single,
  Multiple,
}

export interface Snippet {
  name: string
  markdown: string
  isActive: boolean
}

export interface SelectOption {
  type: Options.Select
  options: string[]
  value: string
}
export interface TextOption {
  type: Options.Text
  value: string
  textType: HTMLInputTypeAttribute
}

export interface CheckboxOption {
  type: Options.CheckBox
  value: boolean
}

export type ConditionalOptions = SelectOption | TextOption | CheckboxOption

export type OptionType = {
  name: string
  label: string
} & ConditionalOptions

export interface MultipleBlock {
  type: BlockType.Multiple
  snippets: Snippet[]
  title: string
}

export interface SingleBlock {
  type: BlockType.Single
  markdown: string
  options?: OptionType[]
  isDisabled?: boolean
}

export type SingleOrMultiple = SingleBlock | MultipleBlock

export type Block = {
  name: string
  category: Category
} & SingleOrMultiple

export interface BlocksObject {
  [key: string]: Block
}

export interface BlocksObjectWithId {
  [key: string]: Block & { id: string }
}

export type SingleBlockValueOptions = {
  name: string
  value: string | boolean
  isColor?: boolean
}

export type SingleBlockValues = {
  type: BlockType.Single
  markdown: string
  options?: SingleBlockValueOptions[]
}

export type MultipleBlockValues = {
  type: BlockType.Multiple
  snippets: Omit<Snippet, 'markdown'>[]
}

export type SingleOrMultipleBlockValues = MultipleBlockValues | SingleBlockValues

export type BlockValues = {
  id: string
  name: string
} & SingleOrMultipleBlockValues

export interface BlockValuesObject {
  [key: string]: BlockValues
}

export type ExplicitSingleBlockValue = Extract<BlockValues, { type: BlockType.Single }>

export type ExplicitMultipleBlockValue = Extract<BlockValues, { type: BlockType.Multiple }>

export type ExplicitSingleBlock = Extract<Block, { type: BlockType.Single }>

export type ExplicitMultipleBlock = Extract<Block, { type: BlockType.Multiple }>
