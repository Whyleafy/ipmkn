import { Reveal } from "@/components/Reveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Shield, Globe2, BookOpenCheck, Layers, GraduationCap, Building2 } from "lucide-react";

const extras = [
  {
    icon: Shield,
    title: "Военный учебный центр",
    desc: "Получи воинское звание и военно-учётную специальность параллельно с обучением. Без отрыва от учёбы.",
    tag: "ВУЦ",
  },
  {
    icon: Globe2,
    title: "Углублённый английский",
    desc: "Технический английский для IT-специалиста — чтение документации, общение с зарубежными командами.",
    tag: "B2 / IT-English",
  },
  {
    icon: BookOpenCheck,
    title: "Курсы IT-компаний",
    desc: "Совместные программы с Яндекс, VK, Сбер: реальные продуктовые задачи и менторы из индустрии.",
    tag: "Yandex • VK • Sber",
  },
  {
    icon: Layers,
    title: "Второе высшее",
    desc: "Параллельное получение дополнительной специальности по сокращённой программе.",
    tag: "2nd degree",
  },
  {
    icon: GraduationCap,
    title: "Магистратура и аспирантура",
    desc: "Продолжение по исследовательскому или индустриальному треку, научное руководство в сильных школах.",
    tag: "MSc / PhD",
  },
  {
    icon: Building2,
    title: "Базовые кафедры",
    desc: "Учебные кафедры на базе тульских IT-компаний — обучение от практикующих специалистов.",
    tag: "Industry",
  },
];

export function Extras() {
  return (
    <section id="extras" className="relative py-20 md:py-28 bg-surface-dark text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary-glow mb-3">/ доп_возможности</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Не только диплом — <span className="text-gradient-accent">а целый набор</span> возможностей
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-base md:text-lg">
              Военный учебный центр, языковая подготовка, индустриальные курсы и продолжение образования.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 px-4 md:px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {extras.map((e) => {
                  const Icon = e.icon;
                  return (
                    <CarouselItem key={e.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm hover:border-primary/50 hover:bg-primary-foreground/10 transition-all">
                        <div className="flex items-start justify-between">
                          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-primary-foreground shadow-glow">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-mono text-[11px] text-primary-glow">{e.tag}</span>
                        </div>
                        <h3 className="mt-5 font-display text-lg font-semibold">{e.title}</h3>
                        <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{e.desc}</p>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" />
              <CarouselNext className="hidden md:flex bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20" />
            </Carousel>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
