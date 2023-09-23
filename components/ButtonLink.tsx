import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";

export type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & LinkProps;

const ButtonLink: FC<ButtonLinkProps> = ({ className, ...props }) => (
  <Link
    className={`rounded-md border-2 border-primary px-4 py-2 font-medium
  text-primary transition-all duration-200 hover:-translate-x-[2px]
  hover:-translate-y-[2px] hover:shadow-[2px_2px_0_0_#94FBAB] ${className}`}
    target="_blank"
    {...props}
  />
);

export default ButtonLink;
