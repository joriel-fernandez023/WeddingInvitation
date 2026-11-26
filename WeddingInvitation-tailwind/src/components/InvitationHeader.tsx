
import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'details', label: 'Details' },
  { id: 'entourage', label: 'Entourage' },
  { id: 'dress-code', label: 'Dress Code' },
  { id: 'reminders', label: 'Reminders' },
  { id: 'prenup', label: 'Prenup' },
  { id: 'rsvp', label: 'RSVP' },
] as const

type GroupId = (typeof links)[number]['id']

export default function InvitationHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navigationTargetRef = useRef<GroupId | null>(null)

  const [activeGroup, setActiveGroup] = useState<GroupId>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const groups = links.map(link => ({
      id: link.id,
      element: document.getElementById(`group-${link.id}`),
    }))

    let frame = 0

    function updateActiveGroup() {
      frame = 0

      // Keep the clicked navigation item active
      // while the browser performs programmatic scrolling.
      if (navigationTargetRef.current) return

      const headerBottom =
        headerRef.current?.getBoundingClientRect().bottom ?? 0

      const readingLine = headerBottom + 24
      let current: GroupId = 'home'

      for (const group of groups) {
        if (
          group.element &&
          group.element.getBoundingClientRect().top <= readingLine
        ) {
          current = group.id
        }
      }

      setActiveGroup(current)
    }

    function scheduleUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveGroup)
      }
    }

    function finishNavigation() {
      navigationTargetRef.current = null
    }

    updateActiveGroup()

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('scrollend', finishNavigation)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('scrollend', finishNavigation)
    }
  }, [])

  function navigate(event: MouseEvent<HTMLAnchorElement>, id: GroupId) {
    event.preventDefault()

    const group = document.getElementById(`group-${id}`)
    if (!group) return

    setMenuOpen(false)

    // Immediately highlight the selected navigation item.
    setActiveGroup(id)
    navigationTargetRef.current = id

    group.focus({ preventScroll: true })

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    group.scrollIntoView({
      behavior: reducedMotion ? 'instant' : 'smooth',
      block: 'start',
    })

    // Handle browsers or situations where no scrolling is needed.
    if (reducedMotion) {
      navigationTargetRef.current = null
    }
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-[#e8d5d2] bg-[#fff9f6] text-[#64252b]"
      onKeyDown={event => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setMenuOpen(false)
        }
      }}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#group-home"
          onClick={event => navigate(event, 'home')}
          aria-label="Ralph and Janice, return to invitation cover"
          className="text-3xl leading-none"
          style={{ fontFamily: '"Pinyon Script", cursive' }}
        >
          Ralph &amp; Janice
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="invitation-nav"
          onClick={() => setMenuOpen(open => !open)}
          className="rounded-full border border-[#d9b9bd] px-4 py-2 text-sm font-semibold md:hidden"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="invitation-nav"
          aria-label="Invitation sections"
          className={[
            menuOpen ? 'flex' : 'hidden',
            'absolute inset-x-0 top-full flex-col border-b border-[#e8d5d2]',
            'bg-[#fff9f6] p-3 shadow-md',
            'md:static md:flex md:flex-row md:items-center md:gap-1',
            'md:border-0 md:bg-transparent md:p-0 md:shadow-none',
          ].join(' ')}
        >
          {links.map(link => (
            <a
              key={link.id}
              href={`#group-${link.id}`}
              onClick={event => navigate(event, link.id)}
              aria-current={
                activeGroup === link.id ? 'location' : undefined
              }
              className={[
                'rounded-full px-4 py-2.5 text-sm font-semibold transition-colors',
                'focus-visible:outline-2 focus-visible:outline-offset-2',
                activeGroup === link.id
                  ? 'bg-[#64252b] text-white'
                  : 'text-[#64252b] hover:bg-[#f1e3e1]',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
