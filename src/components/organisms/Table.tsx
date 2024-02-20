import React from "react";
import TableRow from "~/components/molecules/TableRow";

interface IProps<T> {
  rows: T[];
  columns: (keyof T)[];
}

const Table = <T extends object>(props: IProps<T>) => {
  const { rows, columns } = props;

  return (
    <table className="w-full table-auto">
      <thead>
        <TableRow
          type="header"
          values={columns as string[]}
          className="bg-gray-50 text-left uppercase"
        />
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableRow
            type="body"
            key={rowIndex}
            values={columns.map((column) => row[column]) as string[]}
            className="border-b"
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
