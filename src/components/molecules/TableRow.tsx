import React from "react";

type Type = keyof typeof ELEMENTS;

const ELEMENTS = {
  header: "th",
  body: "td",
} as const;

interface IProps {
  type: Type;
  values: string[];
  className?: string;
}

const TableRow: React.FC<IProps> = ({ type, values, className = "" }) => {
  const Component = values.map((value, index) =>
    React.createElement(
      ELEMENTS[type],
      { key: index, className: "p-4" },
      value,
    ),
  );

  return <tr className={className}>{Component}</tr>;
};

export default TableRow;
