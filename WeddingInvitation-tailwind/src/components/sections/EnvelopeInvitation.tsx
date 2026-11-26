import { useEffect, useId, useState } from 'react'

type EnvelopeInvitationProps = {
  onOpen: () => void
}

type Stage = 'closed' | 'opening' | 'open'

const openingDuration = 1500

function Rose({ x, y, size, color }: {
  x: number
  y: number
  size: number
  color: string
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      {Array.from({ length: 9 }, (_, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-8"
          rx="10"
          ry="12"
          fill={color}
          stroke="#612332"
          strokeOpacity=".25"
          strokeWidth=".8"
          transform={`rotate(${i * 40})`}
        />
      ))}
      <path
        d="M-9 2C-13-9 2-14 8-6C14 2 6 11-3 8C-10 6-8-3-2-5C4-7 8 0 4 3C1 6-3 3-2 0"
        fill="none"
        stroke="#602833"
        strokeOpacity=".48"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </g>
  )
}

function Sprig({ x, y, angle = 0, size = 1 }: {
  x: number
  y: number
  angle?: number
  size?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${size})`}>
      <path
        d="M0 0Q-9-36 0-78"
        fill="none"
        stroke="#7e8861"
        strokeWidth="2"
      />
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(-3 ${-i * 16})`}>
          <path d="M0-6Q-19-7-18-23Q-4-22 0-6Z" fill="#849376" />
          <path d="M0-13Q3-29 16-31Q17-18 0-13Z" fill="#b0b79a" />
        </g>
      ))}
    </g>
  )
}

