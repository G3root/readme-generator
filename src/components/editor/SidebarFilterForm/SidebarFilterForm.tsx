import * as React from "react";
import {
  FormControl,
  Label,
  Select,
  TextInput,
  VisuallyHidden,
} from "~/components/primitives";

export interface ISidebarFilterFormProps {
  blockType: "all" | "project" | "profile";
  query: string;
  handleBlockType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const options = [
  {
    label: "All blocks",
    value: "all",
  },
  {
    label: "Project Readme",
    value: "project",
  },
  {
    label: "Github Profile Readme",
    value: "profile",
  },
];

export function SidebarFilterForm({
  query,
  handleQuery,
  blockType,
  handleBlockType,
}: ISidebarFilterFormProps) {
  return (
    <>
      <FormControl>
        <Label htmlFor="active-block" labelText="Active Blocks" />
        <Select
          defaultValue={blockType}
          onChange={handleBlockType}
          size="sm"
          id="active-block"
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl className="mt-2">
        <VisuallyHidden>
          <Label htmlFor="block-query" labelText="search blocks" />
        </VisuallyHidden>
        <TextInput
          size="sm"
          name="search"
          autoComplete="off"
          id="block-query"
          placeholder="search blocks..."
          defaultValue={query}
          onChange={handleQuery}
        />
      </FormControl>
    </>
  );
}
