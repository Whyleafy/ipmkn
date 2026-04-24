import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#programs", label: "Направления" },
  { href: "#career", label: "Карьера" },
  { href: "#exams", label: "Поступление" },
  { href: "#extras", label: "Возможности" },
  { href: "#life", label: "Студентам" },
  { href: "#contacts", label: "Контакты" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-8 w-8 place-items-center rounded-lg text-primary-foreground shadow-glow">
            <img src="/tulsu.svg" alt=""/>
          </span>
          <span className="hidden sm:inline tracking-tight">ИПМиКН</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="bg-gradient-accent text-primary-foreground hover:opacity-90 shadow-glow">
            <a href="#contacts">Подать документы</a>
          </Button>
        </div>

        <button
          className="md:hidden rounded-md p-2 hover:bg-secondary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-gradient-accent text-primary-foreground">
              <a href="#contacts" onClick={() => setOpen(false)}>Подать документы</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
