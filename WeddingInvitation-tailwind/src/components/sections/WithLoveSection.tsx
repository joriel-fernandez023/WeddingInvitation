export default function WithLoveSection() {
  return (
    <section aria-labelledby="love-title" className="inv-section">

      <div className="inv-card">
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          className="mx-auto mb-5 size-16 text-[#a87942]"
        >
          <path d="M24 2v10 M19 6h10 M14 22l10-10 10 10v22H14z" />
          <path d="M14 25 5 30v14h9 M34 25l9 5v14h-9 M20 44V32a4 4 0 0 1 8 0v12" />
          <circle cx="24" cy="23" r="2" />
        </svg>

        <p className="inv-copy">
          The procession will start at exactly{' '}
          <time dateTime="2026-12-28T10:30:00+08:00">10:30 AM</time>, so
          please arrive on time to allow our coordinators to organize and
          brief the entourage and guests.
        </p>

        <h3 className="inv-heading mt-8 uppercase">With Love</h3>

        <p className="inv-copy mt-4">
          Each of you has played an invaluable role in our journey, from the
          quiet moments spent dreaming of our future to the seasons that taught
          us the true meaning of support.
        </p>

        <p className="inv-copy mt-5">
          This day is as much a celebration of you as it is of us. We would
          not be who we are today without your unwavering love and friendship.
          We look forward to having our dearest family and friends gathered
          together as we begin our forever. Thank you for being a cherished
          part of our story.
        </p>
      </div>

      <div className="inv-card">
        <p className="inv-copy">We cannot wait to celebrate with you!</p>
        <p className="inv-script mt-4 text-[clamp(2.8rem,6vw,5rem)]">
          Ralph &amp; Janice
        </p>
      </div>
    </section>
  )
}