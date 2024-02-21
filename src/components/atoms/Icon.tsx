import dynamic from "next/dynamic";
import { useMemo } from "react";

type Type = keyof typeof REACT_ICONS;
type Variant =
  | IoVariant
  | Io5Variant
  | FaVariant
  | Fa6Variant
  | SiVariant
  | MdVariant
  | RxVariant
  | BsVariant;
type IoVariant = keyof typeof REACT_ICONS.io;
type Io5Variant = keyof typeof REACT_ICONS.io5;
type FaVariant = keyof typeof REACT_ICONS.fa;
type Fa6Variant = keyof typeof REACT_ICONS.fa6;
type SiVariant = keyof typeof REACT_ICONS.si;
type MdVariant = keyof typeof REACT_ICONS.md;
type RxVariant = keyof typeof REACT_ICONS.rx;
type BsVariant = keyof typeof REACT_ICONS.bs;

interface IProps {
  type: Type;
  icon: Variant;
  size?: number;
  color?: string;
  className?: string;
}

const REACT_ICONS = {
  io: {
    close: "IoMdClose",
  },
  io5: {
    add: "IoAdd",
  },
  fa: {
    yelp: "FaYelp",
    facebook: "FaFacebookSquare",
    instagram: "FaInstagram",
    phone: "FaPhoneAlt",
    search: "FaSearch",
  },
  fa6: {
    location: "FaLocationDot",
  },
  si: {
    tripadvisor: "SiTripadvisor",
  },
  md: {
    parking: "MdLocalParking",
    email: "MdEmail",
  },
  rx: {
    caretDown: "RxCaretDown",
  },
  bs: {
    threeDots: "BsThreeDots",
  },
} as const;

const ICON_TYPES = Object.keys(REACT_ICONS) as Type[];

const Icon: React.FC<IProps> = ({ icon, type, color, size, className }) => {
  // Memoize the dynamic import to prevent re-imports on every render
  const IconComponent = useMemo(() => {
    if (!ICON_TYPES.includes(type)) return;

    switch (type) {
      // NOTE next dynamic import can not be string interporlated!
      case "fa":
        if (!REACT_ICONS.fa[icon as FaVariant]) return;
        return dynamic(() =>
          import("react-icons/fa").then(
            (icons) => icons[REACT_ICONS.fa[icon as FaVariant]],
          ),
        );

      case "fa6":
        if (!REACT_ICONS.fa6[icon as Fa6Variant]) return;
        return dynamic(() =>
          import("react-icons/fa6").then(
            (icons) => icons[REACT_ICONS.fa6[icon as Fa6Variant]],
          ),
        );

      case "io":
        if (!REACT_ICONS.io[icon as IoVariant]) return;
        return dynamic(() =>
          import("react-icons/io").then(
            (icons) => icons[REACT_ICONS.io[icon as IoVariant]],
          ),
        );

      case "io5":
        if (!REACT_ICONS.io5[icon as Io5Variant]) return;
        return dynamic(() =>
          import("react-icons/io5").then(
            (icons) => icons[REACT_ICONS.io5[icon as Io5Variant]],
          ),
        );

      case "si":
        if (!REACT_ICONS.si[icon as SiVariant]) return;
        return dynamic(() =>
          import("react-icons/si").then(
            (icons) => icons[REACT_ICONS.si[icon as SiVariant]],
          ),
        );

      case "md":
        if (!REACT_ICONS.md[icon as MdVariant]) return;
        return dynamic(() =>
          import("react-icons/md").then(
            (icons) => icons[REACT_ICONS.md[icon as MdVariant]],
          ),
        );

      case "rx":
        if (!REACT_ICONS.rx[icon as RxVariant]) return;
        return dynamic(() =>
          import("react-icons/rx").then(
            (icons) => icons[REACT_ICONS.rx[icon as RxVariant]],
          ),
        );

      case "bs":
        if (!REACT_ICONS.bs[icon as BsVariant]) return;
        return dynamic(() =>
          import("react-icons/bs").then(
            (icons) => icons[REACT_ICONS.bs[icon as BsVariant]],
          ),
        );
    }
  }, [icon, type]); // Depend on icon and type

  if (!IconComponent) return;
  return <IconComponent color={color} size={size} className={className} />;
};

export default Icon;
