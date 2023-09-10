import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";

export type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & LinkProps;

const ButtonLink: FC<ButtonLinkProps> = (props) => (
  <Link
    className="ml-8 rounded-md border-2 border-primary px-4 py-2 text-primary"
    {...props}
  />
);

export default ButtonLink;