function IvoryBlossom({ x, y, size = 1, angle = 0 }: {
  x: number
  y: number
  size?: number
  angle?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${size})`}>
      {[0, 72, 144, 216, 288].map(rotation => (
        <path
          key={rotation}
          d="M0 2C-3-1-8-3-7-8C-6-12-2-12 0-10C3-13 7-11 7-8C8-4 4-1 0 2Z"
          transform={`rotate(${rotation})`}
          fill="#fff9e9"
          stroke="#d3c9ae"
          strokeWidth=".7"
        />
      ))}
      <circle r="2.8" fill="#c4a269" />
      <circle cx="-.7" cy="-.7" r="1" fill="#f7dfa2" />
    </g>
  )
}

function BridalBouquet() {
  return (
    <g aria-hidden="true">
      {/* Foliage spreads around the roses and spills below the envelope. */}
      <Sprig x={165} y={443} angle={-56} size={1.04} />
      <Sprig x={181} y={420} angle={-20} size={1.06} />
      <Sprig x={197} y={424} angle={24} size={0.92} />
      <Sprig x={144} y={465} angle={-108} size={0.85} />
      <Sprig x={154} y={481} angle={-152} size={0.97} />
      <Sprig x={184} y={481} angle={168} size={0.9} />

      {/* Two loose satin ribbon tails taper in different directions. */}
      <path
        d="M184 464C197 496 192 529 170 566L182 558L185 571
           C204 536 211 493 194 462Z"
        fill="#c98a96"
      />
      <path
        d="M189 470C205 500 203 542 225 558
           C234 565 244 564 253 559
           C237 560 225 547 220 530
           C214 507 210 481 198 465Z"
        fill="#edc3bc"
      />
      <path
        d="M196 480C205 504 204 526 216 545"
        fill="none"
        stroke="#f6dcd2"
        strokeWidth="2"
      />

      {/* Dark garden roses anchor the bouquet; pale blooms frame them. */}
      <Rose x={173} y={398} size={1.05} color="#883149" />
      <Rose x={143} y={421} size={0.91} color="#f2dfc2" />
      <Rose x={205} y={419} size={1.18} color="#edbdc0" />
      <Rose x={173} y={435} size={0.78} color="#f7ebd8" />
      <Rose x={154} y={459} size={1.13} color="#8e324f" />
      <Rose x={195} y={459} size={0.91} color="#c77c89" />
      <Rose x={139} y={486} size={0.77} color="#e9c8b8" />

      <IvoryBlossom x={124} y={444} size={0.55} />
      <IvoryBlossom x={121} y={454} size={0.37} angle={22} />
      <IvoryBlossom x={210} y={446} size={0.53} angle={14} />
      <IvoryBlossom x={151} y={504} size={0.42} />
    </g>
  )
}

function WhiteFloralSpray() {
  return (
    <g aria-hidden="true">
      <g fill="none" stroke="#889174" strokeLinecap="round">
        <path d="M600 348Q612 258 559 177Q546 153 525 140" strokeWidth="3" />
        <path d="M610 367Q663 290 693 273" strokeWidth="2.5" />
        <path d="M626 335Q695 376 714 472Q720 503 710 527" strokeWidth="3" />
        <path d="M655 367Q695 357 719 369" strokeWidth="1.8" />
      </g>

      <Sprig x={589} y={243} angle={-31} size={0.9} />
      <Sprig x={637} y={326} angle={49} size={0.85} />
      <Sprig x={678} y={385} angle={70} size={0.72} />
      <Sprig x={705} y={448} angle={160} size={0.78} />

      <IvoryBlossom x={533} y={148} size={0.46} angle={-24} />
      <IvoryBlossom x={550} y={165} size={0.65} angle={9} />
      <IvoryBlossom x={562} y={184} size={0.94} />
      <IvoryBlossom x={581} y={204} size={0.74} angle={28} />
      <IvoryBlossom x={666} y={299} size={0.8} />
      <IvoryBlossom x={688} y={280} size={0.56} angle={-18} />
      <IvoryBlossom x={661} y={357} size={1.05} angle={8} />
      <IvoryBlossom x={683} y={371} size={1.18} angle={-20} />
      <IvoryBlossom x={695} y={394} size={0.92} angle={15} />
      <IvoryBlossom x={707} y={417} size={1.02} />
      <IvoryBlossom x={709} y={445} size={0.78} angle={24} />
      <IvoryBlossom x={715} y={470} size={0.65} angle={-12} />
      <IvoryBlossom x={715} y={496} size={0.48} />
      <IvoryBlossom x={710} y={520} size={0.32} angle={16} />
    </g>
  )
}


export default function EnvelopeInvitation({
  onOpen,
}: EnvelopeInvitationProps) {
  const [stage, setStage] = useState<Stage>('closed')
  const id = useId().replace(/:/g, '')
  const lifted = stage !== 'closed'

  // Release the second tap even if the browser skips a transition event.
  useEffect(() => {
    if (stage !== 'opening') return

    const timer = window.setTimeout(() => setStage('open'), openingDuration)
    return () => window.clearTimeout(timer)
  }, [stage])

  function handleTap() {
    if (stage === 'open') {
      onOpen()
      return
    }

    if (stage === 'closed') {
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      setStage(reducedMotion ? 'open' : 'opening')
    }
  }

  const flap = 'M170 222H630L419 378Q400 392 381 378Z'
  const scriptFont = '"Pinyon Script", "Edwardian Script ITC", cursive'

  return (
    <main className="grid min-h-svh place-items-center overflow-hidden bg-[#5b1f23] px-3 py-6 text-[#fff8ef]">
      <button
        type="button"
        onClick={handleTap}
        aria-disabled={stage === 'opening'}
        aria-label={
          stage === 'open'
            ? 'Enter Ralph and Janice’s wedding invitation'
            : 'Open the wedding letter from Ralph and Janice'
        }
        className="flex w-full max-w-5xl cursor-pointer touch-manipulation flex-col items-center rounded-md bg-transparent text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4c486]"
      >
        <span className="font-serif text-xs font-bold uppercase sm:text-base">
          A love letter from
        </span>

        <span
          className="mt-2 text-[clamp(3.2rem,8vw,7.5rem)] leading-[1.12]"
          style={{ fontFamily: scriptFont }}
        >
          Ralph &amp; Janice
        </span>

        <span
          className={`mt-2 font-serif text-xs font-semibold uppercase transition-opacity duration-300 sm:text-base ${
            lifted ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden={lifted}
        >
          Together with their families
        </span>

        <svg
          viewBox="25 35 750 590"
          aria-hidden="true"
          focusable="false"
          className="block w-full max-w-[min(53rem,86svh)] overflow-visible"
        >
          <defs>
            <linearGradient id={`${id}-paper`} x2=".8" y2="1">
              <stop stopColor="#792c38" />
              <stop offset=".55" stopColor="#591923" />
              <stop offset="1" stopColor="#370f18" />
            </linearGradient>

            <linearGradient id={`${id}-flap`} x2=".25" y2="1">
              <stop stopColor="#702630" />
              <stop offset="1" stopColor="#45111a" />
            </linearGradient>

            <linearGradient id={`${id}-gold`} x2="1" y2="1">
              <stop stopColor="#94713a" />
              <stop offset=".28" stopColor="#efdaa0" />
              <stop offset=".55" stopColor="#b39351" />
              <stop offset=".8" stopColor="#d6bb7b" />
              <stop offset="1" stopColor="#876333" />
            </linearGradient>

            <pattern
              id={`${id}-grain`}
              width="38"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M-3 28Q9 25 12 16T29 0M12 16Q16 20 26 17M3 5Q8 8 9 13"
                fill="none"
                stroke="#df9d96"
                strokeWidth=".8"
                opacity=".15"
              />
            </pattern>

            <g id={`${id}-seal`}>
              <path
                d="M-30-9Q-28-23-12-26Q0-30 12-26Q28-25 32-10Q38 3 30 15Q23 27 7 27Q-10 31-23 22Q-36 14-34 1Z"
                fill={`url(#${id}-gold)`}
                stroke="#856436"
                strokeWidth="2"
              />
              <ellipse
                rx="25"
                ry="21"
                fill="none"
                stroke="#876936"
                strokeWidth="1.5"
              />
              <text
                y="6"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="17"
                fill="#63491f"
              >
                RJ
              </text>
            </g>
          </defs>

          {/* Ivory flowers and foliage behind the right side of the envelope. */}
          <g>
            <Sprig x={594} y={254} angle={-35} size={1.25} />
            <Sprig x={633} y={350} angle={28} size={1.4} />
            <Sprig x={663} y={415} angle={46} size={1.05} />
            <Sprig x={670} y={431} angle={164} size={0.95} />
            <Rose x={625} y={280} size={0.83} color="#eee9d9" />
            <Rose x={652} y={317} size={1.02} color="#fffaed" />
            <Rose x={670} y={360} size={0.85} color="#e3dfce" />
            <Rose x={680} y={399} size={0.68} color="#fff9e7" />
            <Rose x={686} y={441} size={0.53} color="#eee8d8" />
          </g>

          {/* Back of the envelope and the pale lining of the lifted flap. */}
          <rect x="170" y="222" width="460" height="315" fill="#391118" />

          <WhiteFloralSpray />

          {/* The pocket covers the lower part of the card as it rises. */}
          <g
            className="transition-[transform,opacity] delay-[480ms] duration-[850ms] ease-out motion-reduce:transition-none"
            style={{
              transform: `translateY(${lifted ? 0 : 143}px)`,
              opacity: lifted ? 1 : 0,
            }}
          >
            <rect x="215" y="100" width="370" height="280" fill="#f2ebe5" />
            <rect
              x="228"
              y="113"
              width="344"
              height="254"
              fill="none"
              stroke="#9d875e"
            />

            <g fill="#64232a" textAnchor="middle">
              <text x="400" y="157" fontSize="19">❦</text>
              <text
                x="400"
                y="187"
                fontFamily="Georgia, serif"
                fontSize="14"
                fontWeight="bold"
              >
                THE WEDDING OF
              </text>
              <text x="400" y="232" fontFamily={scriptFont} fontSize="44">
                Ralph &amp; Janice
              </text>
            </g>
          </g>

          {/* The V-shaped pocket stays in front of the invitation letter. */}
          <path
            d="M170 222L379 380Q400 396 421 380L630 222V537H170Z"
            fill={`url(#${id}-paper)`}
          />
          <path
            d="M170 222L379 380Q400 396 421 380L630 222V537H170Z"
            fill={`url(#${id}-grain)`}
          />
          <path
            d="M171 536L350 360M629 536L450 360"
            fill="none"
            stroke="#350e17"
            strokeWidth="2"
            opacity=".65"
          />

          {/* The triangular flap folds upward around the envelope opening. */}
          <g
            className="transition-transform duration-[480ms] ease-in-out motion-reduce:transition-none"
            style={{
              transformOrigin: '400px 222px',
              transform: `scaleY(${lifted ? 0 : 1})`,
            }}
          >
            <path d={flap} fill={`url(#${id}-flap)`} stroke="#40121b" />
            <path d={flap} fill={`url(#${id}-grain)`} />
          </g>

          <g
            className="transition-transform duration-700 ease-in-out motion-reduce:transition-none"
            style={{ transform: `translate(400px, ${lifted ? 392 : 381}px)` }}
          >
            <use href={`#${id}-seal`} />
          </g>

          {/* Burgundy and blush bouquet in front of the lower-left corner. */}
          <BridalBouquet />
        </svg>

        <span className="font-serif text-sm font-bold uppercase tracking-[0.12em] sm:text-base">
          {stage === 'closed'
            ? 'Tap to open'
            : stage === 'opening'
              ? 'Opening letter…'
              : 'Enter invitation'}
        </span>

        <span aria-live="polite" className="sr-only">
          {stage === 'open'
            ? 'The wedding of Ralph and Janice. Tap again to enter the invitation.'
            : ''}
        </span>
      </button>
    </main>
  )
}