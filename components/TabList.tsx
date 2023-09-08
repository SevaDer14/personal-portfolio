"use client";

import { Tab } from "@headlessui/react";
import { ComponentPropsWithoutRef, FC } from "react";

const TabList: FC<ComponentPropsWithoutRef<"div">> = (props) => {
  return (
    <Tab.List>{() => <div className="flex md:flex-col" {...props} />}</Tab.List>
  );
};

export default TabList;
