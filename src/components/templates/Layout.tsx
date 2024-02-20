import type { ReactNode } from "react";

import Navbar from "~/components/organisms/Navbar";

interface IProps {
  navbar: React.ComponentProps<typeof Navbar>;
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ navbar, children }) => {
  return (
    <div className="flex h-screen flex-col">
      {/* navbar */}
      <header className="sticky top-0">
        <Navbar {...navbar} />
      </header>

      {/* content */}
      <main className="w-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;
