import * as React from "react";
import { Dialog, Transition, Combobox } from "@headlessui/react";
import { Button, IconButton } from "~/components/primitives";
import { FiCheck, FiX } from "react-icons/fi";
import { BlockType } from "~/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl } from "~/components/primitives";

import { blockValuesAtom, addItemsModalStateAtom } from "~/store";
import { useAtom } from "jotai";
import { HiOutlineSelector } from "react-icons/hi";
import { ExplicitMultipleBlockValue } from "~/types";

export interface IMultipleItemsContentModalProps {
  id: string;
}

type Inputs = {
  item: string;
};

export function MultipleItemsContentModal({
  id,
}: IMultipleItemsContentModalProps) {
  const [isOpen, setIsOpen] = useAtom(addItemsModalStateAtom);
  const [blockValues, setBlockValues] = useAtom(blockValuesAtom);
  const multipleBlockValue = blockValues[id] as ExplicitMultipleBlockValue;
  const inactiveItems = multipleBlockValue.snippets.filter(
    (value) => !value.isActive
  );
  const items = inactiveItems.map((item) => item.name);
  const { handleSubmit, setValue, getValues, register, watch } =
    useForm<Inputs>();

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setBlockValues((draft) => {
      const obj = draft;
      const item = obj[id];
      if (item.type === BlockType.Multiple) {
        const snippets = item.snippets;
        const index = snippets.findIndex(
          (snippet) => snippet.name === data.item
        );
        if (index !== -1) {
          snippets[index].isActive = true;
          return (draft = obj);
        }
      }
    });
    setValue("item", "");
    handleClose();
  };

  const [query, setQuery] = React.useState("");

  const filteredName =
    query === ""
      ? items
      : items.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const focusref = React.useRef(null);

  React.useEffect(() => {
    register("item", { required: "you should select at least one item" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemValue = watch("item");

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isOpen}
        onClose={() => handleClose()}
        initialFocus={focusref}
        static={true}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-neutral-focus bg-opacity-40 transition-opacity duration-200 ease-in-out" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block transform  rounded-lg bg-base-100 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-base-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-end p-2">
                  <IconButton
                    aria-label="close modal"
                    size="sm"
                    shape="square"
                    Icon={<FiX />}
                    onClick={handleClose}
                    ref={focusref}
                  />
                </div>
                <div className=" flex flex-col">
                  <form
                    className="plg:px-8 space-y-2 px-6 "
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Dialog.Title as="h3" className="text-xl font-medium ">
                      Update configs
                    </Dialog.Title>
                    <FormControl>
                      <Combobox
                        value={itemValue}
                        onChange={(value) => {
                          setValue("item", value, { shouldValidate: true });
                        }}
                      >
                        <div className="relative mt-4">
                          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-base-100 text-left shadow-md  sm:text-sm">
                            <Combobox.Label className="sr-only">
                              add items
                            </Combobox.Label>
                            <Combobox.Input
                              className="input w-full  bg-base-300 "
                              displayValue={(item: string) => item}
                              onChange={(event) => setQuery(event.target.value)}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                              <HiOutlineSelector
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </Combobox.Button>
                          </div>
                          <Transition
                            as={React.Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery("")}
                          >
                            <Combobox.Options className="absolute  mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-100 py-1 text-base shadow-lg ring-1 ring-base-300 ring-opacity-5 focus:outline-none sm:text-sm">
                              {filteredName.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 ">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredName.map((item) => (
                                  <Combobox.Option
                                    key={item}
                                    className={({ active }) =>
                                      `relative z-40 cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-primary text-primary-content"
                                          : ""
                                      }`
                                    }
                                    value={item}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {item}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                              active
                                                ? "text-primary-content"
                                                : "text-primary"
                                            }`}
                                          >
                                            <FiCheck
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Combobox.Option>
                                ))
                              )}
                            </Combobox.Options>
                          </Transition>
                        </div>
                      </Combobox>
                    </FormControl>

                    <div className=" flex items-center justify-end">
                      <Button scheme="success" className="mt-4" type="submit">
                        Add Item
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
