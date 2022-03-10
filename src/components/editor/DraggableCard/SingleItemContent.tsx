import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { useEditable } from "use-editable";
import theme from "prism-react-renderer/themes/nightOwl";
import { BlockType, ExplicitSingleBlockValue } from "~/types";
import pupa from "pupa";
import { useUpdateAtom, selectAtom } from "jotai/utils";
import { blockConfigModalStateAtom, blockValuesAtom } from "~/store";
import { useAtomValue } from "jotai";
import { clsx } from "~/utils";
import { Button } from "~/components/primitives";
import { SingleItemContentModal } from "./SingleItemContentModal";

export interface ISingleItemContentProps {
  id: string;
}

export function SingleItemContent({ id }: ISingleItemContentProps) {
  const blockValueAtom = selectAtom(
    blockValuesAtom,
    React.useCallback((block) => block[id], [id])
  );

  const blockValue = useAtomValue(blockValueAtom) as ExplicitSingleBlockValue;
  const setBlockValue = useUpdateAtom(blockValuesAtom);
  const setConfigModalState = useUpdateAtom(blockConfigModalStateAtom);
  const editorRef = React.useRef(null);

  const onEditableChange = React.useCallback((_code: string) => {
    setBlockValue((draft) => {
      const items = draft;
      const element = items[id];
      const single = BlockType.Single;
      if (element.type === single) {
        element.markdown = _code.slice(0, -1);
      }
      return (draft = items);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEditable(editorRef, onEditableChange, {
    indentation: 2,
    disabled: blockValue.options ? true : false,
  });

  let markdown = blockValue.markdown;

  const options = blockValue.options;
  if (options) {
    const placeHolder = options.reduce(
      (
        prev: {
          [key: string]: string | boolean;
        },
        current
      ) => {
        if (current.isColor && typeof current.value === "string") {
          prev[current.name] = current.value.replace("#", "");
        } else {
          prev[current.name] = current.value;
        }
        return prev;
      },
      {}
    );
    markdown = pupa(markdown, placeHolder);
  }

  return (
    <div className="cursor-auto text-xs">
      {options ? (
        <div className="mb-3 flex items-center justify-end py-3">
          <Button
            onClick={() => setConfigModalState((state) => !state)}
            size="sm"
          >
            update configs
          </Button>
        </div>
      ) : null}
      <Highlight
        {...defaultProps}
        code={markdown}
        theme={theme}
        language="markdown"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(className, "overflow-auto whitespace-pre p-3")}
            style={style}
            ref={editorRef}
          >
            {tokens.map((line, i) => {
              const { className, ...rest } = getLineProps({ line, key: i });
              return (
                <div key={i} className={clsx(className, "px-5")} {...rest}>
                  {line
                    .filter((token) => !token.empty)
                    .map((token, tokenIndex) => (
                      <span
                        key={`token-${tokenIndex}`}
                        {...getTokenProps({
                          token,
                          key: `token-${tokenIndex}`,
                        })}
                      />
                    ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
      {options ? <SingleItemContentModal id={id} /> : null}
    </div>
  );
}
