

export default function WelcomeSection() {
  return (
    <section id="welcome" aria-labelledby="welcome-title" className="inv-section">
      <h2 id="welcome-title" className="inv-section-title">Welcome</h2>

      <div className="rounded-xl bg-[#853D49] px-5 py-10 text-center text-[#fff8ea] sm:px-12 sm:py-16">
        <hr className="mx-auto mb-7 w-1/3 border-[#fff4df]/80" />

        <div className="mx-auto max-w-[48ch] space-y-6 font-serif text-[clamp(1.15rem,2.3vw,2rem)] leading-snug">
          <p>
            Welcome to our enchanting wedding website, where love and dreams
            intertwine!
          </p>

          <p>
            Join us, along with our beloved families, as we celebrate our
            profound love and union. Explore the captivating narrative of our
            journey and discover the delightful details of our upcoming wedding.
          </p>

          <p>
            Your presence is a cherished gift, and we would be honored to see
            our special day through your eyes.
          </p>
        </div>
      </div>
    </section>
  )
}