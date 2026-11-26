import entouragePic from '../../assets/EntouragePic.jpg'
import entourageCard from '../../assets/EntourageCard.jpg'

const principalSponsors = [
  [
    'Benjamin Villa', 'Angel Orcemeña', 'Norbing Delos Reyes', 'Rey Espayos',
    'Ely Andresio', 'Nicolas Salan', 'Danilo Salan', 'Tiburcio Barrios',
    'Ramonito Linco', 'Ananias Danoog',
  ],
  [
    'Marites Quesada', 'Ma Fe Bernesto', 'Analiza Lucero', 'Rosally Fartisana',
    'Mae Valente', 'Lea Sanao', 'Pelegia Villeta', 'Robemie Limsiaco',
    'Verma Joguillon', 'Jeneve Binaloga', 'Lucia Garcia', 'Rowena Parcia',
    'Marivic Delos Reyes', 'Sandra Lucatin', 'Crisaneth Duran',
  ],
]

const pairClass = 'grid gap-7 sm:grid-cols-2 sm:gap-8'
const roleHeading = 'mb-3 font-serif text-[clamp(1.25rem,2.4vw,2.1rem)] font-semibold leading-tight uppercase'

function Names({ names }: { names: string[] }) {
  return (
    <ul className="space-y-1 text-[clamp(.98rem,1.45vw,1.25rem)] leading-relaxed text-[#403634]">
      {names.map(name => <li key={name}>{name}</li>)}
    </ul>
  )
}

function Role({ title, names }: { title: string; names: string[] }) {
  return (
    <div>
      <h3 className={roleHeading}>{title}</h3>
      <Names names={names} />
    </div>
  )
}

export default function EntourageSection() {
  return (
    <section aria-labelledby="entourage-title" className="inv-section">

      <div className="inv-card !p-[3%]">
        <div className="relative mx-auto flex aspect-[16/9] w-full max-w-6xl items-center justify-center">

          {/* Background Entourage Card */}
          <img
            src={entourageCard}
            alt="Entourage decorative background card"
            loading="lazy"
            className="absolute left-1/2 top-1/2 z-0 h-[96%] w-[84%] -translate-x-1/2 -translate-y-1/2 object-fill"
          />

          {/* Foreground Entourage Picture */}
          <img
            src={entouragePic}
            alt="Ralph and Janice wedding photograph"
            loading="lazy"
            className="absolute left-1/2 top-1/2 z-10 h-[89%] w-full -translate-x-1/2 -translate-y-1/2 object-cover grayscale"
          />

          {/* Entourage Text - Front Layer */}
          <p className="inv-script absolute inset-x-0 top-[7%] z-20 text-center text-[clamp(2.8rem,8vw,7rem)] text-[#76232e]">
            Entourage
          </p>

        </div>
      </div>

      <div className="inv-card">
        <div className={pairClass}>
          <Role title="Parents of the Groom" names={['Renestor Flores Sr.', 'Femy Flores']} />
          <Role title="Parents of the Bride" names={['Marlo Salan', 'Haydee Salan']} />
        </div>

        <h3 className={`${roleHeading} mt-10`}>Principal Sponsors</h3>
        <div className="mx-auto grid max-w-3xl gap-x-8 sm:grid-cols-2 sm:[&>:first-child]:text-right sm:[&>:last-child]:text-left">
          {principalSponsors.map(names => <Names key={names[0]} names={names} />)}
        </div>
      </div>

      <div className="inv-card space-y-9">
        <div className={pairClass}>
          <Role title="Best Man" names={['John Mark Occianas']} />
          <Role title="Maid of Honor" names={['Lyneth Negosa']} />
        </div>

        <div className={pairClass}>
          <Role
            title="Groomsmen"
            names={['Nimar Salan', 'Adrian Anthony Celis', 'Jenard Brasileño', 'Andrie Celis', 'Niko Salan', 'Bernard Brasileño Jr.']}
          />
          <Role
            title="Bridesmaids"
            names={['May Salan', 'Mia Salan', 'Bella Celiz', 'Fritz Niña Joy Flores', 'Marian Varela', 'Hannah Bea Sanao']}
          />
        </div>
      </div>

      <div className="inv-card space-y-8">
        <h3 className="inv-heading uppercase">Secondary Sponsors</h3>

        <div className={pairClass}>
          <Role title="Candle" names={['Gerard Brasileño', 'Angelita Brasileño']} />
          <Role title="Veil" names={['Norberto Nunay', 'Jeren Nunay']} />
        </div>

        <Role title="Cord" names={['Marvin Salan', 'Cecilian Salan']} />

        <div className={pairClass}>
          <Role title="Ring Bearer" names={['Christian James Salan']} />
          <Role title="Bible Bearer" names={['Xylle Fernando']} />
        </div>

        <Role title="Coin Bearer" names={['Carlos Jorge Laganosa']} />
      </div>

      <div className="inv-card">
        <Role
          title="Flower Girls"
          names={['Arriana Jane Salan', 'Taiyla Guillermo', 'Zia Faith Salan', 'Stiana Tabia']}
        />
      </div>
    </section>
  )
}