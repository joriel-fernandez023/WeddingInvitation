import { useLayoutEffect } from 'react'

import InvitationCover from './components/sections/InvitationCover'
import WelcomeSection from './components/sections/WelcomeSection'
import SaveTheDateSection from './components/sections/SaveTheDateSection'
import LocationSection from './components/sections/LocationSection'
import EntourageSection from './components/sections/EntourageSection'
import DressCodeSection from './components/sections/DressCodeSection'
import ReminderSection from './components/sections/ReminderSection'
import WeddingGallery from './components/sections/WeddingGallery'
import WithLoveSection from './components/sections/WithLoveSection'
import RSVPSection from './components/sections/RSVPSection'
import ScrollReveal from './components/ScrollReveal'
import InvitationHeader from './components/InvitationHeader'

export default function App() {
  useLayoutEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ block: 'start' })
      }
    }
  }, [])

  return (
    <>
      <InvitationHeader />

      <main id="invitation">
        <section
          id="group-home"
          aria-label="Home"
          tabIndex={-1}
          className="scroll-mt-16"
        >
          <ScrollReveal>
            <InvitationCover />
            <WelcomeSection />
          </ScrollReveal>
        </section>

        <section
          id="group-details"
          aria-label="Wedding details"
          tabIndex={-1}
          className="scroll-mt-16"
        >
          <ScrollReveal>
            <SaveTheDateSection />
            <LocationSection />
          </ScrollReveal>
        </section>

        <section
          id="group-entourage"
          aria-label="Entourage"
          tabIndex={-1}
          className="scroll-mt-16"
        >
          <ScrollReveal>
            <EntourageSection />
          </ScrollReveal>
        </section>

        <section
          id="group-dress-code"
          aria-label="Dress code"
          tabIndex={-1}
          className="scroll-mt-16"
        >
          <ScrollReveal>
            <DressCodeSection />
          </ScrollReveal>
        </section>

        {/* Reminders */}
        <section
          id="group-reminders"
          aria-label="Wedding reminders"
          tabIndex={-1}
          className="scroll-mt-16"
        >
          <ScrollReveal>
            <ReminderSection />
          </ScrollReveal>
        </section>

        {/* Prenup */}
        <section
          id="group-prenup"
          aria-label="Prenup Gallery"
          tabIndex={-1}
          className="scroll-mt-16"
        >
          <ScrollReveal>
            <WeddingGallery />
            <WithLoveSection />
          </ScrollReveal>
        </section>

        <section
          id="group-rsvp"
          aria-label="RSVP"
          tabIndex={-1}
          className="scroll-mt-16"
        >
          <ScrollReveal>
            <RSVPSection />
          </ScrollReveal>
        </section>
      </main>
    </>
  )
}