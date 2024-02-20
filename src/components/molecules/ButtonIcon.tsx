"use client";

import React from "react";
import Text from "~/components/atoms/Text";
import Icon from "~/components/atoms/Icon";
import Button from "~/components/atoms/Button";

interface IProps {
  icon: React.ComponentProps<typeof Icon>;
  label?: string;
}

const ButtonIcon: React.FC<IProps> = ({ icon, label }) => {
  return (
    <Button
      variant="primary"
      onClick={() => {
        console.log("hello world!");
      }}
      className="bg-black"
    >
      <Icon {...icon} />
      {label && <Text variant="label">{label}</Text>}
    </Button>
  );
};

export default ButtonIcon;
