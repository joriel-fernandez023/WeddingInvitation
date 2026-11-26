import garden from '../../assets/garden.webp'

export default function InvitationCover() {
  return (
    <header className="relative isolate grid min-h-[65svh] overflow-hidden bg-[#431b27] sm:min-h-[90svh]">
      <img
        src={garden}
        alt="Ralph and Janice standing together in the garden"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-[center_bottom]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-[#351522]/30 via-transparent to-[#351522]/85"
      />

      <h1 className="sr-only">Ralph and Janice’s Wedding</h1>

      <div className="self-end px-4 pb-8 text-center text-white sm:pb-12">
        <time
          dateTime="2026-12-28"
          className="font-serif text-sm tracking-[0.25em] uppercase sm:text-lg"
        >
          December 28, 2026
        </time>

        <a
          href="#welcome"
          aria-label="Continue to the welcome message"
          className="mx-auto mt-2 grid size-11 place-items-center text-2xl"
        >
          ↓
        </a>
      </div>
    </header>
  )
}