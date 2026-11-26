import { useEffect, useState } from 'react'

const scenes = [
  { background: 15, photos: [13, 14] },
  { background: 12, photos: [11] },
  { background: 10, photos: [9] },
  { background: 8, photos: [7] },
  { background: 6, photos: [5] },
  { background: 2, photos: [4, 3] },
]

const galleryPhotos = [
  { file: 'jANICE.jpg', alt: 'Walking hand in hand across the bridge' },
  { file: 'jANICE (13).jpg', alt: 'Standing together in matching white shirts' },
  { file: 'jANICE (14).jpg', alt: 'A quiet moment at the bridge railing' },
  { file: 'jANICE (11).jpg', alt: 'Laughing together in the garden' },
  { file: 'jANICE (9).jpg', alt: 'An embrace among tropical flowers' },
  { file: 'jANICE (7).jpg', alt: 'Looking at each other beneath the pines' },
  { file: 'jANICE (4).jpg', alt: 'A close portrait in burgundy formalwear' },
  { file: 'jANICE (5).jpg', alt: 'Holding hands on the garden path' },
  { file: 'jANICE (3).jpg', alt: 'Standing together on the garden path' },
]

const imageBase = `${import.meta.env.BASE_URL}images/`

function numberedPhoto(number: number) {
  return `${imageBase}jANICE (${number}).jpg`
}

export default function WeddingGallery() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (!playing) return

    const timer = window.setInterval(() => {
      setActive(current => (current + 1) % scenes.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [playing])

  return (
    <section aria-labelledby="story-title" className="inv-section">

      <div className="relative isolate aspect-[4/3] overflow-hidden rounded-xl bg-[#56343b] sm:aspect-video">
        {scenes.map((scene, index) => (
          <img
            key={scene.background}
            src={numberedPhoto(scene.background)}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 size-full object-cover transition-[opacity,scale,filter] duration-[2000ms] ease-in-out motion-reduce:transition-none ${active === index ? 'scale-100 opacity-100 blur-none' : 'scale-105 opacity-0 blur-sm'
              }`}
          />
        ))}

        {scenes.map((scene, index) => (
          <div
            key={scene.background}
            aria-hidden={active !== index}
            className={`absolute inset-0 flex items-center justify-center gap-[4%] transition-opacity duration-[1200ms] motion-reduce:transition-none ${active === index ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {scene.photos.map(photo => (
              <img
                key={photo}
                src={numberedPhoto(photo)}
                alt={galleryPhotos.find(item => item.file === `jANICE (${photo}).jpg`)?.alt ?? ''}
                className={`h-[84%] border-[clamp(3px,.6vw,10px)] border-[#fffbed] object-cover ${scene.photos.length === 2 ? 'w-[36%]' : 'max-w-[83%]'
                  }`}
              />
            ))}
          </div>
        ))}

        <button
          type="button"
          onClick={() => setPlaying(current => !current)}
          className="absolute right-2 bottom-2 z-10 rounded-full bg-black/65 px-4 py-2 text-xs text-white"
        >
          {playing ? 'Pause slideshow' : 'Play slideshow'}
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 items-start gap-2 sm:grid-cols-3 sm:gap-3">
        {galleryPhotos.map(photo => (
          <img
            key={photo.file}
            src={`${imageBase}${photo.file}`}
            alt={photo.alt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-md object-cover"
          />
        ))}
      </div>

      <div
        data-reveal-group
        className="relative isolate aspect-[4/3] overflow-hidden rounded-xl bg-[#56343b] sm:aspect-video"
      ></div>

    </section>
  )
}