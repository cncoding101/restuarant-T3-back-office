"use client";

import React, { useEffect, useRef, useState } from "react";
import Text from "~/components/atoms/Text";
import Icon from "~/components/atoms/Icon";
import Button from "~/components/atoms/Button";

type DropdownType = keyof typeof DROPDOWN_TYPES;

const DROPDOWN_TYPES = {
  input: "input",
  button: "button",
} as const;

interface IProps {
  type: DropdownType;
  label: string;
  icon: React.ComponentProps<typeof Icon>;
  items: string[];
}

const Dropdown: React.FC<IProps> = ({ type, label, icon, items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node))
        setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, setIsOpen, isOpen]);

  let Component = null;
  switch (type) {
    case DROPDOWN_TYPES.input:
      Component = (
        <input
          type="text"
          placeholder={label}
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={handleClick}
          readOnly
        >
          <Icon {...icon} />
        </input>
      );
      break;

    case DROPDOWN_TYPES.button:
      Component = (
        <Button variant="primary" onClick={handleClick}>
          <Icon {...icon} />
          <Text variant="label">{label}</Text>
        </Button>
      );
      break;
  }

  return (
    <div ref={ref} className="relative">
      {Component}

      {isOpen && (
        <div className="absolute w-max rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li className="space-x-2" key={index}>
                <input
                  type="checkbox"
                  className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-1"
                />
                <Text variant="label">{item}</Text>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
