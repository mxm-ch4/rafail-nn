import { asset } from '@/lib/asset'

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-ink px-7 py-8 sm:px-12">
      <div className="flex items-center gap-2.5">
        <img
          src={asset('logo.png')}
          alt="Логотип агентства Про_Счастье"
          width={20}
          height={20}
          className="h-5 w-auto"
        />
        <span className="text-xs tracking-[0.03em] text-white/55">Про_Счастье</span>
      </div>

      <div className="flex gap-5">
        <a
          href="https://vk.com/pro_schastyenn"
          target="_blank"
          rel="noopener"
          className="text-xs text-white/40 transition-colors hover:text-white/85"
        >
          ВКонтакте
        </a>
        <a
          href="https://yandex.ru/maps/-/CPtHmE17"
          target="_blank"
          rel="noopener"
          className="text-xs text-white/40 transition-colors hover:text-white/85"
        >
          Яндекс Карты
        </a>
      </div>

      <p className="mt-5 w-full text-center text-[11px] tracking-[0.04em] text-white/25">
        © 2026 Рафаил · агент по недвижимости
      </p>
    </footer>
  )
}
