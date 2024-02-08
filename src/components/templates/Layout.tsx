import Head from "next/head";
import type { ReactNode } from "react";

import Navbar from "~/components/organisms/Navbar";

interface IProps {
  navbar: React.ComponentProps<typeof Navbar>;
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ navbar, children }) => {
  return (
    <div className="flex h-full w-full flex-col">
      {/* navbar */}
      <header>
        <Navbar {...navbar} />
      </header>

      {/* content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
