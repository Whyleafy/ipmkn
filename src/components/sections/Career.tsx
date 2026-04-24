import { Reveal } from "@/components/Reveal";
import { Briefcase, TrendingUp, GraduationCap, MapPin } from "lucide-react";

const employers = [
  "Яндекс", "Сбер", "T-Банк", "VK", "Ростелеком", "Лаборатория Касперского",
  "Авито", "Ozon", "X5 Tech", "Альфа-Банк", "Газпром Нефть", "Ростех",
  "КРОК", "Wildberries", "СберТех", "МТС", "Тинькофф", "1С",
];

const stats = [
  { icon: TrendingUp, value: "94%", label: "выпускников трудоустроены по профилю" },
  { icon: Briefcase, value: "40+", label: "компаний-работодателей" },
  { icon: GraduationCap, value: "2 курс", label: "первая стажировка" },
  { icon: MapPin, value: "Тула", label: "и удалёнка по всей РФ" },
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2">
      <div className={`flex gap-3 w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 rounded-xl border border-border bg-card px-6 py-4 shadow-soft hover:border-primary/50 hover:shadow-glow transition-all"
          >
            <span className="font-display text-base md:text-lg font-semibold text-ink whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Career() {
  return (
    <section id="career" className="relative py-20 md:py-28 bg-surface-alt overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-72 bg-primary/15 blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">/ практика_и_карьера</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
              От первой стажировки <br className="hidden md:block" />
              до <span className="text-gradient-accent">должности в топ-IT</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg">
              Производственная практика в тульских и федеральных IT-компаниях, центр карьеры, целевые программы и прямая связь с работодателями.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-soft h-full">
                  <Icon className="h-5 w-5 text-primary" />
                  <div className="mt-4 font-mono text-2xl md:text-3xl font-semibold text-ink">{s.value}</div>
                  <div className="mt-1 text-sm text-ink-soft">{s.label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-14">
            <div className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Где работают выпускники ИПМиКН
            </div>
            <div className="relative -mx-4 md:-mx-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-surface-alt to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-surface-alt to-transparent z-10" />
              <MarqueeRow items={employers} />
              <MarqueeRow items={[...employers].reverse()} reverse />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
