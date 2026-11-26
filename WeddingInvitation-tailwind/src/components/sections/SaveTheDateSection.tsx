import { useEffect, useState, type CSSProperties } from 'react'

const ceremonyTime = Date.parse('2026-12-28T10:00:00+08:00')
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// December 1, 2026 is Tuesday.
const days = [
  null, null,
  ...Array.from({ length: 31 }, (_, index) => index + 1),
  null, null,
]

const units = ['Days', 'Hours', 'Minutes', 'Seconds']
const heartDrifts = [-22, 14, -8, 25, 5, -15]

function Countdown() {
  const [now, setNow] = useState(Date.now)

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const remaining = Math.max(0, Math.floor((ceremonyTime - now) / 1000))
  const values = [
    Math.floor(remaining / 86400),
    Math.floor(remaining / 3600) % 24,
    Math.floor(remaining / 60) % 60,
    remaining % 60,
  ]

  return (
    <div
      role="timer"
      aria-label="Countdown to the wedding"
      className="mx-auto mt-7 max-w-2xl rounded-xl border border-[#dcc3ab]/20 px-3 py-6 text-center"
    >
      <p className="mb-4 font-serif text-sm tracking-[0.15em] uppercase">
        Countdown to our wedding
      </p>

      <dl className="grid grid-cols-4">
        {units.map((unit, index) => (
          <div key={unit} className="flex flex-col-reverse items-center">
            <dt className="mt-1 text-[0.65rem] tracking-wide uppercase sm:text-xs">
              {unit}
            </dt>
            <dd className="font-serif text-[clamp(1.7rem,4vw,3.4rem)] leading-none tabular-nums">
              {index === 0 ? values[index] : String(values[index]).padStart(2, '0')}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function WeddingDay() {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  return (
    <span
      tabIndex={0}
      aria-label="December 28, our wedding day"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerCancel={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="relative grid min-h-11 place-items-center rounded focus-visible:outline-2 focus-visible:outline-[#f5d8b5]"
    >
      <span aria-hidden="true">28</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute text-[clamp(2.6rem,5.5vw,4.4rem)] leading-none text-[#ffe1d0]"
      >
        ♡
      </span>

      {(hovered || focused) && heartDrifts.map((drift, index) => (
        <span
          key={drift}
          aria-hidden="true"
          className="pointer-events-none absolute text-sm text-pink-200 opacity-0 motion-reduce:hidden"
          style={{
            '--drift': `${drift}px`,
            animation: `wedding-heart 1.2s ${index * 0.2}s ease-out infinite`,
          } as CSSProperties}
        >
          ♥
        </span>
      ))}
    </span>
  )
}

export default function SaveTheDateSection() {
  return (
    <section aria-labelledby="date-title" className="inv-section">
      <h2 id="date-title" className="inv-section-title">Save the Date</h2>

      <div className="rounded-xl bg-[#853D49] px-3 py-7 text-center text-[#fff8ea] sm:px-10 sm:py-10">
        <p className="font-serif text-[clamp(1.05rem,2.2vw,2rem)] uppercase">
          Join us in the celebration of our marriage
        </p>

        <time
          dateTime="2026-12-28T10:00:00+08:00"
          className="mt-2 block font-serif text-[clamp(.9rem,1.8vw,1.6rem)] uppercase"
        >
          December 28, 2026 | Monday | 10:00 AM
        </time>

        <table className="mt-5 w-full table-fixed border-separate border-spacing-1 text-[#f3d8bb]">
          <caption className="pb-2 font-serif text-[clamp(1.7rem,3.5vw,3rem)] tracking-[0.22em] uppercase">
            December
          </caption>

          <thead>
            <tr>
              {weekdays.map(day => (
                <th key={day} scope="col" className="bg-white/10 py-2 text-xs sm:text-base">
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 5 }, (_, week) => (
              <tr key={week}>
                {days.slice(week * 7, week * 7 + 7).map((day, column) => (
                  <td
                    key={column}
                    className={`h-11 bg-black/10 text-sm sm:h-14 sm:text-lg ${
                      day ? 'transition-colors hover:bg-white/20' : ''
                    }`}
                  >
                    {day === 28 ? <WeddingDay /> : day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Countdown />
    </section>
  )
}