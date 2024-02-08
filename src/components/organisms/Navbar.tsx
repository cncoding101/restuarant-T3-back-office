import React from "react";
import Text from "~/components/atoms/Text";
import Logo from "~/components/atoms/Logo";
import Link from "~/components/atoms/Link";

interface IProps {
  logo: React.ComponentProps<typeof Logo>;
  links: { to: string; label: string }[];
}

const Navbar: React.FC<IProps> = ({ logo, links }) => {
  return (
    <nav className="mb-5 flex h-14 items-center space-x-4 border-b px-5">
      <Logo {...logo} />

      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>
              <Text variant="label">{link.label}</Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
