import { useEffect, useState } from 'react'
import texture from '../../assets/burgundy.webp'

const ceremony = '2026-12-28T10:00:00+08:00'
const target = Date.parse(ceremony)
const panel = 'flex min-h-[56.25vw] flex-col items-center justify-center bg-cover bg-center px-[5vw] py-12 text-center'
const background = { backgroundImage: `url(${texture})` }
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function Countdown() {
  const [now, setNow] = useState(Date.now)
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])
  const seconds = Math.max(0, Math.floor((target - now) / 1000))
  const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60, seconds % 60]

  return (
    <div role="timer" aria-label="Time until the ceremony" className={panel} style={background}>
      <dl className="grid w-full grid-cols-4">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, i) => (
          <div key={unit} className="relative flex flex-col-reverse">
            <dt className="text-[4vw] uppercase">{unit}</dt>
            <dd className="text-[10vw] leading-none tabular-nums">
              {String(values[i]).padStart(i === 0 ? 1 : 2, '0')}
            </dd>
            {i < 3 && <span aria-hidden="true" className="absolute right-0 top-0 translate-x-1/2 text-[8vw] leading-none">:</span>}
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function WeddingInvitationDetails() {
  return (
    <section aria-labelledby="invitation-details" className="bg-[#5e1f23] font-serif text-white">
      <div className={panel} style={background}>
        <h2 id="invitation-details" className="text-[clamp(1.5rem,3.7vw,5rem)] leading-tight uppercase">
          Join us in the celebration of our marriage
        </h2>
        <time dateTime={ceremony} className="mt-3 text-[clamp(1rem,3.4vw,4.5rem)] uppercase">
          December 28, 2026 | Monday | 10:00 AM
        </time>
        <table className="mt-[3vw] w-full table-fixed border-separate border-spacing-[0.35vw] font-sans text-[clamp(.8rem,2.1vw,3rem)] font-bold text-[#e1c3ab]">
          <caption className="pb-2 font-serif text-[clamp(2rem,5vw,7rem)] font-normal tracking-[0.32em] uppercase">December</caption>
          <thead><tr>{weekdays.map(day => <th key={day} scope="col" className="bg-[#812633]/80 py-[1vw]">{day}</th>)}</tr></thead>
          <tbody>
            {Array.from({ length: 5 }, (_, week) => (
              <tr key={week}>
                {weekdays.map((weekday, column) => {
                  const day = week * 7 + column - 1
                  return (
                    <td key={weekday} className="relative bg-[#661e2b]/75 py-[1.4vw]">
                      {day >= 1 && day <= 31 && day}
                      {day === 28 && <>
                        <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-[clamp(2.8rem,8vw,10rem)] font-normal leading-none">♡</span>
                        <span className="sr-only">, our wedding day</span>
                      </>}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Countdown />

      <div className={panel + ' gap-[8vw]'} style={background}>
        {[
          ['Ceremony', 'Our Lady of Snows Parish Church', 'Barangay 1, Himamaylan City'],
          ['Reception', 'BIMEC Function Hall', 'STO. Rosario ST., BRGY. STO. Rosario, Binalbagan'],
        ].map(([label, venue, address]) => (
          <div key={label}>
            <h3 className="mb-[3vw] text-[clamp(2rem,4vw,6rem)] uppercase underline">{label}</h3>
            <p className="text-[clamp(1.25rem,3.5vw,5rem)] leading-tight">{venue}<br />({address})</p>
          </div>
        ))}
      </div>

      <div className={panel + ' gap-[3.5vw] text-balance text-[clamp(1.35rem,3.7vw,5rem)] leading-[1.08]'} style={background}>
        <hr className="w-2/5 rounded border-t-[0.35vw]" />
        <p>Welcome to our enchanting wedding website, where love and dreams intertwine!</p>
        <p>Join us, along with our beloved families, as we celebrate our profound love and union. Explore the captivating narrative of our journey and discover the delightful details of our upcoming wedding.</p>
        <p>Your presence is a cherished gift, and we would be honored to see our special day through your eyes.</p>
      </div>
    </section>
  )
}
