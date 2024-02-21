import React, { type ReactNode } from "react";
import TableElement from "~/components/atoms/TableElement";

interface IProps {
  values: string[];
  className?: string;
  children?: ReactNode | ReactNode[];
}

const TableBody: React.FC<IProps> = ({ values, children, className = "" }) => {
  return (
    <tr className={className}>
      {values.map((value, index) => (
        <TableElement key={index} value={value} type="body" />
      ))}

      {/* actions */}
      {children}
    </tr>
  );
};

export default TableBody;
