"use client";

import { montserrat } from "@/app/fonts";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";
import Icon from "@/components/Icon";
import TabGroup from "@/components/TabGroup";
import StyledTab from "@/components/StyledTab";
import TabList from "@/components/TabList";
import { Tab } from "@headlessui/react";

export type TabsSection = {
  placeOfWork: string;
  position: string;
  period: string;
  description: string;
  href?: string;
};

export type TabsSectionProps = ComponentPropsWithoutRef<"div"> & {
  tabs: TabsSection[];
};

const TabsSection: FC<TabsSectionProps> = ({ tabs, ...props }) => {
  return (
    <div {...props}>
      <TabGroup>
        <TabList>
          {tabs.map((tab) => (
            <StyledTab key={tab.placeOfWork} placeOfWork={tab.placeOfWork} />
          ))}
        </TabList>
        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel key={`${tab.placeOfWork}-panel`} className="mt-8 md:mt-0">
              <h3 className={`${montserrat.className} -ml-0.5 text-4xl`}>
                {tab.position}
              </h3>
              <p className="mt-2 tracking-widest text-white-faded">
                {tab.period}
              </p>
              <p className="mt-8 text-justify leading-loose tracking-wide">
                {tab.description}
              </p>
              {tab.href ? (
                <Link
                  href={tab.href}
                  className="mt-8 flex items-center gap-2 tracking-widest text-primary-faded transition-all duration-200 hover:gap-3 hover:text-primary"
                >
                  {tab.placeOfWork} <Icon name="arrow-right" />
                </Link>
              ) : null}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </TabGroup>
    </div>
  );
};

export default TabsSection;
