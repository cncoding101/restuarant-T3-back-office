import React from "react";
import Text from "~/components/atoms/Text";
import Table from "~/components/organisms/Table";

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
  ];

  const columns = Object.keys(rows[0]) as keyof Row;

  return (
    <section>
      <header>
        <Text variant="title">Vouchers</Text>
      </header>

      <section>
        <Table<> />
      </section>
    </section>
  );
};

export default VoucherPage;
