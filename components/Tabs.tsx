"use client";

import { montserrat } from "@/app/fonts";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC, Fragment } from "react";
import Icon from "@/components/Icon";
import { Tab } from "@headlessui/react";

export type Tabs = {
  placeOfWork: string;
  position: string;
  period: string;
  description: string;
  responsibilities: { title: string; description: string }[];
  href: string;
};

export type TabsProps = ComponentPropsWithoutRef<"div"> & {
  tabs: Tabs[];
};

const Tabs: FC<TabsProps> = ({ tabs, ...props }) => {
  return (
    <div {...props}>
      <Tab.Group vertical as={Fragment}>
        {() => (
          <div className="flex min-h-[400px] flex-col gap-8 md:flex-row">
            <Tab.List>
              {() => (
                <div className="flex md:flex-col">
                  {tabs.map((tab) => (
                    <Tab key={tab.placeOfWork} as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`
                        ${
                          selected
                            ? "border-primary bg-primary bg-opacity-5 text-primary max-md:border-b-2 md:border-r-2"
                            : "border-grey bg-transparent text-grey hover:border-white hover:text-white max-md:border-b-[1px] md:border-r-[1px]"
                        }
                        whitespace-nowrap px-4 py-2 shadow-none outline-none md:w-full
                      `}
                        >
                          {tab.placeOfWork}
                        </button>
                      )}
                    </Tab>
                  ))}
                </div>
              )}
            </Tab.List>
            <Tab.Panels>
              {tabs.map((tab) => (
                <Tab.Panel key={`${tab.placeOfWork}-panel`}>
                  <h3 className={`${montserrat.className} -ml-0.5 text-4xl`}>
                    {tab.position}{" "}
                    <a
                      href={tab.href}
                      className="text-primary"
                    >{` @${tab.placeOfWork}`}</a>
                  </h3>
                  <p className="mt-2 tracking-widest text-grey">{tab.period}</p>

                  <p className="mt-8 whitespace-pre-line text-justify leading-loose tracking-wide">
                    {tab.description}
                  </p>
                  <ul className="list-disc leading-loose tracking-wide">
                    {tab.responsibilities.map((responsibility) => (
                      <li key={responsibility.title} className="mt-4">
                        <span className="tracking-wide text-primary">{`${responsibility.title}: `}</span>
                        {responsibility.description}
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        )}
      </Tab.Group>
    </div>
  );
};

export default Tabs;
