import { Reveal } from "@/components/Reveal";
import { Sigma, Languages, Atom, Trophy, Award, Heart, FileText } from "lucide-react";

const required = [
  { name: "Математика", note: "профильная", icon: Sigma, primary: true },
  { name: "Русский язык", note: "обязательный", icon: Languages, primary: true },
  { name: "Информатика / Физика", note: "на выбор", icon: Atom, primary: true },
];

const bonuses = [
  { icon: Trophy, title: "Олимпиады", desc: "Победители и призёры перечневых олимпиад — БВИ или 100 баллов" },
  { icon: Award, title: "Золотая медаль", desc: "Дополнительные баллы за аттестат с отличием" },
  { icon: Heart, title: "ГТО и волонтёрство", desc: "Значок ГТО, волонтёрская книжка — до 5 баллов" },
  { icon: FileText, title: "Портфолио", desc: "Достижения, проекты, научные публикации" },
];

export function Exams() {
  return (
    <section id="exams" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">/ поступление_2025</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
              ЕГЭ и <span className="text-gradient-accent">дополнительные баллы</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg">
              Стандартный набор для IT-направлений. Можно усилить заявку олимпиадами, аттестатом и достижениями.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {required.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.name} delay={i * 80}>
                <div className="relative rounded-2xl border border-primary/30 bg-gradient-soft p-6 md:p-8 shadow-soft overflow-hidden h-full">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/15 blur-2xl" />
                  <div className="relative">
                    <Icon className="h-7 w-7 text-primary" />
                    <div className="mt-5 font-mono text-xs uppercase tracking-wider text-primary">обязательный</div>
                    <h3 className="mt-1 font-display text-2xl font-bold text-ink">{r.name}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{r.note}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-14">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-6">Дополнительные баллы</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bonuses.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-card transition-all"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <div className="mt-3 font-display font-semibold text-ink">{b.title}</div>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
