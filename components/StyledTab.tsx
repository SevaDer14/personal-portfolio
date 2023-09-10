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
                  ? "border-primary bg-primary bg-opacity-5 text-primary max-md:border-b-2 md:border-r-2"
                  : "border-grey text-grey bg-transparent hover:border-white hover:text-white max-md:border-b-[1px] md:border-r-[1px]"
              }
              whitespace-nowrap px-4 py-2 shadow-none outline-none md:w-full
            `}
        >
          {placeOfWork}
        </button>
      )}
    </Tab>
  );
};

export default StyledTab;
