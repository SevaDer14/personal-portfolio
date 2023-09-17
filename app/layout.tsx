import "./globals.css";
import type { Metadata } from "next";
import IconLinks from "@/components/IconLinks";
import Navigation from "@/components/Navigation";
import { fira_mono, montserrat } from "@/app/fonts";
import contacts from "@/data/contacts";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Seva Deriushkin",
  description: "Front-end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira_mono.className}>
        <header
          className={`sticky top-0 z-10 flex h-24 w-full 
        flex-row-reverse items-center justify-between border-b-[2px] border-[#a4b0bd] border-opacity-5 
        bg-gradient-to-l from-brand-light to-[#1a242e] 
        md:flex-row md:justify-center`}
        >
          <Navigation
            links={[
              {
                label: "projects",
                href: "/#work",
              },
              {
                label: "experience",
                href: "/#experience",
              },
              {
                label: "about me",
                href: "/#about",
              },
              {
                label: "contact",
                href: "/#contact",
              },
            ]}
          />
          <ButtonLink href="/api/cv">Resume</ButtonLink>
        </header>
        <main className="container mx-auto px-8">{children}</main>
        <footer
          className={`sticky bottom-0 flex h-24 w-full
        items-center justify-center border-t-[2px] 
        border-[#a4b0bd] border-opacity-5 bg-gradient-to-l
        from-[#1a252f] to-[#141c24]`}
        >
          <IconLinks links={contacts} size={24} />
        </footer>
      </body>
    </html>
  );
}
