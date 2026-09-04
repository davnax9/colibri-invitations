
import Image from "next/image"

type Props = {
  photos: {
    id: string
    url: string
    title: string | null
    isCover: boolean
  }[]
}

export default function WeddingLuxuryGallery({ photos }: Props) {
  if (!photos.length) return null

  const coverPhoto = photos.find((photo) => photo.isCover) ?? photos[0]

  const secondaryPhotos = photos.filter((photo) => photo.id !== coverPhoto.id).slice(0, 4)

  return (
    <section className="px-6 py-28" style={{ backgroundColor: "var(--theme-background)" }}>
      <div className="mx-auto max-w-6xl">
        {/* ENCABEZADO */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.45em]" style={{ color: "var(--theme-secondary)" }}>Nuestra historia</p>
          <h2 className="mt-5 text-4xl font-serif md:text-6xl" style={{ color: "var(--theme-primary)" }}>Algunos recuerdos</h2>
          <div className="mx-auto mt-7 h-px w-20" style={{ backgroundColor: "var(--theme-accent)" }}/>
        </div>
        {/* GALERÍA EDITORIAL */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* FOTO PRINCIPAL */}
          <div className="group relative min-h-125 overflow-hidden">
            <Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de la celebración"} fill className="object-cover transition duration-1000 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            {coverPhoto.title && (
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-medium text-white">{coverPhoto.title}</p>
              </div>
            )}
          </div>
          {/* FOTOS SECUNDARIAS */}
          <div className="grid grid-cols-2 gap-5">
            {secondaryPhotos.map((photo) => (
              <div key={photo.id} className="group relative min-h-60 overflow-hidden">
                <Image src={photo.url} alt={photo.title ?? "Fotografía de la celebración"} fill className="object-cover transition duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
                {photo.title && (
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <p className="text-xs font-medium text-white drop-shadow">{photo.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* FRASE */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <p className="font-serif text-2xl italic leading-relaxed md:text-3xl" style={{ color: "var(--theme-primary)" }}>"El amor no se encuentra, se construye juntos."</p>
          <div className="mx-auto mt-7 h-px w-12" style={{ backgroundColor: "var(--theme-accent)" }}/>
        </div>
      </div>
    </section>
  )
}