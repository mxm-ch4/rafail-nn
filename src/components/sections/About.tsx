import { Reveal } from '@/components/Reveal'
import { asset } from '@/lib/asset'

export function About() {
  return (
    <section id="about" className="bg-carbon">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] md:items-stretch">
          {/* photo */}
          <Reveal className="overflow-hidden bg-[#08130c] md:flex">
            <img
              src={asset('photo.jpg')}
              alt="Рафаил, агент по недвижимости, Нижний Новгород"
              width={1033}
              height={1176}
              loading="lazy"
              className="h-80 w-full object-cover object-[center_bottom] md:h-[480px]"
            />
          </Reveal>

          {/* copy */}
          <div className="flex flex-col justify-center px-7 pt-10 pb-0 sm:px-12 md:px-12 md:py-16">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[0.18em] text-smoke before:h-px before:w-6 before:bg-green-light/70 before:content-['']">
                О себе
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-7 mb-7 text-[clamp(34px,8.5vw,45px)] font-light leading-[1.12]">
                Продаём квартиры.
                <br />
                Результат — не обещания.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-[560px] text-base font-normal leading-[1.7] text-white/55">
                Специализируюсь на вторичном рынке Нижнего&nbsp;Новгорода, в частности
                районе Новая&nbsp;Кузнечиха. Работаю в команде агентства{' '}
                <b className="font-semibold text-white">Про_Счастье</b> — с полным
                юридическим сопровождением и гарантией по сделке 3&nbsp;года от
                юридического лица.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap gap-3">
                {['🛡️ Гарантия 3 года', '⚖️ Юридическое сопровождение', '💰 Комиссия в цене объекта'].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-[75px] border-[0.5px] border-white/20 px-5 py-2.5 text-[13px] text-white/70"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
