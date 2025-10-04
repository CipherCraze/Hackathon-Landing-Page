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
    <header className="relative z-20 border-b border-kasavu/20 bg-ivory/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <a href="#hero" className="flex items-center gap-3 text-charcoal">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-kasavu via-saffron to-vermilion text-xl font-black uppercase tracking-widest text-charcoal shadow-kasavu">
            CK
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-deepgreen">Code-Kalari</p>
            <p className="font-heading text-xl font-bold text-charcoal">Where Code Meets Culture</p>
          </div>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-semibold tracking-wide text-deepgreen/80 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition hover:text-vermilion"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-kasavu via-saffron to-vermilion transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#register"
            className="rounded-full border border-deepgreen/20 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
          >
            Themes Scroll
          </a>
          <a
            href="#register"
            className="rounded-full bg-gradient-to-r from-kasavu via-saffron to-vermilion px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-charcoal shadow-kasavu transition hover:brightness-110"
          >
            Register Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-deepgreen/15 text-2xl text-deepgreen transition hover:border-saffron/50 lg:hidden"
          aria-label="Open navigation menu"
        >
          <FiMenu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
