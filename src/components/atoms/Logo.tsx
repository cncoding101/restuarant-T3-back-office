"use client";

import Image from "next/image";
import { env } from "~/env.js";

interface IProps {
  url: string;
  width: number;
  height: number;
  alt?: string;
  to?: string;
  scale?: number;
  className?: string;
}

const Logo: React.FC<IProps> = ({
  url,
  width,
  height,
  alt = "",
  scale = 100,
  className,
}) => {
  return (
    <Image
      src={`${env.NEXT_PUBLIC_URL}/${url}`}
      alt={alt}
      width={width}
      height={height}
      className={`scale-${scale} ${className}`}
    />
  );
};

export default Logo;
