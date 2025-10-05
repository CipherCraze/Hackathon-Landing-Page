import { FiMenu } from 'react-icons/fi'

const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#themes' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-kasavu/30 bg-ivory/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3 text-charcoal transition hover:opacity-80">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-kasavu via-saffron to-vermilion text-xl font-black uppercase tracking-widest text-charcoal shadow-lg">
            CK
          </span>
          <div className="leading-tight">
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-deepgreen">Code-Kalari</p>
            <p className="font-heading text-lg font-bold text-charcoal">2026</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-deepgreen/80 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition hover:text-vermilion hover:scale-105"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-kasavu via-saffron to-vermilion transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          
          <a
            href="#register"
            className="rounded-full bg-gradient-to-r from-kasavu via-saffron to-vermilion px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-charcoal shadow-lg transition hover:brightness-110 hover:scale-105"
          >
            Register Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-deepgreen/20 bg-white/50 text-2xl text-deepgreen transition hover:border-saffron/60 hover:bg-white/80 lg:hidden"
          aria-label="Open navigation menu"
        >
          <FiMenu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
