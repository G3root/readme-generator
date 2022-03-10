import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button, IconButton } from "~/components/primitives";
import { FiX } from "react-icons/fi";
import { OptionType, Options, SingleBlockValueOptions } from "~/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, Label, Select, TextInput } from "~/components/primitives";
import { selectAtom } from "jotai/utils";
import {
  blockConfigModalStateAtom,
  blockValuesAtom,
  defaultBlocksAtom,
} from "~/store";
import { useAtom, useAtomValue } from "jotai";

export interface ISingleItemContentModalProps {
  id: string;
}

export function SingleItemContentModal({ id }: ISingleItemContentModalProps) {
  const [isOpen, setIsOpen] = useAtom(blockConfigModalStateAtom);

  const focusref = React.useRef(null);

  const handleClose = () => {
    setIsOpen(false);
  };
  const blockAtom = selectAtom(
    defaultBlocksAtom,
    React.useCallback((block: any) => block[id].options, [id])
  );
  const blockValueAtom = selectAtom(
    blockValuesAtom,
    React.useCallback((block: any) => block[id].options, [id])
  );
  const blockValueOptions = useAtomValue(
    blockValueAtom
  ) as SingleBlockValueOptions[];

  const blockOptions = useAtomValue(blockAtom) as OptionType[];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    // setOptionsValue(id, data);
    // onClose();
    handleClose();
  };

  const data = blockOptions.map((option, index) => {
    const type = option.type;
    const currentValue = blockValueOptions[index];
    const name = currentValue.name;
    const value = currentValue.value;
    const label = option.label;

    switch (type) {
      case Options.CheckBox:
        return (
          <FormControl key={name}>
            <label className="label cursor-pointer">
              <span className="label-text">{label}</span>
              <input
                defaultChecked={value as boolean}
                {...register(name)}
                type="checkbox"
                className="checkbox"
              />
            </label>
          </FormControl>
        );
      case Options.Select:
        return (
          <FormControl key={name}>
            <Label id={name} labelText={label} />
            <Select
              defaultValue={value as string}
              {...register(name)}
              id={name}
            >
              {option.options.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>
        );
      case Options.Text:
        return (
          <FormControl key={name}>
            <Label id={name} labelText={label} />
            <TextInput
              defaultValue={value as string}
              {...register(name)}
              id={name}
              type={option.textType}
            />
          </FormControl>
        );
    }
  });

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
            <div className="relative inline-block transform overflow-hidden rounded-lg bg-base-100 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
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
                <div className="flex flex-col">
                  <form
                    className="plg:px-8 space-y-2 px-6 "
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Dialog.Title as="h3" className="text-xl font-medium ">
                      Update configs
                    </Dialog.Title>

                    {data}
                    <div className=" flex items-center justify-end">
                      <Button className="mt-2" type="submit">
                        update config
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
