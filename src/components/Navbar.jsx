import { FiMenu } from 'react-icons/fi'

const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Themes', href: '#themes' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  return (
    <header className="relative z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <a href="#hero" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 text-xl font-black uppercase tracking-widest shadow-lg shadow-orange-500/50">
            H
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-400">Hackathon</p>
            <p className="text-xl font-bold text-white">CipherThon 2.0</p>
          </div>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-semibold tracking-wide text-slate-200 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition hover:text-amber-300"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#register"
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-slate-200 transition hover:border-amber-400/70 hover:text-amber-300"
          >
            View Problem Statement
          </a>
          <a
            href="#register"
            className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-slate-950 shadow-[0_0_20px_rgba(249,115,22,0.45)] transition hover:brightness-110"
          >
            Register Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-2xl text-white transition hover:border-white/40 lg:hidden"
          aria-label="Open navigation menu"
        >
          <FiMenu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
