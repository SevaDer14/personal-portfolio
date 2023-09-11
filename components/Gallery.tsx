"use client";

import { montserrat } from "@/app/fonts";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC, Fragment } from "react";
import Icon from "@/components/Icon";
import { Tab } from "@headlessui/react";
import Image from "next/image";

export type GalleryItem = {
  name: string;
  href: string;
  image: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

export type GalleryProps = ComponentPropsWithoutRef<"div"> & {
  items: GalleryItem[];
};

const Gallery: FC<GalleryProps> = ({ items, ...props }) => {
  return (
    <div {...props}>
      <Tab.Group>
        {() => (
          <div className=" flex w-full flex-col-reverse lg:flex-col">
            <Tab.Panels>
              {items.map((tab) => (
                <Tab.Panel
                  key={`${tab.name}-panel`}
                  className="flex w-full gap-8"
                >
                  <div className="relative hidden aspect-[4/3] basis-1/2 border-[3px] border-grey lg:block">
                    <Image
                      src={tab.image}
                      alt={tab.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="basis-full lg:basis-1/2">
                    <h3 className={`${montserrat.className} -ml-0.5 text-4xl`}>
                      {tab.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-x-8">
                      {tab.tech.map((tech) => (
                        <span
                          key={tech}
                          className="mt-2 tracking-widest text-grey"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="mt-8 text-justify leading-loose tracking-wide">
                      {tab.description}
                    </p>
                    {tab.links &&
                      tab.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="mt-8 flex items-center gap-2 tracking-widest text-primary-dark transition-all duration-200 hover:gap-3 hover:text-primary"
                        >
                          {link.label} <Icon name="arrow-right" />
                        </Link>
                      ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
            <Tab.List className="mb-10 flex gap-2 overflow-x-auto pb-4 lg:mt-10">
              {items.map((tab) => (
                <Tab key={tab.name} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`
                    ${selected ? "border-[3px] border-primary" : ""}
                    relative aspect-video w-32 min-w-[128px] shadow-none outline-none
                  `}
                    >
                      <Image
                        src={tab.image}
                        alt={tab.name}
                        fill
                        className="object-contain"
                      />
                      {!selected && (
                        <div className="absolute inset-0 h-full w-full bg-brand-dark opacity-75 transition-all duration-200 hover:opacity-40" />
                      )}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
        )}
      </Tab.Group>
    </div>
  );
};

export default Gallery;
