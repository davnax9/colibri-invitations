const faqs = [
  {
    question: "¿Puedo personalizar mi invitación?",
    answer: "Sí. Puedes agregar y personalizar los nombres, fotografías, fecha, horarios, ubicaciones, música y otros detalles de tu evento.",
  },
  {
    question: "¿Cuanto tiempo dura disponible mi invitación?",
    answer: "Tu invitación estara disponible a partir de que realices el pago y personalices tu evento hasta 5 dias despues de que se llevo a cabo tu fiesta.",
  },
  {
    question: "¿La invitación funciona en celular?",
    answer: "Sí. Nuestras invitaciones están diseñadas para visualizarse correctamente desde celulares, tablets y computadoras.",
  },
  {
    question: "¿Cómo comparto mi invitación?",
    answer: "Cuentas con un panel de administracion de invitaciones en donde administras tus invitados y desde ahi mismo envias las invitaciones de forma personalizada.",
  },
  {
    question: "¿Puedo saber quién confirmó su asistencia?",
    answer: "Sí. Podrás consultar desde tu administración qué invitados han confirmado su asistencia y cuáles han indicado que no podrán asistir.",
  },
  {
    question: "¿Mis invitados necesitan instalar una aplicación?",
    answer: "No. Tus invitados solamente necesitan abrir el enlace de la invitación desde su navegador.",
  },
  {
    question: "¿El pago es mensual?",
    answer: "No. Los precios mostrados corresponden a un pago único. El precio final puede variar dependiendo de las características y personalización solicitadas.",
  },
  {
    question: "En caso de una duda, ¿Puedo tener asistencia técnica?",
    answer: "Sí. Puedes puedes contactarnos en cualquier momento vía whatsapp y con gusto te apoyamos con el diseño de tu invitación para que sea tal como la soñaste.",
  }
]

export default function FaqSection() {
  return (
    <section className="border-t border-[#E5E9E5] bg-[#FAF8F3]">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">

        {/* ENCABEZADO */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">
            Preguntas frecuentes
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">
            Todo lo que necesitas saber
          </h2>

          <p className="mt-4 leading-7 text-[#687A72]">
            Resolvemos algunas de las preguntas más comunes antes de crear
            tu invitación.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[#E5E9E5] bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-[#263832] sm:p-6 sm:text-base">
                <span>{faq.question}</span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2F5D50]/10 text-[#2F5D50] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="text-sm leading-6 text-[#687A72]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}