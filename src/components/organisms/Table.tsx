import React from "react";
import TableRow from "~/components/molecules/TableRow";

interface IProps<T> {
  rows: T[];
  columns: (keyof T)[];
}

const Table = <T extends Record<string, keyof T>>(props: IProps<T>) => {
  const { rows, columns } = props;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <TableRow type="header" values={columns as string[]} />
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableRow
            type="body"
            key={rowIndex}
            values={columns.map((column) => row[column]) as string[]}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
