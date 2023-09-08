"use client";

import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import NavigationLink, { NavigationLinkProps } from "./NavigationLink";

export type NavigationProps = ComponentPropsWithoutRef<"div"> & {
  links: NavigationLinkProps[];
};

const Navigation = ({ links, ...props }: NavigationProps) => {
  const [hash, setHash] = useState<string>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    setHash(window.location.hash);
  }, []);

  return (
    <div className="flex gap-4 sm:gap-8" {...props}>
      {links.map((link) => (
        <NavigationLink
          key={link.href.toString()}
          onClick={() => setHash(link.href.toString())}
          active={hash ? link.href.toString().includes(hash) : undefined}
          {...link}
        />
      ))}
    </div>
  );
};

export default Navigation;
