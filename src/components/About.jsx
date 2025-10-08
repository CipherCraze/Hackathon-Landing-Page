import CountdownTimer from './CountdownTimer'

function About() {
  // Program starts: January 10, 2026 at 10:00 AM IST
  const eventDate = new Date('2026-01-10T10:00:00+05:30')
  
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-kasavu/25 bg-gradient-to-b from-ivory via-white to-ivory py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kasavu/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vermilion/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-12 h-32 w-32 rounded-full border border-kasavu/30 blur-[2px]" />
        <div className="absolute right-14 bottom-16 h-36 w-36 rounded-full border border-deepgreen/20" />
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">
            About Code-Kalari
          </span>
          <h2 className="font-heading text-3xl font-black text-charcoal sm:text-4xl">
            Kerala&apos;s cultural hackathon for climate, culture, and community builders
          </h2>
          <p className="text-base text-charcoal/80">
            Code-Kalari is a 24-hour celebration that pairs the collaborative energy of traditional kalari training with
            cutting-edge innovation. Teams ideate beside glowing nilavilakku lamps, solve local challenges, and showcase
            prototypes that honour Kerala&apos;s heritage while embracing the future.
          </p>
          <div className="space-y-4 rounded-3xl border border-deepgreen/15 bg-white/85 p-6 shadow-kasavu">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Venue</p>
                <p className="text-lg font-semibold text-charcoal">Indian Institute of Information Technology (IIIT) Kottayam</p>
                <p className="text-sm text-charcoal/70">
                  <a 
                    href="https://maps.app.goo.gl/4V2MHdaJaE3gnfb98" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-deepgreen hover:text-saffron transition underline"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Date</p>
                <p className="text-lg font-semibold text-charcoal">January 10, 2026</p>
                <p className="text-sm text-charcoal/70">Program starts at 10:00 AM IST</p>
              </div>
            </div>
            <div className="rounded-2xl border border-kasavu/30 bg-ivory/80 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Presented by</p>
              <h3 className="text-xl font-bold text-charcoal">Harsh Chauhan</h3>
              <p className="flex items-center gap-2 text-sm text-charcoal/80">
                <span className="text-deepgreen">📱</span>
                <a href="tel:+919953944291" className="hover:text-saffron transition">
                  +91 99539 44291
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-[32px] border border-kasavu/25 bg-white/85 p-8 shadow-[0_0_45px_rgba(232,185,35,0.18)]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-charcoal">Countdown to Code-Kalari 2026</h3>
            <span className="rounded-full border border-deepgreen/20 bg-deepgreen/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-deepgreen">
              Live
            </span>
          </div>
          <CountdownTimer targetDate={eventDate} />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Capacity', copy: '250 creators, designers & storytellers' },
              { label: 'Focus', copy: 'Sustainability, tourism, heritage tech & open innovation' },
              { label: 'Mentors', copy: '35 cultural custodians, technologists, and artists' },
              { label: 'Perks', copy: 'Onam sadhya, swag packs, incubation fast-pass' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-kasavu/20 bg-ivory/80 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">{item.label}</p>
                <p className="mt-1 text-sm text-charcoal/80">{item.copy}</p>
              </div>
            ))}
          </div>
          <a
            href="#register"
            className="inline-flex items-center justify-center rounded-2xl border border-kasavu/40 bg-gradient-to-r from-kasavu/20 via-saffron/15 to-vermilion/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
          >
            Secure your spot
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
