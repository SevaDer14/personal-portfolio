"use client"

import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconLinks from "@/components/IconLinks";
import contacts from "@/data/contacts";

const Greeting = () => {
  return (
    <Transition
      appear={true}
      show={true}
      enter="ease-out duration-1000"
      enterFrom="opacity-0 translate-y-20"
      enterTo="opacity-100 translate-y-0"
      leave="ease-in duration-1000"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-20"
      as={Fragment}
    >
      <div className="lg:absolute lg:top-[43%] xl:top-[38%]">
        <h1 className="mt-4 text-[min(11vw,84px)] font-bold leading-tight drop-shadow-[0_5px_5px_#131B2399]">
          Seva <br className="lg:hidden" /> Deriushkin
        </h1>
        <p className="mt-4 text-right text-[min(6vw,50px)] font-extralight uppercase leading-tight drop-shadow-[0_2px_2px_#131B23] lg:text-left">
          I build for the <br className="lg:hidden" /> web
        </p>

        <IconLinks
          links={contacts}
          size={32}
          className="mt-12 hidden gap-8 lg:flex"
        />
      </div>
    </Transition>
  );
};

export default Greeting;
