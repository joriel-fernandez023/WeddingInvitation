import woman from '../../assets/W-removebg-preview.png'
import man from '../../assets/M-removebg-preview.png'
import couple from '../../assets/C-removebg-preview.png'

const palette = [
  ['Champagne', '#f2e7c9'],
  ['Soft gold', '#f5dcaa'],
  ['Burgundy', '#77162d'],
  ['Dark wine', '#500d18'],
  ['Deep wine', '#38020d'],
]

export default function DressCodeSection() {
  return (
    <section aria-labelledby="dress-title" className="inv-section">

      <div className="inv-card space-y-7">
        <p className="inv-script text-[clamp(3rem,7vw,6rem)]">Dress Code</p>

        <p className="inv-copy">
          We’re so excited to see everyone all dressed up! To help us create
          the beautiful, cinematic look we’ve been dreaming of, we’d love for
          you to join us in our wedding theme.
        </p>

        <div>
          <h3 className="inv-heading">Ninong</h3>
          <p className="inv-copy mt-2">We’d love to see you in formal attire.</p>
        </div>

        <div>
          <h3 className="inv-heading">Ninang</h3>
          <p className="inv-copy mt-2">
            We invite you to wear a formal gown in any shade from our color
            palette, whether you feel like a soft glow in gold or a bold moment
            in deep wine.
          </p>
        </div>
      </div>

      <div className="inv-card">
        <ul aria-label="Wedding color palette" className="mb-6 flex justify-center -space-x-4 sm:-space-x-6">
          {palette.map(([name, color]) => (
            <li
              key={name}
              title={name}
              className="size-12 rounded-full sm:size-20"
              style={{ backgroundColor: color }}
            >
              <span className="sr-only">{name}</span>
            </li>
          ))}
        </ul>

        <h3 className="inv-heading">A Little Favor</h3>
        <p className="inv-copy mt-3">
          To keep our photos looking cohesive and extra special, we kindly ask
          that you stick to the shades in our palette and save the white,
          off-white, and solid black tones for the wedding party. We can’t wait
          to see you all looking your best!
        </p>

        <div className="mx-auto mt-5 flex w-full max-w-[28rem] items-end justify-center mix-blend-multiply">

          {/* Woman */}
          <img
            src={woman}
            alt="Woman wearing a burgundy formal gown"
            loading="lazy"
            className="relative z-10 -mr-[3%] w-[28%] object-contain"
          />

          {/* Man */}
          <img
            src={man}
            alt="Man wearing a cream formal barong"
            loading="lazy"
            className="relative z-20 -mr-[2%] w-[23%] object-contain"
          />

          {/* Couple */}
          <img
            src={couple}
            alt="Couple wearing wedding formal attire"
            loading="lazy"
            className="relative z-10 w-[45%] object-contain"
          />

        </div>
      </div>
    </section>
  )
}