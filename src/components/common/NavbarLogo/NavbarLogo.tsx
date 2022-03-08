import * as React from "react";
import Link from "next/link";

export interface INavbarLogoProps {}

export function NavbarLogo(props: INavbarLogoProps) {
  return (
    <Link href="/">
      <a className="flex-0 btn btn-ghost px-2">
        <div className="font-title inline-flex text-lg text-primary transition-all duration-200 lg:text-3xl">
          <span className="lowercase">README</span>
        </div>
      </a>
    </Link>
  );
}
