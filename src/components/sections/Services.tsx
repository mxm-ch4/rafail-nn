import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

interface Service {
  name: string
  desc: string
}

const services: Service[] = [
  {
    name: 'Анализ и оценка объекта',
    desc: 'Проводим сравнительный анализ рынка: изучаем историю реальных цен сделок по вашему дому и району, сопоставляем состояние объекта, текущий спрос и рыночную динамику — и формируем рекомендованную стоимость для максимально выгодного и быстрого выхода на сделку.',
  },
  {
    name: 'Юридическая проверка',
    desc: 'Проверяем документы, историю перехода прав, обременения, состав зарегистрированных лиц и согласие супругов ещё до выхода объекта в рекламу — чтобы сделка прошла чисто, не сорвалась и не могла быть оспорена впоследствии.',
  },
  {
    name: 'Реклама на 14+ площадках',
    desc: 'Организуем профессиональную фотосъёмку за счёт агентства, составляем продающее описание и размещаем объект на Циан, Авито, Домклик, Яндекс Недвижимости и других площадках — чтобы его увидело максимальное число реальных покупателей.',
  },
  {
    name: 'Поиск покупателей',
    desc: 'Помимо открытой рекламы предлагаем объект по внутренней базе агентства Про_Счастье и партнёрской сети агентов — часть покупателей приходит напрямую, без конкуренции с другими объявлениями.',
  },
  {
    name: 'Торг в вашу пользу',
    desc: 'Ведём переговоры с покупателями и их представителями, отрабатываем возражения и аргументируем стоимость — задача сохранить цену максимально близкой к запрашиваемой, а не снижать её ради скорости закрытия сделки.',
  },
  {
    name: 'Составление договоров',
    desc: 'Подготавливаем авансовое соглашение и договор купли-продажи с учётом вашей ситуации: ипотека, материнский капитал, опека, альтернативная сделка со встречной покупкой.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-ink px-7 py-[clamp(72px,12vh,128px)] sm:px-12">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-[clamp(40px,7vw,64px)]">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[0.18em] text-smoke before:h-px before:w-6 before:bg-green-light/70 before:content-['']">
              Услуги
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 text-[clamp(30px,7.5vw,45px)] font-light leading-[1.15]">
              Профессиональное сопровождение сделки.
              <br />
              От оценки до передачи ключей.
            </h2>
          </Reveal>
        </div>

        <div className="border-b border-white/10">
          {services.map((svc, i) => (
            <Reveal key={svc.name} delay={i * 0.05}>
              <div className="group grid grid-cols-[26px_1fr_auto] items-start gap-x-[18px] gap-y-1.5 border-t border-white/10 py-6 transition-[padding] duration-300 md:hover:pl-2.5">
                <span className="pt-[5px] font-mono text-[11px] tabular-nums text-white/25 transition-colors group-hover:text-green-light">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <span className="mb-2.5 block text-[clamp(17px,4.6vw,20px)] font-normal text-white transition-colors group-hover:text-green-light">
                    {svc.name}
                  </span>
                  <span className="block max-w-[60ch] text-sm font-normal leading-[1.65] text-white/40">
                    {svc.desc}
                  </span>
                </div>
                <ArrowRight
                  size={18}
                  className="mt-1.5 -translate-x-2 self-start text-green-light opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-[11px] font-normal leading-[1.7] text-white/40">
            Вознаграждение агентства выплачивается в день подписания основного
            договора купли-продажи — только после того, как сделка состоялась.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
