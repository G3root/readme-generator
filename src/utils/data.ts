import {
  BlocksObjectWithId,
  BlockType,
  BlockValuesObject,
  Options,
} from "~/types";
import { ProfileBlockList, ProjectBlockList } from "~/data";

export const generateBlockData = () => {
  let ConcattedBlocks = ProjectBlockList.concat(ProfileBlockList);
  let inActiveBlocks: string[] = [];
  let nextId = ConcattedBlocks.length + 200;
  let defaultBlocks: BlocksObjectWithId = {};
  let blockValues: BlockValuesObject = {};

  for (let index = 0; index < ConcattedBlocks.length; index++) {
    let block = ConcattedBlocks[index];
    let key = index.toString();
    inActiveBlocks.push(key);
    defaultBlocks[key] = { ...block, id: key };

    if (block.type === BlockType.Single) {
      blockValues[key] = {
        id: key,
        name: block.name,
        markdown: block.markdown,
        type: block.type,
        ...(block.options && {
          options: block.options.map((data) => ({
            name: data.name,
            value: data.value,
            ...(data.type === Options.Text &&
              data.textType === "color" && { isColor: true }),
          })),
        }),
      };
    }
    if (block.type === BlockType.Multiple) {
      blockValues[key] = {
        id: key,
        name: block.name,
        type: block.type,
        snippets: block.snippets.map(({ isActive, name }) => ({
          name,
          isActive,
        })),
      };
    }
  }
  return { nextId, defaultBlocks, inActiveBlocks, blockValues };
};
