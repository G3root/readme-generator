/* eslint-disable react/no-children-prop */
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Root, Element, ElementContent } from "hast";
import gfm from "remark-gfm";
import slug from "rehype-slug";
import headings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeAttrs from "rehype-attr";
// @ts-ignore
import rehypePrism from "@mapbox/rehype-prism";
import rehypeRewrite from "rehype-rewrite";
import copyTextToClipboard from "copy-text-to-clipboard";
import { useAtomValue } from "jotai";
import { markdownAtom } from "~/store";

const rehypeRewriteHandle = (
  node: ElementContent,
  index: number | null,
  parent: Root | Element | null
) => {
  if (
    node.type === "element" &&
    parent &&
    parent.type === "root" &&
    /h(1|2|3|4|5|6)/.test(node.tagName)
  ) {
    const child = node.children && (node.children[0] as Element);
    if (child && child.properties && child.properties.ariaHidden === "true") {
      child.properties = { class: "anchor", ...child.properties };
      child.children = [octiconLink];
    }
  }
  if (node.type === "element" && node.tagName === "pre") {
    const code = getCodeStr(node.children);
    node.children.push(copyElement(code));
  }
};

const getCodeStr = (data: ElementContent[] = [], code: string = "") => {
  data.forEach((node) => {
    if (node.type === "text") {
      code += node.value;
    } else if (
      node.type === "element" &&
      node.children &&
      Array.isArray(node.children)
    ) {
      code += getCodeStr(node.children);
    }
  });
  return code;
};

export interface IPreviewTabPanelProps {}

export function PreviewTabPanel(props: IPreviewTabPanelProps) {
  const markdown = useAtomValue(markdownAtom);
  return (
    <div className="h-[74vh] overflow-auto border p-4 lg:h-[83vh]">
      <div className="wmde-markdown wmde-markdown-color p-2">
        <ReactMarkdown
          rehypePlugins={[
            [rehypePrism, { ignoreMissing: true }],
            rehypeRaw,
            slug,
            headings,
            [rehypeRewrite, { rewrite: rehypeRewriteHandle }],
            [rehypeAttrs, { properties: "attr" }],
          ]}
          remarkPlugins={[gfm]}
          children={markdown}
        />
      </div>
    </div>
  );
}

const octiconLink: Element = {
  type: "element",
  tagName: "svg",
  properties: {
    className: "octicon octicon-link",
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "16",
    height: "16",
    ariaHidden: "true",
  },
  children: [
    {
      type: "element",
      tagName: "path",
      children: [],
      properties: {
        fillRule: "evenodd",
        d: "M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z",
      },
    },
  ],
};

function copyElement(str: string = ""): Element {
  return {
    type: "element",
    tagName: "div",
    properties: {
      // @ts-ignore
      onClick: ({ target }) => {
        target.classList.add("active");
        copyTextToClipboard(target.dataset.code as string);
        setTimeout(() => {
          target.classList.remove("active");
        }, 2000);
      },
      "data-code": str,
      class: "copied",
    },
    children: [
      {
        type: "element",
        tagName: "svg",
        properties: {
          className: "octicon-copy",
          ariaHidden: "true",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          height: 12,
          width: 12,
        },
        children: [
          {
            type: "element",
            tagName: "path",
            properties: {
              fillRule: "evenodd",
              d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z",
            },
            children: [],
          },
          {
            type: "element",
            tagName: "path",
            properties: {
              fillRule: "evenodd",
              d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z",
            },
            children: [],
          },
        ],
      },
      {
        type: "element",
        tagName: "svg",
        properties: {
          className: "octicon-check",
          ariaHidden: "true",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          height: 12,
          width: 12,
        },
        children: [
          {
            type: "element",
            tagName: "path",
            properties: {
              fillRule: "evenodd",
              d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z",
            },
            children: [],
          },
        ],
      },
    ],
  };
}
