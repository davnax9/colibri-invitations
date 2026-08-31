"use client"

import Image from "next/image"
import Link from "next/link"

type InvitationExample = {
    type: "BODA" | "XV"
    title: string
    description: string
    url: string
    image: string
    badge: string
}

const examples: InvitationExample[] = [
{
    type: "XV",
    title: "Bianca Elegante",
    description: "Una invitación elegante y delicada, pensada para celebrar una noche inolvidable.",
    url: "/invitacion/xv-bianca-elegante",
    image: "/ejemplos/xv-bianca-elegante.webp",
    badge: "XV Años",
    },
    {
    type: "XV",
    title: "Quinceaños Bianquita",
    description: "Un diseño moderno y especial para compartir todos los detalles de tus quince años.",
    url: "/invitacion/quinceanos-bianquita",
    image: "/ejemplos/quinceanos-bianquita.webp",
    badge: "XV Años",
    },
]

export default function InvitationExamples() {
    return ( 
        <section id="diseños" className="border-y border-[#E5E9E5] bg-white"> 
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                {/* ENCABEZADO */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">
                        Inspírate
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">
                        Conoce algunos de nuestros diseños
                    </h2>
                    <p className="mt-4 text-[#687A72]">
                        Explora ejemplos reales de nuestras invitaciones y descubre cuál
                        estilo se adapta mejor a tu celebración.
                    </p>
                </div>
                {/* TARJETAS */}
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {examples.map((example) => (
                        <article key={example.url} className="group overflow-hidden rounded-3xl border border-[#E5E9E5] bg-[#FAF8F3] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            {/* IMAGEN */}
                            <div className="relative aspect-16/10 overflow-hidden bg-[#E8EEE9]">
                                <Image src={example.image} alt={example.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw"/>
                                {/* DEGRADADO */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/50 to-transparent" />
                                {/* BADGE */}
                                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#2F5D50] shadow-sm backdrop-blur">
                                {example.badge}
                                </span>
                            </div>
                            {/* INFORMACIÓN */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#263832]">{example.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#687A72]">{example.description}</p>
                                <Link href={example.url} target="_blank" className="mt-5 inline-flex items-center rounded-xl bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#244A40]">
                                Ver invitación
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* TEXTO INFERIOR */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-[#8A9A8F]">Cada invitación puede personalizarse con los detalles de tu evento.</p>
                </div>
            </div>
        </section>
    )   
}
