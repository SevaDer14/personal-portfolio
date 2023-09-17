import { GalleryItem } from "@/components/Gallery";

const projects: GalleryItem[] = [
  {
    image: "/volvo-penta.webp",
    name: "Volvo Penta",
    tech: ["React", "TypeScript", "GSAP", "Storybook", "Emotion"],
    description:
      "Developing a React component library exclusively for the Volvo Group to be used across a broad family of products, with Volvo Penta website as a primary consumer. The project is focused on adhering to Volvo's stringent design guidelines, all while placing a strong emphasis on accessibility and an optimal developer experience.",
    href: "https://volvopenta.com",
  },
  {
    image: "/husqvarna.webp",
    name: "Husqvarna Construction",
    tech: ["React", "TypeScript", "Redux Toolkit", "SASS", "Storybook"],
    description:
      "Lead role in overseeing the React front-end codebase for the Husqvarna Construction's e-commerce website. This includes ensuring code quality, performance and stability of the solution. Maintaining documentation of the front-end components in Storybook. As well as closely collaborating with the client to jointly prioritize, design, and execute the development of new features.",
    href: "https://www.husqvarnaconstruction.com/int/",
  },
  {
    image: "/new-tonality.webp",
    name: "New Tonality",
    tech: [
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "Highcharts",
      "Web Audio API",
    ],
    description:
      "An innovative application designed to complement my educational efforts on my YouTube channel. It serves a dual purpose: to facilitate my research of non-Western music cultures and to empower the creation of music in previously unexplored tunings. It features state-of-the-art modeling of psychoacoustic phenomena that sheds light on uncharted territories of tuning theory.",
    href: "https://newtonality.net",
    links: [
      {
        label: "See on Github",
        href: "https://github.com/SevaDer14/new-tonality-lab",
      },
    ],
  },
];

export default projects;
