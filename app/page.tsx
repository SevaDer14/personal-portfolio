import { montserrat } from "@/app/fonts";
import Avatar from "@/components/Avatar";
import IconLinks from "@/components/IconLinks";
import Projects from "@/components/Projects";
import Tabs from "@/components/Tabs";
import contacts from "@/data/contacts";
import projects from "@/data/projects";
import jobs from "@/data/jobs";
import Image from "next/image";
import Section from "@/components/Section";
import Greeting from "@/components/Greeting";


export default function Home() {
  return (
    <>
      <section
        id="hero"
        className={`${montserrat.className} max-w-9xl relative mx-auto mb-[min(24rem,20vh)] flex min-h-[calc(100vh-192px)] scroll-m-[25vh] flex-col justify-center`}
      >
        <Image
          src="/seva-main.webp"
          alt="seva-photo"
          priority={true}
          fill
          className="absolute hidden object-cover object-left lg:block xl:object-contain xl:object-right"
        />
        <Avatar
          src="/seva-avatar-large.webp"
          alt="seva-avatar"
          className="mx-auto w-[min(80vw,40vh)] lg:hidden"
        />
        <Greeting />
      </section>

      <Section id="projects" className="max-w-6xl min-h-[1800px]">
        <div className="my-auto w-full">
          <h2 className={`${montserrat.className} text-5xl font-bold`}>
            My Projects
          </h2>

          <Projects projects={projects} className="mt-32" />
        </div>
      </Section>

      <Section id="experience" className="max-w-[90ch] min-h-[850px]">
        <div className="my-auto gap-12">
          <h2 className={`${montserrat.className} text-5xl font-bold`}>
            Work experience
          </h2>

          <Tabs tabs={jobs} className="mt-16" />
        </div>
      </Section>

      <Section id="about" className="max-w-2xl xl:max-w-5xl min-h-[750px]">
        <div className="my-auto flex h-full gap-12">
          <div className="text-justify text-lg tracking-wider xl:basis-[55%]">
            <h2 className={`${montserrat.className} text-5xl font-bold`}>
              About me
            </h2>
            <p className="mt-8 leading-loose">
              Hi! I am Seva Deriushkin, an enthusiastic web developer crafting
              great looking web apps with the exceptional user experience.
            </p>
            <p className="mt-8 leading-loose">
              My journey into web development sprouted from the exciting world
              of experimental physics. As captivating as it was, the dynamic
              allure of web development pulled me in.
            </p>
            <p className="mt-8 leading-loose">
              Today, I am fortunate to be part of one of the best agencies in
              the industry, where I work as a front-end developer. Here, I bring
              ideas to life, fashioning interactive, user-friendly web apps with
              cutting-edge web technologies. Here&apos;s a glimpse into some of
              the tech I&apos;ve been working with lately:
            </p>
            <ul className="mt-8 list-disc columns-[220px] pl-4 text-primary">
              <li>TypeScript</li>
              <li>Next.js 13 (React)</li>
              <li>Vue 3</li>
              <li>SvelteKit</li>
              <li>Tailwind</li>
              <li>Storybook</li>
              <li>Figma</li>
              <li>Cypress</li>
            </ul>
          </div>
          <div className="relative hidden basis-[45%] xl:block">
            <Image
              src="/about-me.webp"
              alt="seva-photo"
              priority={true}
              fill
              className="border-4 border-primary object-cover object-top shadow-[10px_10px_0_0_#94FBAB66]"
            />
          </div>
        </div>
      </Section>

      <Section id="contact" className="max-w-xl items-center justify-center">
        <div className="flex flex-col flex-wrap items-center gap-16 md:flex-row md:gap-8">
          <Avatar
            src="/seva-avatar-small.webp"
            alt="seva-avatar"
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
      </Section>
    </>
  );
}
