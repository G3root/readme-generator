import * as React from "react";
import { NavbarLogo, ThemeSwitcher } from "~/components/common";
import Link from "next/link";

export interface IHomeNavbarProps {}

export function HomeNavbar(props: IHomeNavbarProps) {
  return (
    <div className="mx-auto h-16 max-w-screen-2xl">
      <div className="flex h-full w-full items-center justify-between px-6">
        <div>
          <Link href="/">
            <a>
              <NavbarLogo />
            </a>
          </Link>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
