import React from "react";
import TableWithSearch from "~/components/organisms/TableWithSearch";

interface Row {
  value: string;
  voucherId: string;
}

const VoucherPage = () => {
  const rows: Row[] = [
    {
      voucherId: "voucher123",
      value: "200",
    },
    {
      voucherId: "voucher123",
      value: "200",
    },
    {
      voucherId: "voucher123",
      value: "200",
    },
    {
      voucherId: "voucher123",
      value: "200",
    },
    {
      voucherId: "voucher123",
      value: "200",
    },
    {
      voucherId: "voucher123",
      value: "200",
    },
    {
      voucherId: "voucher123",
      value: "200",
    },
  ];

  const columns = Object.keys(rows[0]!) as unknown as (keyof Row)[];

  return (
    <section className="h-screen bg-gray-50 p-4">
      <div className="mx-auto bg-white">
        <TableWithSearch<Row>
          table={{ rows, columns }}
          actions={[
            {
              type: "button",
              props: {
                icon: { type: "io5", icon: "add" },
                label: "Add",
              },
            },
            {
              type: "filter",
              props: {
                type: "button",
                label: "Filter",
                icon: { type: "rx", icon: "caretDown" },
              },
            },
          ]}
        />
      </div>
    </section>
  );
};

export default VoucherPage;
