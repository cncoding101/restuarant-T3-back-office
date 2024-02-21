"use client";

import React from "react";
import Text from "~/components/atoms/Text";
import Icon from "~/components/atoms/Icon";
import Button from "~/components/atoms/Button";

interface IProps {
  icon: React.ComponentProps<typeof Icon>;
  onClick: React.ComponentProps<typeof Button>["onClick"];
  variant?: React.ComponentProps<typeof Button>["variant"];
  label?: string;
}

const ButtonIcon: React.FC<IProps> = ({ icon, onClick, variant, label }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      <Icon {...icon} />
      {label && <Text variant="label">{label}</Text>}
    </Button>
  );
};

export default ButtonIcon;
