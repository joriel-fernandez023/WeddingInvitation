import type { ReactNode } from 'react'

function ReminderIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-5 size-14 text-[#ad894a] sm:size-20"
    >
      {children}
    </svg>
  )
}

export default function ReminderSection() {
  return (
    <section aria-labelledby="reminder-title" className="inv-section">

      <div className="inv-card">
        <p className="inv-script mb-6 text-[clamp(2.8rem,6vw,5rem)]">
          Gentle Reminders
        </p>

        <ReminderIcon>
          <circle cx="24" cy="24" r="21" />
          <rect x="17" y="10" width="14" height="28" rx="2" />
          <path d="M21 13h6 M22 34h4 M9 39l30-30" />
        </ReminderIcon>

        <h3 className="inv-heading">Unplugged Ceremony</h3>
        <p className="inv-copy mt-4">
          We invite you to be fully present with us. Please keep your devices
          silenced and tucked away until we are pronounced husband and wife.
          We promise to share our professional photos with you soon!
        </p>
      </div>

      <div className="inv-card space-y-10">
        <div>
          <ReminderIcon>
            <path d="M11 32h26c-4-4-5-7-5-14a8 8 0 0 0-16 0c0 7-1 10-5 14Z" />
            <path d="M21 36a3 3 0 0 0 6 0 M10 11l-3 5 M38 11l3 5" />
          </ReminderIcon>

          <h3 className="sr-only">Children at the wedding</h3>
          <p className="inv-copy">
            As much as we’d love to invite all your children, we can only
            accommodate those involved in the wedding and the children of
            immediate family members.
          </p>
        </div>

        <div>
          <ReminderIcon>
            <rect x="7" y="17" width="34" height="8" rx="1" />
            <path d="M10 25v16h28V25 M24 17v24" />
            <path d="M24 17c-13 0-15-10-9-10 5 0 9 10 9 10Zm0 0c13 0 15-10 9-10-5 0-9 10-9 10Z" />
          </ReminderIcon>

          <h3 className="sr-only">A note on gifts</h3>
          <p className="inv-copy">
            As love and commitment are what the day is all about, your
            presence is the one thing we cannot celebrate without. However,
            if you are thinking of giving a gift to help us on our way, a
            monetary gift for our future would be a delightful blessing.
          </p>
        </div>
      </div>
    </section>
  )
}