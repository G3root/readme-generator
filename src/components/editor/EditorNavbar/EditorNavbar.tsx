import * as React from "react";
import { NavbarLogo, ThemeSwitcher } from "~/components/common";
import { ActionButtons } from "~/components/editor";

export interface IEditorNavbarProps {}

export function EditorNavbar(props: IEditorNavbarProps) {
  return (
    <div className="flex h-16 w-full justify-center bg-base-100 bg-opacity-90 text-base-content backdrop-blur transition-all duration-100">
      <nav className="navbar w-full">
        <div className="flex flex-1 gap-1 lg:gap-2">
          <span
            className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
            data-tip="Menu"
          >
            <label
              htmlFor="drawer"
              className="btn btn-ghost btn-square drawer-button lg:hidden"
            >
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current lg:h-6 lg:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </span>
          <div className="flex items-center gap-2 lg:hidden">
            <NavbarLogo />
          </div>
        </div>
        <div className="flex-0">
          <div className="hidden lg:block">
            <ActionButtons />
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
