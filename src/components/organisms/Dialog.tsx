import React, { type ReactNode } from "react";

interface IProps {
  id: string;
  children: ReactNode | ReactNode[];
}

const Dialog: React.FC<IProps> = ({ id, children }) => {
  return <dialog id={id}>{children}</dialog>;
};

export default Dialog;
