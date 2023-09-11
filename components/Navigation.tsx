"use client";

import { ComponentPropsWithoutRef, Fragment, useState } from "react";
import NavigationLink, { NavigationLinkProps } from "./NavigationLink";
import Icon from "./Icon";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export type NavigationProps = ComponentPropsWithoutRef<"div"> & {
  links: NavigationLinkProps[];
};

const Navigation = ({ links, ...props }: NavigationProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div {...props}>
      <div className="hidden gap-4 sm:gap-8 md:flex">
        {links.map((link) => (
          <NavigationLink key={link.href.toString()} {...link} />
        ))}
      </div>
      <div className="md:hidden">
        <button className="p-8" onClick={() => setIsOpen(true)}>
          <Icon name="hamburger" width={36} height={36} />
        </button>

        <Transition show={isOpen}>
          <Dialog onClose={() => setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 z-20 bg-black/30"
                aria-hidden="true"
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <Dialog.Panel className="fixed right-0 top-0 z-20 h-screen w-[min(100vw,300px)] border-l-2 border-l-grey bg-gradient-to-b from-brand-light to-brand-dark">
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
                        setIsOpen(false);
                      }}
                      {...link}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Navigation;
