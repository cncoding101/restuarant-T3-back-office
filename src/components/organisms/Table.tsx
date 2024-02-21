"use client";

import React, { useEffect, useRef, useState } from "react";
import Text from "~/components/atoms/Text";
import ButtonIcon from "~/components/molecules/ButtonIcon";
import TableHeader from "~/components/molecules/TableHeader";
import TableBody from "~/components/molecules/TableBody";

interface IProps<T> {
  rows: T[];
  columns: (keyof T)[];
}

const Table = <T extends object>(props: IProps<T>) => {
  const { rows, columns } = props;

  const refs = useRef<(HTMLTableCellElement | null)[]>([]);
  const [isOpen, setIsOpen] = useState({ value: false, index: -1 });

  const handleClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setIsOpen({ value: !isOpen.value, index });
  };

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (
        isOpen.value &&
        refs.current[isOpen.index] &&
        !refs.current[isOpen.index]?.contains(e.target as Node)
      ) {
        setIsOpen({ value: false, index: -1 });
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [refs, setIsOpen, isOpen]);

  return (
    <table className="w-full table-auto">
      <thead>
        <TableHeader
          values={columns as string[]}
          className="bg-gray-50 text-left uppercase"
        >
          <th scope="col" className="bg-gray-50 text-left uppercase">
            <span className="sr-only">Actions</span>
          </th>
        </TableHeader>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableBody
            key={rowIndex}
            className="border-b"
            values={columns.map((column) => row[column]) as string[]}
          >
            {/* actions */}
            <td
              ref={(el) => (refs.current[rowIndex] = el)}
              className="relative"
            >
              <ButtonIcon
                onClick={(e) => handleClick(e, rowIndex)}
                icon={{ type: "bs", icon: "threeDots" }}
              />

              {isOpen.value && isOpen.index === rowIndex && (
                <div className="absolute z-10 w-max divide-y divide-gray-100 rounded bg-white shadow">
                  <ul className="block">
                    <li className="px-4 hover:bg-gray-100">Show</li>
                    <li className="px-4 hover:bg-gray-100">Edit</li>
                  </ul>
                  <div className="block">
                    <Text variant="label" className="px-4 hover:bg-gray-100">
                      Delete
                    </Text>
                  </div>
                </div>
              )}
            </td>
          </TableBody>
        ))}
      </tbody>

      {/* dialog */}
    </table>
  );
};

export default Table;
