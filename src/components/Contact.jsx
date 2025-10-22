function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-ivory via-white to-ivory py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-gradient-to-br from-deepgreen/20 via-deepgreen/10 to-transparent blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 translate-x-1/4 translate-y-1/3 rounded-full bg-gradient-to-tl from-kasavu/30 via-saffron/20 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 text-charcoal">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Connect</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Let&apos;s light the kalari lamp together</h2>
          <p className="text-sm text-charcoal/75">
            Partners, mentors, volunteers, and media can reach us via the form. We respond within two working days. Participants can
            hop onto our Discord for faster coordination.
          </p>
          <div className="grid gap-0.1 sm:grid-cols-2">
            <div className="rounded-3xl border border-deepgreen/15 bg-white/90 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Email</p>
              <a href="mailto:codekalari@iiitkottayam.ac.in" className="mt-2 block text-lg font-semibold text-charcoal">
                codekalari@iiitkottayam.ac.in
              </a>
              <p className="mt-2 text-xs text-charcoal/60">General enquiries &amp; speaker proposals</p>
            </div>
            <div className="rounded-3xl border border-deepgreen/15 bg-white/90 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Discord</p>
              <a href="https://discord.gg/jxhzqDDC4w" className="mt-2 block text-lg font-semibold text-charcoal">
                discord.gg/jxhzqDDC4w
              </a>
              <p className="mt-2 text-xs text-charcoal/60">Real-time updates &amp; team matchmaking</p>
            </div>
          </div>
          
          <div className="mt-6 rounded-3xl border border-kasavu/20 bg-gradient-to-r from-kasavu/10 via-saffron/5 to-vermilion/10 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-deepgreen mb-3">Event Organizer</p>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-charcoal">Harsh Chauhan</h3>
              <p className="flex items-center gap-2 text-sm text-charcoal/80">
                <span className="text-deepgreen">📱</span>
                <a href="tel:+919953944291" className="hover:text-saffron transition">
                  +91 99539 44291
                </a>
              </p>
              <p className="text-xs text-charcoal/60">For urgent queries and event coordination</p>
            </div>
          </div>
        </div>
        <form className="space-y-5 rounded-[32px] border border-kasavu/25 bg-white/95 p-8 shadow-[0_0_45px_rgba(232,185,35,0.15)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-charcoal">
              Name
              <input
                type="text"
                name="name"
                className="w-full rounded-2xl border border-deepgreen/15 bg-white/90 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-saffron/60"
                placeholder="Your full name"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-charcoal">
              Email
              <input
                type="email"
                name="email"
                className="w-full rounded-2xl border border-deepgreen/15 bg-white/90 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-saffron/60"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium text-charcoal">
            I&apos;m reaching out as a
            <select
              name="role"
              className="w-full rounded-2xl border border-deepgreen/15 bg-white/90 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-saffron/60"
            >
              <option>Participant</option>
              <option>Mentor</option>
              <option>Partner</option>
              <option>Volunteer</option>
              <option>Media</option>
              <option>Other</option>
            </select>
          </label>
          <label className="space-y-2 text-sm font-medium text-charcoal">
            Message
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-2xl border border-deepgreen/15 bg-white/90 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-saffron/60"
              placeholder="Tell us how we can collaborate"
            />
          </label>
          <label className="flex items-start gap-3 text-xs text-charcoal/70">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border border-deepgreen/30 text-deepgreen focus:ring-saffron/60" />
            Subscribe me to Code-Kalari updates and Onam stories.
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-kasavu via-saffron to-vermilion px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-charcoal shadow-kasavu transition hover:brightness-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
