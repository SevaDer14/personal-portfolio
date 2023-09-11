import { montserrat } from "@/app/fonts";
import Avatar from "@/components/Avatar";
import IconLinks from "@/components/IconLinks";
import Gallery from "@/components/Gallery";
import Tabs from "@/components/Tabs";
import contacts from "@/data/contacts";
import work from "@/data/work";
import experience from "@/data/experience";
import Image from "next/image";

// TODO:
// animations on scroll
// section heights
// content
// animation open modal

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className={`${montserrat.className} relative mx-auto flex min-h-[calc(100vh-192px)] max-w-7xl scroll-m-24 flex-col justify-center`}
      >
        <Image
          src="/seva-full.webp"
          alt="seva-photo"
          fill
          className="absolute hidden object-cover md:block lg:object-contain lg:object-right"
        />
        <Avatar
          src="/seva-closeup.webp"
          alt="seva-closeup"
          className="mx-auto w-[min(80vw,40vh)] md:hidden"
        />
        <div className="md:absolute md:top-[43%] xl:top-[38%]">
          <h1 className="mt-4 text-[min(11vw,84px)] font-bold leading-tight drop-shadow-[0_5px_5px_#131B2399]">
            Seva <br className="lg:hidden" /> Deriushkin
          </h1>
          <p className="mt-4 text-right text-[min(6vw,50px)] font-extralight uppercase leading-tight drop-shadow-[0_2px_2px_#131B23] md:text-left">
            I build for the <br className="md:hidden" /> web
          </p>

          <IconLinks
            links={contacts}
            size={32}
            className="mt-12 hidden gap-8 md:flex"
          />
        </div>
      </section>

      <section
        id="about"
        className={`mx-auto flex min-h-[calc(100vh-192px)] max-w-5xl scroll-m-24`}
      >
        <div className="my-auto flex h-full gap-12">
          <div className="text-justify text-lg tracking-wider lg:basis-[55%]">
            <h2 className={`${montserrat.className} text-5xl font-bold`}>
              About me
            </h2>
            <p className="mt-12 leading-loose">
              Hello! My name is Seva and I enjoy creating things that live on
              the internet. My journey in web development started in 2020 when I
              decided to switch from doing experimental physics.
            </p>
            <p className="mt-8 leading-loose">
              Today, I am working at one of top ad agencies in the world
              building front-end for a variety of clients. Here are a few
              technologies I&aposve been working with recently:
            </p>
            <ul className="mt-8 list-disc columns-[180px] pl-4 text-primary">
              <li>TypeScript</li>
              <li>React (Next.js)</li>
              <li>Vue 3</li>
              <li>Tailwind</li>
              <li>Storybook</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="relative hidden basis-[45%] lg:block">
            <Image
              src="/about-me.webp"
              alt="seva-photo"
              fill
              className="border-4 border-primary object-cover object-top shadow-[10px_10px_0_0_#94FBAB66]"
            />
          </div>
        </div>
      </section>

      <section
        id="experience"
        className={`mx-auto flex min-h-[calc(100vh-192px)] max-w-3xl scroll-m-24`}
      >
        <div className="my-auto gap-12">
          <h2 className={`${montserrat.className} text-5xl font-bold`}>
            Work experience
          </h2>

          <Tabs tabs={experience} className="mt-16" />
        </div>
      </section>

      <section
        id="work"
        className={`mx-auto flex min-h-[calc(100vh-192px)] max-w-5xl scroll-m-24`}
      >
        <div className="my-auto w-full">
          <h2 className={`${montserrat.className} text-5xl font-bold`}>
            My work
          </h2>

          <Gallery tabs={work} className="mt-16" />
        </div>
      </section>

      <section
        id="contact"
        className={`mx-auto flex min-h-[calc(100vh-192px)] max-w-3xl scroll-m-24 py-16`}
      >
        <div className="m-auto flex max-w-xl flex-col flex-wrap items-center gap-16 md:flex-row md:gap-8">
          <Avatar
            src="/seva-closeup.webp"
            alt="seva-closeup"
            className="w-48 grow-0"
          />
          <h2
            className={`${montserrat.className} grow-1 my-auto text-center text-4xl font-light tracking-widest sm:text-5xl`}
          >
            Get in touch
          </h2>
          <IconLinks
            links={contacts}
            size={32}
            className="mx-auto flex grow-0 flex-col gap-8"
          />
        </div>
      </section>
    </>
  );
}
