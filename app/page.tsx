import { Building } from "@/components/sections/Building";
import { Hero } from "@/components/sections/Hero";

export default function Page() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-5xl px-section-x">
        <div className="h-px w-full bg-bone/10" />
      </div>
      <Building />
    </main>
  );
}
