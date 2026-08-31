import InvitationBook from "./InvitationBook"

type FeaturedDesign = {
  id: string
  category: "Boda" | "XV años"
  name: string
  description: string
  image: string
  href: string
}

const designs: FeaturedDesign[] = [
  {
    id: "wedding-elegant",
    category: "Boda",
    name: "Elegant",
    description: "Un diseño elegante y atemporal para celebrar tu historia.",
    image: "/templates/wedding-elegant.png",
    href: "/invitacion/demo-boda-elegant",
  },
  {
    id: "wedding-floral",
    category: "Boda",
    name: "Floral",
    description: "Un estilo romántico inspirado en los detalles florales.",
    image: "/templates/wedding-elegant.png",
    href: "/invitacion/demo-boda-floral",
  },
  {
    id: "wedding-modern",
    category: "Boda",
    name: "Modern",
    description: "Una propuesta moderna y sofisticada.",
    image: "/templates/wedding-elegant.png",
    href: "/invitacion/demo-boda-modern",
  },
  {
    id: "wedding-romantic",
    category: "Boda",
    name: "Romantic",
    description: "Un diseño cálido y romántico.",
    image: "/templates/wedding-elegant.png",
    href: "/invitacion/demo-boda-romantic",
  },
  {
    id: "wedding-minimal",
    category: "Boda",
    name: "Minimal",
    description: "Elegancia sencilla para un momento inolvidable.",
    image: "/templates/wedding-elegant.png",
    href: "/invitacion/demo-boda-minimal",
  },

  {
    id: "xv-bianca",
    category: "XV años",
    name: "Bianca",
    description: "Elegancia y delicadeza para una noche especial.",
    image: "/templates/wedding-elegant.png",
    href: "/invitacion/xv-bianca-elegante",
  },
  {
    id: "xv-bianquita",
    category: "XV años",
    name: "Bianquita",
    description: "Una invitación llena de personalidad.",
    image: "/templates/wedding-elegant.png",
    href: "/invitacion/quinceanos-bianquita",
  },

  // agrega aquí tus otros 3 diseños
]

export default function FeaturedDesigns() {
  return (
    <section
      id="diseños"
      className="border-y border-[#E5E9E5] bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">
            Conoce nuestros diseños
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">
            Una invitación para cada historia
          </h2>

          <p className="mt-4 leading-7 text-[#687A72]">
            Explora algunos de nuestros diseños y descubre cómo podría
            verse tu invitación.
          </p>

        </div>

        {/* LIBRO */}
        <div className="mt-14">
          <InvitationBook designs={designs} />
        </div>

      </div>
    </section>
  )
}