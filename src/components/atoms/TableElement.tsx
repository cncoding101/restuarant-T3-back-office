import React from "react";

type Type = keyof typeof ELEMENTS;

const ELEMENTS = {
  header: "th",
  body: "td",
} as const;

interface IProps {
  type: Type;
  value: string;
}

const TableElement: React.FC<IProps> = ({ type, value }) => {
  return React.createElement(ELEMENTS[type], { className: "p-4" }, value);
};

export default TableElement;
