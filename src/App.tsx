import { User, ListChecks, Phone, Building2 } from 'lucide-react'
import { NavBar, type NavItem } from '@/components/ui/tubelight-navbar'
import { NeonDitherHero } from '@/components/ui/neon-dither'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Contacts } from '@/components/sections/Contacts'
import { Agency } from '@/components/sections/Agency'
import { Footer } from '@/components/sections/Footer'

const navItems: NavItem[] = [
  { name: 'Обо мне', url: '#about', icon: User },
  { name: 'Услуги', url: '#services', icon: ListChecks },
  { name: 'Контакты', url: '#contacts', icon: Phone },
  { name: 'Об агентстве', url: '#agency', icon: Building2 },
]

function App() {
  return (
    <div className="min-h-svh bg-ink">
      <NavBar items={navItems} />

      <NeonDitherHero
        title="Рафаил"
        subtitle="Агент по недвижимости · Про_Счастье · Новая Кузнечиха"
        colorBack="#0a2e10"
        colorFront="#3d8a47"
      />

      <main>
        <About />
        <Services />
        <Contacts />
        <Agency />
      </main>

      <Footer />
    </div>
  )
}

export default App
