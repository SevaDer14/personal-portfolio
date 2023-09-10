"use client";

import { Tab } from "@headlessui/react";
import { ComponentPropsWithoutRef, FC, Fragment } from "react";


const TabGroup: FC<ComponentPropsWithoutRef<"div">> = (props) => {
  return (
    <Tab.Group vertical as={Fragment}>
      {() => <div className="flex min-h-[400px] flex-col md:flex-row gap-8" {...props} />}
    </Tab.Group>
  );
};

export default TabGroup;
