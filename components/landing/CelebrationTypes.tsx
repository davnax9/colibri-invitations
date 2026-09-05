import Link from "next/link"

const celebrations = [
  {
    icon: "💍",
    title: "Bodas",
    description:
      "Invitaciones elegantes para celebrar el comienzo de una nueva historia.",
    href: "#diseños",
  },
  {
    icon: "✨",
    title: "XV años",
    description:
      "Una invitación tan especial como esta nueva etapa de tu vida.",
    href: "#diseños",
  },
  {
    icon: "✝",
    title: "Bautizos",
    description:
      "Celebra un momento lleno de amor, familia y fe.",
    href: "#otras-celebraciones",
  },
  {
    icon: "🕊",
    title: "Primeras comuniones",
    description:
      "Una celebración especial que merece ser recordada.",
    href: "#otras-celebraciones",
  },
]

export default function CelebrationTypes() {
  return (
    <section className="border-b border-[#E5E9E5] bg-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* ENCABEZADO */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">
            Momentos que celebramos
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">
            Una invitación para cada ocasión
          </h2>

          <p className="mt-4 leading-7 text-[#687A72]">
            Diseñamos experiencias digitales para acompañar
            los momentos más importantes de tu vida.
          </p>
        </div>

        {/* CELEBRACIONES */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {celebrations.map((celebration) => (
            <Link
              key={celebration.title}
              href={celebration.href}
              className="group rounded-3xl border border-[#E5E9E5] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2F5D50]/30 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F5D50]/10 text-2xl transition group-hover:scale-105">
                {celebration.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#263832]">
                {celebration.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687A72]">
                {celebration.description}
              </p>

              <span className="mt-5 inline-flex text-sm font-semibold text-[#2F5D50]">
                Conocer diseños
                <span className="ml-1 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}