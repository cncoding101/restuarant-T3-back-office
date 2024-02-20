"use client";

import React, { useEffect, useRef, useState } from "react";
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
}

const Dropdown: React.FC<IProps> = ({ type, label, icon }) => {
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
          {label}
        </Button>
      );
      break;
  }

  return (
    <div ref={ref} className="relative">
      {Component}

      {isOpen && (
        <div className="absolute rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5">
          hello world!
        </div>
      )}
    </div>
  );
};

export default Dropdown;
