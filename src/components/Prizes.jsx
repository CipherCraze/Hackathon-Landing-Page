

const prizeTiers = [
  {
    label: 'First Prize',
    amount: 'Rs. 5,000',
    perks: 'Fast-track incubation + hardware goodies',
  },
  {
    label: 'Second Prize',
    amount: 'Rs. 3,000',
    perks: 'Cloud credits + mentorship immersion',
  },
  {
    label: 'Third Prize',
    amount: 'Rs. 2,000',
    perks: 'Design sprint with partner studio',
  },
]

const extras = [
  'Gadget hampers',
  'Internship opportunities',
  'Exclusive AI toolkits',
  'Travel grants for top student teams',
]

function Prizes() {
  return (
    <section id="prizes" className="relative overflow-hidden bg-slate-950/90 py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-pink-500/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-gradient-to-tl from-indigo-500/30 via-blue-500/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-4 text-left sm:text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">Prizes</span>
          <h2 className="text-3xl font-black text-white sm:text-4xl">Prize pool & futuristic perks</h2>
          <p className="max-w-3xl text-sm text-slate-400 sm:mx-auto">
            Placeholder text: highlight your prize structure, partner rewards, and ongoing support opportunities for winning teams.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {prizeTiers.map((tier) => (
              <div
                key={tier.label}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-pink-500/30 opacity-0 blur-2xl transition duration-500 hover:opacity-100" />
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">{tier.label}</p>
                <p className="mt-4 text-2xl font-bold text-white">{tier.amount}</p>
                <p className="mt-3 text-sm text-slate-300">{tier.perks}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-amber-400/40 bg-slate-950/80 p-6 shadow-[0_0_35px_rgba(249,115,22,0.2)]">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Beyond prizes</p>
            <h3 className="mt-3 text-lg font-semibold text-white">All finalist teams unlock:</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {extras.map((extra) => (
                <li key={extra} className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-pink-500" />
                  {extra}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-400">
              Update with actual rewards and extend CTA for detailed prize policy.
            </p>
            <a
              href="#prize-policy"
              className="mt-4 inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-amber-200 transition hover:border-amber-300 hover:text-amber-100"
            >
              Download Prize Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes