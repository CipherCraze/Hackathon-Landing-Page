const teamMembers = [
  {
    name: 'Meera Namboodiri',
    role: 'Festival Director',
    focus: 'Cultural programming & partnerships',
  },
  {
    name: 'Arjun Varma',
    role: 'Tech Kalari Lead',
    focus: 'Platform ops, mentor pods & judging stack',
  },
  {
    name: 'Nila Thomas',
    role: 'Community Weaver',
    focus: 'Volunteer guilds, campus chapters & inclusivity',
  },
  {
    name: 'Shyam S Pillai',
    role: 'Experience Designer',
    focus: 'Space design, Onam sadhya, and rituals',
  },
]

const mentorHighlights = [
  '35 mentors across sustainability, tourism, and creative tech.',
  'Kalari circles every 3 hours with artisans & technologists.',
  'Investors in residence from Rainmatter & angel collectives.',
]

function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-gradient-to-b from-ivory via-white to-ivory py-24">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-kasavu/25 via-saffron/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-y-1/3 rounded-full bg-gradient-to-tl from-deepgreen/25 via-deepgreen/15 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 text-charcoal">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Team</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">The Kalari guild guiding your journey</h2>
          <p className="mx-auto max-w-3xl text-sm text-charcoal/75">
            Meet the creators weaving together tradition and technology. Connect with them during office hours, wellness breaks, and
            night-long prototyping sessions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-kasavu/25 bg-white/90 p-6 text-left shadow-lg transition hover:-translate-y-1"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-kasavu/30 via-saffron/20 to-vermilion/25 blur-3xl" />
              </div>
              <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Core Guild</p>
              <h3 className="mt-4 text-lg font-semibold text-charcoal">{member.name}</h3>
              <p className="mt-2 text-sm text-charcoal/75">{member.role}</p>
              <p className="mt-3 text-xs text-charcoal/60">{member.focus}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center rounded-full border border-kasavu/25 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
              >
                Connect
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-deepgreen/20 bg-white/90 p-8 shadow-[0_0_35px_rgba(15,81,50,0.15)] lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Mentors &amp; Judges</p>
            <h3 className="mt-3 text-lg font-semibold text-charcoal">Crafted line-up announced weekly</h3>
            <p className="mt-3 text-sm text-charcoal/75">
              Expect storytellers, climate scientists, tourism innovators, and cultural icons. We host twice-daily mentor parades so
              every team receives live feedback.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-charcoal/75">
            {mentorHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-deepgreen to-vermilion" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Team
