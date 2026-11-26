const rsvpUrl = ''

export default function RSVPSection() {
  return (
    <section id="rsvp" aria-labelledby="rsvp-title" className="inv-section">
      <div
        className="inv-card bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgb(255 251 244 / 80%), rgb(255 251 244 / 80%)), url("${import.meta.env.BASE_URL}images/BgSetting.png")`,
        }}
      >
        <h2 id="rsvp-title" className="inv-heading text-[clamp(2.7rem,6vw,5.5rem)]">
          RSVP
        </h2>

        <p className="inv-copy mt-2 font-bold">
          We can’t wait to celebrate with you!
        </p>

        <div className="my-7 space-y-5">
          <p className="inv-copy">
            To help us prepare your seat and plate, please let us know if you
            can join us by{' '}
            <time dateTime="2026-12-15" className="font-semibold">
              December 28, 2026
            </time>.
          </p>

          <p className="inv-copy">
            To keep our celebration cozy and personal, we are only able to
            accommodate the guests named on your invitation.
          </p>

          <p className="inv-copy">
            We truly appreciate your understanding and can’t wait to share
            this special day with you!
          </p>
        </div>

        {rsvpUrl ? (
          <a
            href={rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inv-button min-w-36"
          >
            RSVP
          </a>
        ) : (
          <div className="mt-8 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSegwPDboEgOawim4KoGdxtlSypQquONIYQAZKoFt2WLrDIoTQ/viewform?usp=sharing&ouid=107485882207941034467"
              target="_blank"
              rel="noopener noreferrer"
              className="
      inline-flex min-h-12 items-center justify-center rounded-full
      bg-[#64252b] px-10 py-3 font-serif text-xl tracking-wide text-white
      transition-colors hover:bg-[#80444f]
      focus-visible:outline-2 focus-visible:outline-offset-4
      focus-visible:outline-[#64252b]
    "
            >
              RSVP Now
              <span className="sr-only"> via Google Forms (opens in a new tab)</span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}