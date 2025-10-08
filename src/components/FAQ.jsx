import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const faqs = [
  {
    question: 'What makes Code-Kalari unique?',
    answer:
      'It is Kerala’s cultural hackathon blending kalari discipline with tech innovation. Expect Athapookalam installations, Onam rituals, and local experts guiding you through meaningful impact challenges.',
  },
  {
    question: 'Who can apply and how are teams formed?',
    answer:
      'Students, professionals, artists, and community builders are welcome. Apply as a team of 3–5 or join the solo applicant pool—our pre-event kalari circle helps match solo creatives with crews.',
  },
  {
    question: 'Is remote participation supported?',
    answer:
      'Yes. Remote teams collaborate via our virtual backwater hub with live mentor slots, streaming of rituals, and digital Athapookalam board for updates.',
  },
  {
    question: 'What amenities and resources are provided?',
    answer:
      'On-site creators receive co-working zones, yoga nidra pods, Onam sadhya meals, fast Wi-Fi, and hardware lending. All teams access APIs, datasets, design kits, and 24x7 mentor support.',
  },
  {
    question: 'How does judging work?',
    answer:
      'Shortlisted teams pitch on the Lotus Stage with a 3-minute demo + 2-minute Q&A. Judges score on cultural resonance, sustainability, user delight, and scalability. Audience vote decides the People’s Lotus.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-3xl border border-kasavu/25 bg-white/90">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex-1">
          <p className="text-sm font-semibold text-charcoal">{question}</p>
          {open && <p className="mt-2 text-sm text-charcoal/75">{answer}</p>}
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-kasavu/30 bg-kasavu/15 text-sm text-deepgreen">
          {open ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
    </div>
  )
}

function FAQ() {
  return (
    <section id="faq" className="bg-gradient-to-b from-ivory via-white to-ivory py-24">
      <div className="mx-auto w-full max-w-5xl px-6 text-charcoal">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">FAQs</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Answers from the kalari desk</h2>
          <p className="text-sm text-charcoal/75">
            Can’t find what you need? Write to <a href="mailto:codekalari@iiitkottayam.ac.in" className="underline decoration-dotted underline-offset-4">codekalari@iiitkottayam.ac.in</a> or join our Discord for live updates.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
