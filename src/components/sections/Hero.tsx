import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-tech.jpg";

const stats = [
  { value: "60+", label: "лет институту" },
  { value: "8", label: "направлений" },
  { value: "40+", label: "компаний-партнёров" },
  { value: "5000+", label: "выпускников в IT" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface-dark text-primary-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Абстрактная tech-иллюстрация: математические формулы и нейросетевые узлы"
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/60 to-surface-dark" />
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 pt-16 pb-24 md:pt-28 md:pb-36">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-primary-glow backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            Приём 2026 / Тульский государственный университет
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Институт прикладной <br className="hidden md:block" />
            математики и <span className="text-gradient-accent">компьютерных наук</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/75 leading-relaxed">
            Готовим инженеров и исследователей IT-индустрии: программная инженерия, прикладная математика, информационная безопасность и системы искусственного интеллекта — с практикой в ведущих компаниях страны.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-accent text-primary-foreground hover:opacity-90 shadow-glow group">
              <a href="#programs">
                Смотреть направления
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur">
              <a href="#contacts">
                <Phone />
                Приёмная комиссия
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm hover:border-primary/40 transition-colors"
            >
              <div className="font-mono text-3xl md:text-4xl font-semibold text-gradient-accent">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
