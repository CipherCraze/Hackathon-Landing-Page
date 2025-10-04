import { motion } from 'framer-motion'

const galleryItems = [
  {
    title: 'Athapookalam Masterpieces',
    description: 'Vibrant floral carpets co-created by teams and local artisans as the hackathon unfolds.',
    tag: 'Pookalam',
  },
  {
    title: 'Vallamkali Dusk Cruise',
    description: 'Evening boat race simulation where progress bars become paddles on the virtual backwaters.',
    tag: 'Vallamkali',
  },
  {
    title: 'Kathakali Motion Lab',
    description: 'Motion-captured storytelling experiments blending traditional mudras with AR overlays.',
    tag: 'Kathakali',
  },
  {
    title: 'Onam Sadhya Fellowship',
    description: 'Community table moments, recipe exchanges, and founder dialogues over plantain leaf feasts.',
    tag: 'Sadhya',
  },
  {
    title: 'Code-in-the-Kalari Nights',
    description: 'Midnight prototyping huddles under coconut silhouettes, fueled by chenda beats and ideas.',
    tag: 'After Hours',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-white via-ivory to-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/5 top-10 h-56 w-56 rounded-full bg-gradient-to-br from-kasavu/25 via-saffron/20 to-transparent blur-3xl" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-gradient-to-tl from-deepgreen/25 via-deepgreen/15 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-6 text-charcoal">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-deepgreen">Culture Gallery</span>
          <h2 className="font-heading text-3xl font-black sm:text-4xl">Moments from Kerala&apos;s digital festival</h2>
          <p className="mx-auto max-w-3xl text-sm text-charcoal/75">
            Experience Code-Kalari across petals, paddles, and pixels. Each frame is a hybrid memory of innovation soaked in the
            Onam spirit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-kasavu/25 bg-white/90 p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-kasavu/35 via-saffron/25 to-vermilion/25 blur-3xl" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-deepgreen/20 bg-deepgreen/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.45em] text-deepgreen">
                {item.tag}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-charcoal">{item.title}</h3>
              <p className="mt-3 text-sm text-charcoal/75">{item.description}</p>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-deepgreen/70">
                <span>Swipe to relive</span>
                <span className="rounded-full border border-kasavu/30 px-3 py-1 text-[0.55rem]">Frame {index + 1}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
