export default function TrustSection() {
  const benefits = [
    {
      icon: "📱",
      title: "100% digital",
      text: "Tu invitación está disponible en línea y lista para compartir.",
    },
    {
      icon: "📲",
      title: "Diseñada para celulares",
      text: "Tus invitados podrán verla cómodamente desde su teléfono.",
    },
    {
      icon: "💬",
      title: "Comparte por WhatsApp",
      text: "Envía el enlace de tu invitación de forma rápida y sencilla.",
    },
    {
      icon: "🚫",
      title: "Sin aplicaciones",
      text: "Tus invitados no necesitan instalar ninguna aplicación.",
    },
  ]

  return (
    <section className="border-y border-[#E5E9E5] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* ENCABEZADO */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">Pensada para ti y tus invitados</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">Una experiencia sencilla desde el primer momento.</h2>
          <p className="mt-4 leading-7 text-[#687A72]">Todo lo que necesitas para compartir tu celebración de una manera elegante, sencilla y accesible.</p>
        </div>
        {/* BENEFICIOS */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-[#E5E9E5] bg-[#FAF8F3] p-4 text-center sm:p-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F5D50]/10 text-xl">
                {benefit.icon}
              </div>
              <h3 className="mt-4 text-sm font-bold text-[#263832] sm:text-base">{benefit.title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#687A72] sm:text-sm sm:leading-6">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}