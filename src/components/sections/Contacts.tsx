import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

export function Contacts() {
  return (
    <section id="contacts" className="relative py-20 md:py-28 bg-surface-dark text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-widest text-primary-glow mb-3">/ контакты</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Готов поступать? <span className="text-gradient-accent">Свяжись с нами</span>
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-base md:text-lg">
              Приёмная комиссия ИПМиКН ответит на любые вопросы абитуриентов и родителей.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <Reveal>
            <a
              href="tel:+74872332332"
              className="group block rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 md:p-8 backdrop-blur hover:border-primary/50 hover:bg-primary-foreground/10 transition-all"
            >
              <div className="flex items-center gap-3 text-primary-glow text-sm font-mono uppercase tracking-wider">
                <Phone className="h-4 w-4" /> Приёмная комиссия
              </div>
              <div className="mt-3 font-display text-2xl md:text-3xl font-bold">+7 (4872) 33-23-32</div>
              <div className="mt-1 text-sm text-primary-foreground/60">Пн–Пт 9:00–17:00</div>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <a
              href="mailto:info@tsu.tula.ru"
              className="group block rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 md:p-8 backdrop-blur hover:border-primary/50 hover:bg-primary-foreground/10 transition-all"
            >
              <div className="flex items-center gap-3 text-primary-glow text-sm font-mono uppercase tracking-wider">
                <Mail className="h-4 w-4" /> Email
              </div>
              <div className="mt-3 font-display text-2xl md:text-3xl font-bold">info@tsu.tula.ru</div>
              <div className="mt-1 text-sm text-primary-foreground/60">Ответим в течение рабочего дня</div>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 md:p-8 backdrop-blur">
              <div className="flex items-center gap-3 text-primary-glow text-sm font-mono uppercase tracking-wider">
                <MapPin className="h-4 w-4" /> Адрес института
              </div>
              <div className="mt-3 font-display text-lg md:text-xl font-semibold">
                г. Тула, проспект Ленина, 92
              </div>
              <div className="mt-1 text-sm text-primary-foreground/60">9-й учебный корпус ТулГУ</div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 md:p-8 backdrop-blur">
              <div className="flex items-center gap-3 text-primary-glow text-sm font-mono uppercase tracking-wider">
                <Globe className="h-4 w-4" /> Мы в сети
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild variant="outline" className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="https://vk.com/pm2kn" target="_blank" rel="noreferrer">
                    ВКонтакте <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10">
                  <a
                    href="https://tulsu.ru/faculty-landing/institut-prikladnoy-matematiki-i-kompyuternykh-nauk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Сайт ТулГУ <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 text-center">
            <Button asChild size="lg" className="bg-gradient-accent text-primary-foreground hover:opacity-90 shadow-glow">
              <a href="https://abitur71.tsu.tula.ru/how-to-apply" target="_blank" rel="noreferrer">
                Подать документы онлайн
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
