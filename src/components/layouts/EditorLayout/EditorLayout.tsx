import * as React from "react";

export interface IEditorLayoutProps {
  children: React.ReactNode;
}

export function EditorLayout({ children }: IEditorLayoutProps) {
  return (
    <div className="bg-base-100 drawer h-screen drawer-mobile">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
}
