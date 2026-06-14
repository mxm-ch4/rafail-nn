import { ShieldCheck, Megaphone, ArrowLeftRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const GOLD = '#b8960c'
const GREEN = '#3d8a47'

/* ── small atoms ─────────────────────────────────────────── */
function Stars({ size = 18 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={GOLD} aria-hidden="true">
          <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.172L12 18.896l-7.335 3.864 1.401-8.172L.132 9.211l8.2-1.193z" />
        </svg>
      ))}
    </div>
  )
}

function VkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077FF" aria-hidden="true">
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm2.18 13.36h-1.6c-.6 0-.79-.48-1.87-1.57-1-.94-1.4-.94-1.63-.94-.33 0-.43.1-.43.57v1.43c0 .4-.13.64-1.17.64-1.73 0-3.64-1.04-4.99-3C4.2 10.45 3.8 8.5 3.8 8.07c0-.23.1-.45.57-.45h1.6c.43 0 .59.2.75.66.83 2.4 2.22 4.5 2.79 4.5.21 0 .31-.1.31-.65V9.77c-.07-1.17-.68-1.27-.68-1.69 0-.2.17-.4.43-.4h2.52c.36 0 .49.2.49.62v3.33c0 .36.16.49.27.49.21 0 .39-.13.78-.52 1.2-1.35 2.06-3.43 2.06-3.43.11-.23.31-.45.74-.45h1.6c.48 0 .59.25.48.58-.2.93-2.13 3.65-2.13 3.65-.17.27-.23.4 0 .7.17.23.73.7 1.1 1.13.68.77 1.2 1.42 1.34 1.87.14.44-.09.67-.54.67z" />
    </svg>
  )
}

function YandexIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#FC3F1D" />
      <text x="9" y="13" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
        Я
      </text>
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#2AABEE"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.69 7.96c-.12.58-.46.72-.93.45l-2.56-1.89-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.6 4.72-4.26c.2-.18-.05-.28-.32-.1L7.28 14.6l-2.5-.78c-.54-.17-.55-.54.12-.8l9.77-3.77c.45-.16.85.11.97.55z"
      />
    </svg>
  )
}

/* ── reviews data ────────────────────────────────────────── */
interface Review {
  name: string
  date: string
  url: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Дарья Исакова',
    date: 'март 2026',
    url: 'https://2gis.ru/reviews/70000001104434927/review/225807963',
    text: 'Весь процесс от выбора квартиры до проверки документов был под контролем. Уложились в февраль месяц. Все вопросы предельно ясные. Ваши интересы поддержат и учтут, безопасность обеспечат.',
  },
  {
    name: 'Светлана Черпакова',
    date: '2026',
    url: 'https://2gis.ru/reviews/70000001104434927/review/216030432',
    text: 'Обратилась в агентство Про_Счастье. Всё прошло оперативно, чётко и профессионально. Остались очень довольны результатом. Рекомендую всем кто ищет надёжное агентство.',
  },
  {
    name: 'Galina Martynova',
    date: 'декабрь 2025',
    url: 'https://2gis.ru/reviews/70000001104434927/review/207823361',
    text: 'Про_Счастье — это команда профессионалов. Всегда на связи, профессиональные советы на каждом этапе. Сделку провели на высшем уровне. Рекомендую всем.',
  },
]

const links = [
  { label: 'ВКонтакте', href: 'https://vk.com/pro_schastyenn', icon: <VkIcon /> },
  { label: 'Яндекс Карты', href: 'https://yandex.ru/maps/-/CPtHmE17', icon: <YandexIcon /> },
  { label: 'Telegram', href: 'https://t.me/eyv_realestatebot', icon: <TelegramIcon /> },
]

export function Agency() {
  return (
    <section
      id="agency"
      className="bg-ink px-7 py-[clamp(72px,12vh,128px)] sm:px-12"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* ── Block 1 — rating banner ── */}
        <Reveal>
          <div className="flex flex-col items-stretch border border-white/[0.08] px-8 py-6 md:flex-row md:flex-nowrap md:items-center">
            {/* rating */}
            <div className="flex items-center gap-3 md:flex-1 md:justify-center">
              <span className="text-[11px] text-white/40">2ГИС</span>
              <span className="text-[39px] font-light leading-none text-white">5.0</span>
              <div>
                <Stars size={18} />
                <p className="mt-1 text-xs text-white/40">29 отзывов</p>
              </div>
            </div>

            <div className="my-5 h-px w-full bg-white/10 md:mx-6 md:my-0 md:h-12 md:w-px" />

            {/* guarantee */}
            <div className="flex items-center gap-3 md:flex-1 md:justify-center">
              <ShieldCheck size={20} style={{ color: GREEN }} className="shrink-0" />
              <div>
                <p className="text-sm text-white">Гарантия 3 года</p>
                <p className="text-xs text-white/40">от юридического лица</p>
              </div>
            </div>

            <div className="my-5 h-px w-full bg-white/10 md:mx-6 md:my-0 md:h-12 md:w-px" />

            {/* ads */}
            <div className="flex items-center gap-3 md:flex-1 md:justify-center">
              <Megaphone size={20} style={{ color: GREEN }} className="shrink-0" />
              <div>
                <p className="text-sm text-white">Реклама на 14+ площадках</p>
                <p className="text-xs text-white/40">за счёт агентства</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Block 2 — slogan ── */}
        <Reveal>
          <p className="px-7 py-16 text-center text-[clamp(30px,8.5vw,54px)] font-light leading-tight text-white">
            <span style={{ color: GOLD }}>Про_даём</span> не{' '}
            <ArrowLeftRight
              aria-hidden="true"
              className="inline align-middle"
              style={{ width: '0.7em', height: '0.7em', color: GOLD }}
            />{' '}
            метры, а СЧАСТЬЕ<span style={{ color: GOLD }}>!</span>
          </p>
        </Reveal>

        {/* ── Block 3 — reviews ── */}
        <Reveal>
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-white/40">Отзывы</p>

            <div className="mt-6 grid grid-cols-1 gap-px sm:grid-cols-3">
              {reviews.map((r) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.06]"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[15px] text-white">{r.name}</span>
                    <span className="shrink-0 text-xs text-white/40">{r.date}</span>
                  </div>
                  <div className="mt-3">
                    <Stars size={15} />
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">{r.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] text-white/30 transition-colors group-hover:text-white/50">
                    <ArrowUpRight size={12} />
                    Читать полностью на 2GIS
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-4 text-center text-[11px] text-white/30">
              * Отзывы сокращены для отображения. Нажмите на карточку для просмотра
              полного отзыва на 2GIS.
            </p>
          </div>
        </Reveal>

        {/* ── Block 4 — brand links ── */}
        <Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[75px] border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:border-white/60"
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
