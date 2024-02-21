import React, { type ReactNode } from "react";
import TableElement from "~/components/atoms/TableElement";

interface IProps {
  values: string[];
  className?: string;
  children?: ReactNode | ReactNode[];
}

const TableHeader: React.FC<IProps> = ({
  values,
  className = "",
  children,
}) => {
  return (
    <tr className={className}>
      {values.map((value, index) => (
        <TableElement key={index} value={value} type="header" />
      ))}

      {children}
    </tr>
  );
};

export default TableHeader;
