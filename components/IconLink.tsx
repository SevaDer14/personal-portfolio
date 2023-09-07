import Link, { LinkProps } from "next/link";
import Icon, { IconName } from "@/components/Icon";

export type IconLinkProps = LinkProps & { name: IconName };

const IconLink = ({ name, ...props }: IconLinkProps) => {
  return (
    <Link className="relative h-6 w-6" {...props}>
      <Icon
        name={name}
        className="absolute left-0 top-0 text-white-faded transition-all duration-200 hover:scale-110 hover:text-white"
      />
    </Link>
  );
};

export default IconLink;
