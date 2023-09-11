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
    <div {...props}>
      <div className="hidden gap-4 sm:gap-8 md:flex">
        {links.map((link) => (
          <NavigationLink
            key={link.href.toString()}
            onClick={() => setHash(link.href.toString())}
            active={hash ? link.href.toString().includes(hash) : undefined}
            {...link}
          />
        ))}
      </div>
      <div className="md:hidden">
        <button className="p-8" onClick={() => setIsOpen(true)}>
          <Icon name="hamburger" width={36} height={36} />
        </button>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 z-20 bg-black/30" aria-hidden="true" />

          <div className="fixed right-0 top-0 z-20 flex items-start justify-center">
            <Dialog.Panel className="h-screen w-[min(100vw,300px)] border-l-2 border-l-grey bg-gradient-to-b from-brand-light to-brand-dark">
              <div className="flex h-24 w-full justify-end border-b-[1px] border-b-grey border-opacity-10 p-3">
                <button onClick={() => setIsOpen(false)}>
                  <Icon name="close" width={32} height={32} />
                </button>
              </div>

              {links.map((link) => (
                <div
                  key={link.href.toString()}
                  className="w-full border-b-[1px] border-b-grey border-opacity-10 p-3 text-right uppercase"
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
    </div>
  );
};

export default Navigation;
