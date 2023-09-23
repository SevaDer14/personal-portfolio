import { montserrat } from "@/app/fonts";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";
import Icon from "@/components/Icon";
import Image from "next/image";

export type Project = {
  name: string;
  href: string;
  image: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

export type GalleryProps = ComponentPropsWithoutRef<"div"> & {
  projects: Project[];
};

const Gallery: FC<GalleryProps> = ({ projects, ...props }) => {
  return (
    <div {...props}>
      <div className="flex flex-col gap-32 lg:gap-64">
        {projects.map((project) => (
          <div
            key={`${project.name}-panel`}
            className="flex w-full flex-col-reverse gap-8 md:px-16 xl:flex-row xl:p-0 xl:even:flex-row-reverse"
          >
            <Link
              href={project.href}
              target="_blank"
              className="relative mt-8 block aspect-[4/3] basis-1/2 border-[3px] border-grey transition-colors hover:border-primary xl:mt-0"
            >
              <Image
                priority={true}
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
              <div className="absolute flex h-full w-full opacity-0 transition-opacity hover:opacity-100">
                <div className="absolute h-full w-full bg-brand-dark opacity-100" />
                <p
                  className={`${montserrat.className} z-10 m-auto text-2xl text-primary`}
                >
                  {`visit ${project.href.substring(8)}`}
                </p>
              </div>
            </Link>
            <div className="basis-full lg:basis-1/2">
              <Link
                href={project.href}
                target="_blank"
                className={`${montserrat.className} -ml-0.5 w-fit text-4xl transition-colors hover:text-primary`}
              >
                {project.name}
                <span className="ml-2 inline-block">
                  <Icon name="external-link" />
                </span>
              </Link>
              <div className="mt-2 flex flex-wrap gap-x-8">
                {project.tech.map((tech) => (
                  <span key={tech} className="mt-2 tracking-widest text-grey">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-12 text-justify leading-loose tracking-wide">
                {project.description}
              </p>
              {project.links &&
                project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    className="mt-8 flex items-center gap-2 tracking-widest text-primary-dark transition-all duration-200 hover:gap-3 hover:text-primary"
                  >
                    {link.label} <Icon name="arrow-right" />
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
