import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const faqs = [
  {
    question: 'What is CipherThon 2.0?',
    answer:
      'Placeholder answer: Describe your hackathon mission, the type of participants you welcome, and the overall experience.',
  },
  {
    question: 'How do I register?',
    answer:
      'Share the registration flow, ticketing platform, eligibility, and deadlines. Replace this copy with your real instructions.',
  },
  {
    question: 'Can I participate remotely?',
    answer:
      'Outline hybrid participation support, remote collaboration tools, and how international teams can join.',
  },
  {
    question: 'What is provided during the hackathon?',
    answer:
      'Mention swag, snacks, mentors, workstations, API credits, and any pre-event onboarding you plan to offer.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{question}</p>
          {open && <p className="mt-2 text-sm text-slate-300">{answer}</p>}
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-sm text-amber-300">
          {open ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
    </div>
  )
}

function FAQ() {
  return (
    <section id="faq" className="bg-slate-950/95 py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">FAQs</span>
          <h2 className="text-3xl font-black text-white sm:text-4xl">Your questions, answered</h2>
          <p className="text-sm text-slate-400">
            Replace these placeholders with actual questions from your participants and embed links to official policies.
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
