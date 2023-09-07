import { montserrat } from "@/app/fonts";

export default function Home() {
  return (
    <section id="hero" className={`${montserrat.className} h-screen flex justify-center items-center`}>
      <div>
        <h1 className="font-bold text-7xl">Seva Deriushkin</h1>
        <h2 className="font-thin uppercase text-4xl mt-4">I build for the web</h2>
      </div>
    </section>
  );
}
