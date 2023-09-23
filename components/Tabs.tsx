"use client";

import { montserrat } from "@/app/fonts";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC, Fragment, useState } from "react";
import { Tab, Transition } from "@headlessui/react";

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
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div {...props}>
      <Tab.Group vertical as={Fragment} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
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
                            ? "border-primary text-primary max-md:border-b-4 md:border-r-4"
                            : "border-grey text-grey hover:border-white hover:text-white max-md:border-b-[1px] md:border-r-[1px]"
                        }
                        whitespace-nowrap bg-transparent px-4 py-2 focus:bg-primary focus:bg-opacity-5 focus:outline-none md:w-full
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
              {tabs.map((tab, panelIndex) => (
                <Transition
                  key={`${tab.placeOfWork}-panel`}
                  unmount={false}
                  show={selectedIndex === panelIndex}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 -translate-x-5"
                  enterTo="opacity-100 translate-x-0"
                  leave="ease-in duration-300"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-5"
                >
                  <Tab.Panel>
                    <h3 className={`${montserrat.className} -ml-0.5 text-4xl`}>
                      {tab.position}{" "}
                      <Link
                        href={tab.href}
                        target="_blank"
                        className="text-primary"
                      >{` @${tab.placeOfWork}`}</Link>
                    </h3>
                    <p className="mt-2 tracking-widest text-grey">
                      {tab.period}
                    </p>

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
                </Transition>
              ))}
            </Tab.Panels>
          </div>
        )}
      </Tab.Group>
    </div>
  );
};

export default Tabs;
