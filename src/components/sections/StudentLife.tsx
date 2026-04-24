import { Reveal } from "@/components/Reveal";
import { Code, Lightbulb, Users, Cpu, Trophy, Mic } from "lucide-react";

export function StudentLife() {
  return (
    <section id="life" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
      <div className="container relative mx-auto px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">/ студентам</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
              Учиться — это <span className="text-gradient-accent">делать</span>
            </h2>
            <p className="mt-4 text-ink-soft text-base md:text-lg">
              Хакатоны, проектное обучение, мастер-классы практикующих разработчиков и современная инфраструктура.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Хакатоны — large */}
          <Reveal className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="group h-full rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-card to-card p-6 md:p-8 shadow-soft overflow-hidden relative">
              <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-primary/25 blur-3xl group-hover:bg-primary/40 transition-all" />
              <Trophy className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-ink">Хакатоны и соревнования</h3>
              <p className="mt-3 text-ink-soft md:text-lg max-w-md leading-relaxed">
                Студенты ИПМиКН — постоянные участники и призёры всероссийских хакатонов, ICPC, Цифрового прорыва, кейс-чемпионатов от индустрии.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["ICPC", "Цифровой прорыв", "Хакатон Сбера", "VK Cup", "Yandex Cup"].map((t) => (
                  <span key={t} className="font-mono text-xs rounded-md bg-card border border-border px-2.5 py-1 text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-primary/40 transition-colors">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">Проектное обучение</h3>
              <p className="mt-1 text-sm text-ink-soft">Реальные продукты в команде с 1-го курса.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-primary/40 transition-colors">
              <Mic className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">Мастер-классы</h3>
              <p className="mt-1 text-sm text-ink-soft">От практикующих разработчиков и тимлидов.</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-primary/40 transition-colors">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">Современное ПО</h3>
              <p className="mt-1 text-sm text-ink-soft">JetBrains, MATLAB, Wolfram, GitLab Enterprise.</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-primary/40 transition-colors">
              <Cpu className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">Лаборатории</h3>
              <p className="mt-1 text-sm text-ink-soft">Современные компьютерные классы и сервера.</p>
            </div>
          </Reveal>

          <Reveal delay={240} className="md:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-gradient-to-br from-card to-accent p-6 shadow-soft">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">Студенческое научное общество</h3>
              <p className="mt-1 text-sm text-ink-soft">Конференции, публикации, гранты и совместные исследовательские проекты с преподавателями.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
