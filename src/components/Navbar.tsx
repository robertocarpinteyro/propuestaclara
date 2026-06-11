import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Formatos", href: "#formatos" },
  { label: "Feed", href: "#feed" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activo, setActivo] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`flex items-center gap-2 sm:gap-3 rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-3 sm:px-4 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/40" : ""
        }`}
      >
        <a href="#inicio" className="group gradient-border rounded-full hover:[background:linear-gradient(270deg,#D98AA6_0%,#9F2241_100%)]">
          <span className="flex w-9 h-9 items-center justify-center rounded-full bg-bg font-display italic text-sm">
            CC
          </span>
        </a>

        <span className="hidden sm:block w-px h-5 bg-stroke" />

        <div className="flex items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActivo(link.href)}
              className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-3.5 py-1.5 transition-colors ${
                activo === link.href
                  ? "text-text-primary bg-stroke/50"
                  : "text-muted hover:text-text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="hidden sm:block w-px h-5 bg-stroke" />

        <a
          href="#contacto"
          className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm rounded-full border border-stroke px-3.5 py-1.5 transition-all hover:border-transparent hover:[box-shadow:0_0_0_1px_#9F2241,0_0_8px_rgba(159,34,65,0.35)]"
        >
          Hablemos <span aria-hidden>↗</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
