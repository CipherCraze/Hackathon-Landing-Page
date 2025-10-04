const footerLinks = [
  { label: 'Code of Conduct', href: 'https://code-kalari.in/code-of-conduct' },
  { label: 'Privacy Policy', href: 'https://code-kalari.in/privacy' },
  { label: 'Volunteer Handbook', href: 'https://code-kalari.in/volunteer' },
]

const socials = [
  { label: 'Discord', href: 'https://discord.gg/code-kalari', handle: '@code-kalari' },
  { label: 'Instagram', href: 'https://instagram.com/codekalari', handle: '@codekalari' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/code-kalari', handle: 'Code-Kalari' },
]

function Footer() {
  return (
    <footer className="border-t border-kasavu/25 bg-gradient-to-b from-white via-ivory to-white py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 text-charcoal lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Code-Kalari</p>
          <p className="mt-2 text-sm text-charcoal/75">
            Crafted with ❤️ in Kerala. Co-hosted by Kerala Digital Mission, CultureTech Collective, and volunteer guilds across the
            state.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-charcoal/80">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-saffron">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-xs text-charcoal/70">
          {socials.map((social) => (
            <a key={social.label} href={social.href} className="flex items-center gap-2 transition hover:text-saffron">
              <span className="uppercase tracking-[0.35em] text-deepgreen">{social.label}</span>
              <span>{social.handle}</span>
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-[0.65rem] uppercase tracking-[0.45em] text-charcoal/50">
        Made possible by volunteers, artisans, and makers who believe in culture-driven technology.
      </p>
    </footer>
  )
}

export default Footer