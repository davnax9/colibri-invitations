import Image from "next/image"

type InvitationGalleryProps = {
  event: {
    name: string
    eventDate: Date

    details: {
      title: string | null
      subtitle: string | null
      description: string | null
      phrase: string | null
      groomName: string | null
      brideName: string | null
      quinceaneraName: string | null
      dressCode: string | null
    } | null

    locations: {
      id: string
      name: string
      address: string | null
      mapsUrl: string | null
    }[]

    schedules: {
      id: string
      title: string
      date: Date
      time: string | null
      description: string | null

      location: {
        name: string
      } | null
    }[]

    photos: {
      id: string
      url: string
      title: string | null
      isCover: boolean
    }[]

    music: {
      url: string
      title: string | null
      artist: string | null
      autoplay: boolean
    } | null
  }
}

export default function InvitationGallery({event}: InvitationGalleryProps) {
  if (event.photos.length === 0) return null

  return (
    <section className="px-6 py-24" style={{backgroundColor: "var(--theme-background)"}}>
      <div className="mx-auto max-w-6xl">

        {/* ENCABEZADO */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Nuestros momentos</p>
          <h2 className="mt-4 text-4xl font-serif md:text-5xl" style={{color: "var(--theme-primary)"}}>Recuerdos</h2>
          <div className="mx-auto mt-6 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
        </div>

        {/* GALERÍA */}
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {event.photos.map((photo) => (
            <div key={photo.id} className="group relative mb-5 overflow-hidden rounded-2xl border shadow-sm break-inside-avoid" style={{borderColor: "var(--theme-accent)", backgroundColor: "var(--theme-surface)"}}>
              <Image src={photo.url} alt={photo.title ??"Fotografía de la celebración"} width={1200} height={1600} className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"/>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/35" />

              {/* TÍTULO */}
              {photo.title && (
                <div className="absolute inset-x-0 bottom-0 translate-y-full px-5 py-4 text-center transition duration-500 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white drop-shadow">{photo.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
