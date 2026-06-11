import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Formatos", href: "#formatos" },
  { label: "Feed", href: "#feed" },
  { label: "Enfoque", href: "#enfoque" },
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
      </div>
    </nav>
  );
};

export default Navbar;
