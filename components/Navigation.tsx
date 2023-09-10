"use client";

import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import NavigationLink, { NavigationLinkProps } from "./NavigationLink";
import Icon from "./Icon";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

export type NavigationProps = ComponentPropsWithoutRef<"div"> & {
  links: NavigationLinkProps[];
};

const Navigation = ({ links, ...props }: NavigationProps) => {
  const [hash, setHash] = useState<string>();
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setHash(window.location.hash);
  }, []);

  return (
    <>
      <div className="hidden gap-4 sm:gap-8 md:flex" {...props}>
        {links.map((link) => (
          <NavigationLink
            key={link.href.toString()}
            onClick={() => setHash(link.href.toString())}
            active={hash ? link.href.toString().includes(hash) : undefined}
            {...link}
          />
        ))}
      </div>
      <div
        className="flex w-full justify-end gap-4 p-9 sm:gap-8 md:hidden"
        {...props}
      >
        <button onClick={() => setIsOpen(true)}>
          <Icon name="hamburger" width={36} height={36} />
        </button>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 z-20 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 z-20 flex w-screen items-start justify-center">
            <Dialog.Panel className="border-b-grey w-full border-b-2 bg-bg-light">
              {links.map((link) => (
                <div
                  key={link.href.toString()}
                  className="border-b-grey w-full border-b-[1px] border-opacity-10 p-3 text-right uppercase"
                >
                  <Link
                    onClick={() => {
                      setHash(link.href.toString());
                      setIsOpen(false);
                    }}
                    {...link}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Navigation;
