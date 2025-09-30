

const footerLinks = [
  { label: 'Code of Conduct', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
]

const socials = [
  { label: 'Discord', href: '#', handle: '@cipherthon' },
  { label: 'Twitter', href: '#', handle: '@cipherthon' },
  { label: 'LinkedIn', href: '#', handle: 'CipherThon' },
]

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/90 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">CipherThon 2.0</p>
          <p className="mt-2 text-sm text-slate-400">
            Placeholder text: powered by CipherSchools and partners. Update with real credits and support channels.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-amber-300">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-xs text-slate-400">
          {socials.map((social) => (
            <a key={social.label} href={social.href} className="flex items-center gap-2 transition hover:text-amber-300">
              <span className="uppercase tracking-[0.35em] text-amber-300">{social.label}</span>
              <span>{social.handle}</span>
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-[0.65rem] uppercase tracking-[0.45em] text-slate-500">
        Update this footer with your actual copyright and brand guidelines
      </p>
    </footer>
  )
}

export default Footer