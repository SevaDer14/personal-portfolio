import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";

export type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & LinkProps;

const ButtonLink: FC<ButtonLinkProps> = (props) => (
  <Link
    className={`ml-8 rounded-md border-2 border-primary px-4 py-2 text-primary
  font-medium hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[2px_2px_0_0_#94FBAB]
  transition-all duration-200`}
    {...props}
  />
);

export default ButtonLink;
