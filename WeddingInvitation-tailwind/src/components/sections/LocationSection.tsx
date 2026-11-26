import parishChurch from '../../assets/parishchurch.jpg'
import functionHall from '../../assets/functionhall.jpg'

const venues = [
  {
    role: 'Ceremony',
    name: 'Our Lady of Snows Parish Church',
    address: 'Barangay 1, Himamaylan City',
    time: '10:00 AM',
    dateTime: '2026-12-28T10:00:00+08:00',
    image: parishChurch,
    alt: 'Front entrance and bell tower of Our Lady of Snows Parish Church',
  },
  {
    role: 'Reception',
    name: 'BIMEC Function Hall',
    address: 'Sto. Rosario St., Brgy. Sto. Rosario, Binalbagan',
    time: '12:00 PM',
    dateTime: '2026-12-28T12:00:00+08:00',
    image: functionHall,
    alt: 'Poolside exterior of BIMEC Function Hall',
  },
]

function directionsUrl(venue: (typeof venues)[number]) {
  const destination = `${venue.name}, ${venue.address}, Negros Occidental, Philippines`
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
}

export default function LocationSection() {
  return (
    <section aria-labelledby="location-title" className="inv-section">
      <h2 id="location-title" className="inv-section-title">
        Ceremony &amp; Reception
      </h2>

      <div className="space-y-10 rounded-xl bg-[#853D49] px-5 py-10 text-center text-[#fff8ea] sm:py-14">
        {venues.map(venue => (
          <div key={venue.role}>
            <h3 className="mb-3 font-serif text-2xl uppercase underline underline-offset-4">
              {venue.role}
            </h3>
            <p className="font-serif text-xl sm:text-2xl">{venue.name}</p>
            <p className="mt-1 text-sm sm:text-base">{venue.address}</p>
          </div>
        ))}
      </div>

      <div className="my-6 grid gap-3 sm:grid-cols-2">
        {venues.map(venue => (
          <div key={venue.role} className="rounded-xl border border-white/15 px-4 py-5 text-center">
            <p className="mb-2 text-xs tracking-widest uppercase">{venue.role}</p>
            <p className="font-serif text-xl">{venue.name}</p>
            <time dateTime={venue.dateTime} className="my-2 block text-sm">
              {venue.time}
            </time>
            <a
              href={directionsUrl(venue)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${venue.name}`}
              className="inline-flex min-h-11 items-center text-sm underline underline-offset-4"
            >
              Get directions
            </a>
          </div>
        ))}
      </div>

      {venues.map((venue, index) => (
        <article key={venue.name} className="inv-card">
          {index === 0 && (
            <>
              <p className="inv-script text-[clamp(3rem,6vw,5.5rem)]">Venue</p>
              <p className="mb-5 text-sm italic">Select Directions to see location details.</p>
            </>
          )}

          <h3 className="inv-heading uppercase">{venue.name}</h3>
          <p className="inv-copy mt-2">{venue.address}</p>

          <img
            src={venue.image}
            alt={venue.alt}
            loading="lazy"
            className="mx-auto mt-5 block h-auto w-full rounded-lg object-cover sm:w-[65%]"
          />

          <time dateTime={venue.dateTime} className="mt-4 block">
            {venue.time}
          </time>

          <a
            href={directionsUrl(venue)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Directions to ${venue.name}`}
            className="inv-button mt-3"
          >
            Directions
          </a>
        </article>
      ))}
    </section>
  )
}