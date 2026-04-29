export function SiteFooter() {
  return (
    <footer className="border-t border-bone/10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-section-x py-12 font-mono text-caption uppercase text-bone/40 md:grid-cols-3 md:items-center">
        <span className="md:text-left">© 2026 Skyler Seegmiller</span>
        <span className="md:text-center">Salt Lake City, Utah</span>
        <a
          href="mailto:hello@skylerseegmiller.com"
          className="transition-colors hover:text-sage md:text-right"
        >
          hello@skylerseegmiller.com
        </a>
      </div>
    </footer>
  );
}
