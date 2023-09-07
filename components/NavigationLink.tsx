import Link, { LinkProps } from "next/link";

export type NavigationLinkProps = LinkProps & {
  label: string;
  active?: boolean;
};

const NavigationLink = ({
  href,
  active,
  label,
  ...props
}: NavigationLinkProps) => {
  return (
    <Link
      href={href}
      className={`relative px-1 py-0.5 capitalize transition-all duration-200 
        after:absolute after:bottom-0 after:left-0 
        after:h-[1px] after:w-full  
        after:transition-all after:duration-200 
        hover:after:scale-100 ${
          active
            ? "text-primary after:scale-50 after:bg-primary"
            : "text-white after:scale-0 after:bg-white"
        }`}
      {...props}
    >
      {label}
    </Link>
  );
};

export default NavigationLink;
