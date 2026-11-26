import { useLayoutEffect, useRef, type ReactNode } from 'react'

const revealStyles = `
  [data-inv-reveal] {
    transition:
      opacity 650ms ease,
      translate 750ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  [data-inv-reveal="above"] {
    opacity: 0;
    translate: 0 -28px;
  }

  [data-inv-reveal="below"] {
    opacity: 0;
    translate: 0 28px;
  }

  [data-inv-reveal="top-edge"] {
    opacity: 0.7;
    translate: 0 -12px;
  }

  [data-inv-reveal="bottom-edge"] {
    opacity: 0.7;
    translate: 0 12px;
  }

  [data-inv-reveal="visible"] {
    opacity: 1;
    translate: 0 0;
    transition-delay: 180ms;
  }

  [data-inv-reveal]:focus-within {
    opacity: 1;
    translate: 0 0;
    transition-delay: 0ms;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-inv-reveal] {
      opacity: 1;
      translate: none;
      transition: none;
    }
  }
`

type ScrollRevealProps = {
  children: ReactNode
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const groupSelector = '[data-reveal-group], [data-reveal-panel], .inv-card'
    const targets: HTMLElement[] = []

    for (const section of Array.from(root.children)) {
      if (!(section instanceof HTMLElement)) continue

      const groups = Array.from(
        section.querySelectorAll<HTMLElement>(groupSelector)
      )

      if (groups.length === 0) {
        targets.push(section)
        continue
      }

      // Animate each group together with its text, images, and buttons.
      // Walk through layout wrappers so standalone headings also reveal.
      function collect(element: HTMLElement) {
        if (element.matches(groupSelector) || !element.querySelector(groupSelector)) {
          targets.push(element)
          return
        }

        for (const child of Array.from(element.children)) {
          if (child instanceof HTMLElement) collect(child)
        }
      }

      collect(section)
    }

    let frame = 0
    let disposed = false

    function update() {
      frame = 0
      if (disposed) return

      const height = window.innerHeight
      const edge = Math.min(height * 0.12, 100)

      // Remove the current animated offset from the measurement so the
      // animation itself cannot move an element across its own threshold.
      const states = targets.map(element => {
        const rect = element.getBoundingClientRect()
        const translate = getComputedStyle(element).translate
        const offsetY = parseFloat(translate.split(' ')[1] || '0') || 0
        const top = rect.top - offsetY
        const bottom = rect.bottom - offsetY

        if (bottom <= 0) return 'above'
        if (top >= height) return 'below'
        if (bottom <= edge) return 'top-edge'
        if (top >= height - edge) return 'bottom-edge'
        return 'visible'
      })

      targets.forEach((element, index) => {
        if (element.dataset.invReveal !== states[index]) {
          element.dataset.invReveal = states[index]
        }
      })
    }

    function scheduleUpdate() {
      if (!frame && !disposed) frame = requestAnimationFrame(update)
    }

    // Give the newly mounted cover a starting position before revealing it.
    for (const target of targets) {
      target.dataset.invReveal = 'below'
    }

    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(update)
    })

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    root.addEventListener('load', scheduleUpdate, true)

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      root.removeEventListener('load', scheduleUpdate, true)

      for (const target of targets) {
        delete target.dataset.invReveal
      }
    }
  }, [children])

  return (
    <>
      <style>{revealStyles}</style>
      <div ref={rootRef} className="contents">
        {children}
      </div>
    </>
  )
}