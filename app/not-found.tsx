import { montserrat } from "@/app/fonts";

export default function NotFound() {
  return (
    <div className={`${montserrat.className} flex min-h-screen flex-col items-center justify-center`}>
      <h1 className="text-8xl font-thin">404</h1>
      <h2 className="uppercase text-xl mt-4">Page Not Found</h2>
    </div>
  );
}
