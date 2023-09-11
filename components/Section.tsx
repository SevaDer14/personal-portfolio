"useClient";

import useIsVisible from "@/hooks/useIsVisible";
import { Transition } from "@headlessui/react";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  id: string;
};

const Section = ({ id, children, className, ...props }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const show = useRef<boolean>(false);
  const isVisible = useIsVisible(sectionRef.current);

  function alwaysShowSection() {
    show.current = true;
  }


  return (
    <section
      id={id}
      ref={sectionRef}
      className={`mx-auto mb-[min(24rem,20vh)] flex min-h-[min(650px,100vh)] max-w-5xl scroll-m-[20vh] ${className}`}
      {...props}
    >
      <Transition
        show={isVisible || show.current}
        beforeEnter={alwaysShowSection}
        unmount={false}
        className="w-full"
        enter="transition ease-in-out duration-1000"
        enterFrom="opacity-0 translate-y-20"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-1000"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-20"
      >
        {children}
      </Transition>
    </section>
  );
};

export default Section;
