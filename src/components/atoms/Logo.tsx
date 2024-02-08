"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { env } from "~/env.js";

interface IProps {
  url: string;
  alt?: string;
  to?: string;
  scale?: number;
  className?: string;
}

const Logo: React.FC<IProps> = ({
  url,
  alt = "",
  to,
  scale = 100,
  className,
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!to) return;
    e.preventDefault();
    router.push(to);
  };

  return (
    <Image
      src={`${env.NEXTAUTH_URL}/${url}`}
      alt={alt}
      width={500}
      height={500}
      onClick={(e) => handleClick(e)}
      className={`scale-${scale} ${className}`}
    />
  );
};

export default Logo;
