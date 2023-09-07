import IconLink, { IconLinkProps } from "./IconLink";
import { ComponentPropsWithoutRef } from "react";

export type IconLinksProps = ComponentPropsWithoutRef<"div"> & {
  links: IconLinkProps[];
};

const IconLinks = ({ links, ...props }: IconLinksProps) => {
  return (
    <div className="flex gap-8" {...props}>
      {links.map((link) => (
        <IconLink key={link.name} {...link} />
      ))}
    </div>
  );
};

export default IconLinks;
