import "./globals.css";
import type { Metadata } from "next";
import IconLinks from "@/components/IconLinks";
import Navigation from "@/components/Navigation";
import { fira_mono, montserrat } from "@/app/fonts";

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
        <header className="fixed top-0 flex h-24 w-full items-center justify-center">
          <Navigation
            links={[
              {
                label: "about",
                href: "/#about",
              },
              {
                label: "experience",
                href: "/#experience",
              },
              {
                label: "work",
                href: "/#work",
              },
              {
                label: "contact",
                href: "/#contact",
              },
            ]}
          />
        </header>
        <main>{children}</main>
        <footer className="fixed bottom-0 flex h-24 w-full items-center justify-center">
          <IconLinks
            links={[
              {
                name: "email",
                href: "#email",
              },
              {
                name: "telegram",
                href: "#telegram",
              },
              {
                name: "github",
                href: "#github",
              },
            ]}
          />
        </footer>
      </body>
    </html>
  );
}
