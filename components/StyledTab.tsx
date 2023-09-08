"use client";

import { Tab } from "@headlessui/react";
import { FC, Fragment } from "react";
import { TabsSection } from "./TabsSection";

const StyledTab: FC<Pick<TabsSection, "placeOfWork">> = ({ placeOfWork }) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={`
              ${
                selected
                  ? "border-r-2 border-primary bg-primary bg-opacity-5 text-primary"
                  : "border-r-[1px] border-white-faded bg-transparent text-white-faded hover:border-white hover:text-white"
              }
              w-full whitespace-nowrap px-4 py-2 shadow-none outline-none
            `}
        >
          {placeOfWork}
        </button>
      )}
    </Tab>
  );
};

export default StyledTab;
