import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

interface ContactRow {
  label: string
  value: string
  href: string
  external?: boolean
}

const rows: ContactRow[] = [
  { label: 'Telegram', value: '@eyv_realestatebot', href: 'https://t.me/eyv_realestatebot', external: true },
  { label: 'Телефон', value: '+7 (915) 721-02-54', href: 'tel:+79157210254' },
  { label: 'WhatsApp', value: '+7 (915) 721-02-54', href: 'https://wa.me/79157210254', external: true },
]

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  )
}

export function Contacts() {
  return (
    <section
      id="contacts"
      className="bg-carbon px-7 py-[clamp(72px,12vh,128px)] sm:px-12"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-normal uppercase tracking-[0.18em] text-smoke">
            <MessageCircle size={16} style={{ color: '#3d8a47' }} />
            Связаться со мной
          </span>
        </Reveal>

        <div className="mt-[30px] max-w-[760px] border-b border-white/10">
          {rows.map((row, i) => {
            const ext = row.external
              ? { target: '_blank', rel: 'noopener' }
              : {}
            return (
              <Reveal key={row.label} delay={i * 0.06}>
                <a
                  href={row.href}
                  {...ext}
                  className="group flex items-center justify-between gap-5 border-t border-white/10 py-[19px] transition-[padding] duration-300 md:hover:pl-2"
                >
                  <span className="text-[11px] uppercase tracking-[0.08em] text-smoke">
                    {row.label}
                  </span>
                  <span className="text-right text-[15px] font-light text-white transition-colors group-hover:text-green-light">
                    {row.value}
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 flex max-w-[760px] flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Reveal className="sm:flex-[1_1_240px]">
            <a
              href="https://t.me/eyv_realestatebot"
              target="_blank"
              rel="noopener"
              className="flex w-full items-center justify-center gap-2.5 rounded-[75px] border border-transparent bg-green-action px-7 py-4 text-[15px] font-normal text-white transition hover:opacity-90 active:scale-[0.98]"
            >
              <TelegramIcon />
              Написать в Telegram
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="tel:+79157210254"
              className="flex w-full items-center justify-center rounded-[75px] border border-white/40 bg-transparent px-7 py-4 text-[15px] font-normal text-white transition hover:border-white/85 active:scale-[0.98] sm:min-w-[200px]"
            >
              Позвонить
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <a
              href="https://wa.me/79157210254"
              target="_blank"
              rel="noopener"
              className="flex w-full items-center justify-center rounded-[75px] border border-white/40 bg-transparent px-7 py-4 text-[15px] font-normal text-white transition hover:border-white/85 active:scale-[0.98] sm:min-w-[200px]"
            >
              WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
