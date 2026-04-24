import { Reveal } from "@/components/Reveal";
import { Code2, Sigma, ShieldCheck, Database, Cpu, Network, BrainCircuit, Binary } from "lucide-react";

const programs = [
  {
    code: "09.03.04",
    title: "Программная инженерия",
    desc: "Промышленная разработка ПО, архитектура систем, DevOps и командная работа над реальными проектами.",
    skills: ["Java/Kotlin", "TypeScript", "CI/CD", "Архитектура"],
    icon: Code2,
  },
  {
    code: "01.03.02",
    title: "Прикладная математика и информатика",
    desc: "Математическое моделирование, анализ данных и алгоритмы для индустрии и науки.",
    skills: ["Python", "ML", "Статистика", "Алгоритмы"],
    icon: Sigma,
  },
  {
    code: "10.03.01",
    title: "Информационная безопасность",
    desc: "Защита информации, криптография, безопасность сетей и веб-приложений.",
    skills: ["Криптография", "Pentest", "SOC", "Сети"],
    icon: ShieldCheck,
  },
  {
    code: "09.03.02",
    title: "Информационные системы и технологии",
    desc: "Проектирование ИС, базы данных, бизнес-аналитика и enterprise-разработка.",
    skills: ["SQL", "BPMN", "Backend", "1C"],
    icon: Database,
  },
  {
    code: "09.03.01",
    title: "Информатика и вычислительная техника",
    desc: "Компьютерные системы, встраиваемое ПО, интернет вещей и аппаратно-программные комплексы.",
    skills: ["C/C++", "FPGA", "IoT", "ОС"],
    icon: Cpu,
  },
  {
    code: "02.03.02",
    title: "Фундаментальная информатика",
    desc: "Теоретические основы информатики, формальные методы, исследования и НИОКР.",
    skills: ["Логика", "Теория", "Haskell", "НИР"],
    icon: BrainCircuit,
  },
  {
    code: "09.03.03",
    title: "Прикладная информатика",
    desc: "Цифровизация бизнес-процессов, разработка отраслевых ИТ-решений и автоматизация.",
    skills: ["BI", "ERP", "Web", "Аналитика"],
    icon: Network,
  },
  {
    code: "01.03.01",
    title: "Математика",
    desc: "Чистая и прикладная математика: основа для R&D, криптографии и исследований.",
    skills: ["Анализ", "Алгебра", "Теория чисел", "ТФКП"],
    icon: Binary,
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="container relative mx-auto px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">/ направления_подготовки</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
              Восемь направлений — <span className="text-gradient-accent">от математики до киберсека</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg">
              Бакалавриат, магистратура и аспирантура. Учебные планы согласованы с ведущими работодателями отрасли.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.code} delay={i * 60}>
                <article className="group relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground group-hover:bg-gradient-accent group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground">{p.code}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.skills.map((s) => (
                      <span key={s} className="font-mono text-[11px] rounded-md bg-secondary px-2 py-0.5 text-secondary-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
