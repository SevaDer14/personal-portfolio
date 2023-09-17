import Link, { LinkProps } from "next/link";
import Icon, { IconName } from "@/components/Icon";

export type IconLinkProps = LinkProps & { name: IconName; size?: number };

const IconLink = ({ name, size = 24, ...props }: IconLinkProps) => {
  return (
    <Link className="relative" style={{ height: size, width: size }} {...props}>
      <Icon
        name={name}
        width={size}
        height={size}
        className={`absolute left-0 top-0 text-[#dadada]
        drop-shadow-[0_2px_2px_#131B2399] transition-all 
        duration-200 hover:scale-110 hover:text-white
        hover:opacity-100 hover:drop-shadow-[0_5px_5px_#131B2399] `}
      />
    </Link>
  );
};

export default IconLink;
