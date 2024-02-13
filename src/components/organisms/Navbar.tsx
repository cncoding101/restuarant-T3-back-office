"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Text from "~/components/atoms/Text";
import Logo from "~/components/atoms/Logo";
import Link from "~/components/atoms/Link";

interface IProps {
  logo: React.ComponentProps<typeof Logo>;
  links: { to: string; label: string }[];
}

const Navbar: React.FC<IProps> = ({ logo, links }) => {
  const currentPath = usePathname();

  return (
    <nav className="mb-5 flex h-16 items-center space-x-4 border-b px-5">
      <Logo {...logo} />

      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className={`${currentPath === link.to ? "text-black" : "text-zinc-500"} transition-colors hover:text-black`}
              to={link.to}
            >
              <Text variant="label">{link.label}</Text>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
