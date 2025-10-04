const prizeTiers = [
  {
    label: 'Thiruvonam Champion',
    amount: '₹ 15,000',
    perks: 'Incubation with Kerala Startup Mission + heritage showcase residency',
  },
  {
    label: 'Vallamkali Runner-up',
    amount: '₹ 10,000',
    perks: 'Tourism department pilot + mentorship with storytellers',
  },
  {
    label: 'Kathakali Spotlight',
    amount: '₹ 5,000',
    perks: 'CultureTech fellowship + studio-grade content package',
  },
]

const extras = [
  'Onam sadhya experience with jury and partners',
  'Access to Creative Kerala innovation grants',
  'Co-working passes at FabLabs across the state',
  'Media features on Malayali tech channels',
]

function Prizes() {
  return (
    <section id="prizes" className="relative overflow-hidden bg-gradient-to-br from-ivory via-white to-ivory py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-kasavu/30 via-saffron/20 to-vermilion/25 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-gradient-to-tl from-deepgreen/25 via-deepgreen/15 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 text-charcoal">
        <div className="flex flex-col gap-4 text-left sm:text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Prizes</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Kasavu-clad recognitions &amp; real-world pilots</h2>
          <p className="max-w-3xl text-sm text-charcoal/75 sm:mx-auto">
            Celebrate with rewards rooted in Kerala&apos;s culture and future. Winning teams receive cash prizes, pilot opportunities,
            and a spotlight in the Code-Kalari cultural showcase tour.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {prizeTiers.map((tier) => (
              <div
                key={tier.label}
                className="relative overflow-hidden rounded-3xl border border-kasavu/30 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-kasavu/30 via-saffron/20 to-vermilion/25 opacity-0 blur-2xl transition duration-500 hover:opacity-100" />
                <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">{tier.label}</p>
                <p className="mt-4 text-2xl font-bold text-charcoal">{tier.amount}</p>
                <p className="mt-3 text-sm text-charcoal/70">{tier.perks}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-deepgreen/20 bg-white/90 p-6 shadow-[0_0_35px_rgba(15,81,50,0.18)]">
            <p className="text-xs uppercase tracking-[0.35em] text-deepgreen">Beyond prizes</p>
            <h3 className="mt-3 text-lg font-semibold text-charcoal">All finalist teams unlock:</h3>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/75">
              {extras.map((extra) => (
                <li key={extra} className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-deepgreen to-vermilion" />
                  {extra}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-charcoal/60">
              Detailed prize policy includes eligibility, disbursement timelines, and post-hackathon mentorship commitments.
            </p>
            <a
              href="https://code-kalari.in/prize-policy"
              className="mt-4 inline-flex items-center rounded-full border border-kasavu/35 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-deepgreen transition hover:border-saffron/60 hover:text-saffron"
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