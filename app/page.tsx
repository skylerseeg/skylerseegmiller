import { About } from "@/components/sections/About";
import { Building } from "@/components/sections/Building";
import { Connect } from "@/components/sections/Connect";
import { Hero } from "@/components/sections/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

function Divider() {
  return (
    <div className="mx-auto max-w-5xl px-section-x">
      <div className="h-px w-full bg-bone/10" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <Divider />
        <Building />
        <Divider />
        <Connect />
        <Divider />
        <About />
        <SiteFooter />
      </main>
    </>
  );
}
