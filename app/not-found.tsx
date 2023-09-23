import { montserrat } from "@/app/fonts";
import Icon from "@/components/Icon";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={`${montserrat.className} tracking-widest flex min-h-[calc(100vh-192px)] flex-col items-center justify-center`}
    >
      <h1 className="text-8xl font-thin">404</h1>
      <h2 className="mt-6 text-xl uppercase">Page Not Found</h2>
      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded-xl border border-white px-4 py-2 text-white transition-all duration-200 hover:gap-3 hover:border-primary hover:text-primary"
      >
        Take me home <Icon name="arrow-right" />
      </Link>
    </div>
  );
}
