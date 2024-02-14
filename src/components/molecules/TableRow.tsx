import React from "react";

type Type = keyof typeof ELEMENTS;

const ELEMENTS = {
  header: "th",
  body: "td",
} as const;

interface IProps {
  type: Type;
  values: string[];
}

const TableRow: React.FC<IProps> = ({ type, values }) => {
  const Component = values.map((value, index) =>
    React.createElement(ELEMENTS[type], { key: index }, value),
  );

  return <tr>{Component}</tr>;
};

export default TableRow;
