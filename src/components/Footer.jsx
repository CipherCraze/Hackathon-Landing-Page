import { FaDiscord, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineMail,HiOutlinePhone } from 'react-icons/hi'
import { BsCalendarDate } from 'react-icons/bs'

const footerLinks = [
  { label: 'About', href: '#about' },
  /*{ label: 'Tracks', href: '#tracks' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
   { label: 'Contact', href: '#contact' },*/
]

const socials = [
  { label: 'Discord', href: 'https://discord.gg/jxhzqDDC4w', icon: <FaDiscord /> },
  { label: 'Instagram', href: 'https://www.instagram.com/codekalari?utm_source=qr&igsh=aWU4dHJ5a254N3Zo', icon: <FaInstagram /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/codekalari/', icon: <FaLinkedin /> },
  {/* label: 'GitHub', href: 'https://github.com/code-kalari', icon: <FaGithub />*/ },
]

function Footer() {
  return (
    <footer id="Footer" className="relative border-t border-kasavu/25 bg-gradient-to-b from-ivory via-white to-ivory py-16 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-gradient-to-tr from-kasavu/20 via-saffron/15 to-transparent blur-3xl" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-gradient-to-bl from-deepgreen/15 via-vermilion/10 to-transparent blur-3xl" />
      </div>

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kasavu/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Main footer content grid */}
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/0 shadow-none">
                  <img src="/images/code-kalari-logo).png" alt="Code-Kalari logo" className="h-12 w-12 object-contain" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black text-charcoal">
                    Code-Kalari
                    <span className="ml-2 bg-gradient-to-r from-kasavu via-saffron to-vermilion bg-clip-text text-transparent">
                      2026
                    </span>
                  </h3>
                  <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Kerala's Cultural Hackathon</p>
                </div>
              </div>
            </div>
            
            <p className="max-w-md text-sm leading-relaxed text-charcoal/75">
              A 24-hour celebration merging Kerala's rich cultural heritage with cutting-edge innovation. 
              Building the future while honoring our roots.
            </p>

            <div className="space-y-2 text-sm text-charcoal/70">
              <p className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-deepgreen h-5 w-5" />
                <a
                  href="https://maps.app.goo.gl/97wcHFSPR5UNQxw4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal hover:text-saffron transition"
                >
                  IIIT Kottayam, Kerala
                </a>
              </p>
              <p className="flex items-center gap-2">
                <BsCalendarDate className="text-deepgreen h-5 w-5" />
                <span>January 10, 2026 · 10:00 AM IST</span>
              </p>
              <p className="flex items-center gap-2">
                <HiOutlineMail className="text-deepgreen h-5 w-5" />
                <a href="mailto:codekalari@iiitkottayam.ac.in" className="hover:text-saffron transition">
                  codekalari@iiitkottayam.ac.in
                </a>
              </p>
              <p className="flex items-center gap-2">
                    <HiOutlinePhone className="text-deepgreen h-5 w-5" />
                      <a href="tel:9953944291" className="hover:text-saffron transition">
                          Harsh Chauhan – 9953944291
                      </a>
              </p>

            </div>
          </div>

          {/* Quick links 
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-charcoal/80 transition hover:text-saffron hover:translate-x-1 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          */}
          {/* Social links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Connect With Us</h4>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-charcoal/80 transition hover:text-saffron"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/80 border border-kasavu/20 group-hover:border-saffron/40 group-hover:bg-saffron/10 transition">
                    {social.icon}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
              
              
            </div>
          </div>
          <div>
                {/* Devfolio button */}
              <a
                href="https://devfolio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 mt-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <img 
                  src="/images/Devfolio_Logo-Black@2x.png" 
                  alt="DEVFOLIO LOGO" 
                  className="h-6 w-auto object-contain"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Apply on Devfolio</span>
              </a>
              <a
                href="https://ethindia.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 mt-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <img 
                  src="/images/ethindia-dark.png" 
                  alt="ETHINDIA LOGO" 
                  className="h-6 w-auto object-contain"
                />
              </a>
              <a
                //href="https://devfolio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 mt-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <img 
                  src="/images/Logo + LogoMark  - Filled On Light 1.png" 
                  //alt="DEVFOLIO LOGO" 
                  className="h-6 w-auto object-contain"
                />
              </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-kasavu/15">
          <div className="flex flex-col gap-4 items-center justify-between text-center lg:flex-row lg:text-left">
            <p className="text-xs text-charcoal/60">
              © 2026 Code-Kalari. Crafted with{' '}
              <span className="text-red-500">❤️</span> in Kerala.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-charcoal/60">
              <a href="#privacy" className="hover:text-saffron transition">Privacy Policy</a>
              <span className="text-charcoal/30">·</span>
              <a href="#conduct" className="hover:text-saffron transition">Code of Conduct</a>
              <span className="text-charcoal/30">·</span>
              <a href="#terms" className="hover:text-saffron transition">Terms & Conditions</a>
            </div>
          </div>

          <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.45em] text-charcoal/40">
            Made possible by volunteers, artisans, and makers who believe in culture-driven technology
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer