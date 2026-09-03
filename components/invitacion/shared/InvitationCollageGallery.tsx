import Image from "next/image"

type Photo = {
  id: string
  url: string
  title: string | null
  isCover: boolean
}

type Props = {
  photos: Photo[]
}

export default function InvitationCollageGallery({photos}: Props) {
  if (!photos.length) return null

  const firstPhoto = photos[0]
  const remainingPhotos = photos.slice(1, 5)

  return (
    <section className="px-6 py-24" style={{backgroundColor: "var(--theme-background)"}}>
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>Nuestros recuerdos</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl" style={{color: "var(--theme-primary)"}}>Momentos</h2>
        </div>
        {/* COLLAGE */}
        <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
          {/* PRINCIPAL */}
          <div className="relative min-h-105 overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
            <Image src={firstPhoto.url} alt={firstPhoto.title ?? "Fotografía"} fill className="object-cover transition duration-700 hover:scale-105"/>
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            {firstPhoto.title && (<p className="absolute bottom-5 left-5 right-5 text-sm text-white">{firstPhoto.title}</p>)}
          </div>
          {/* SECUNDARIAS */}
          {remainingPhotos.map((photo) => (
            <div key={photo.id} className="relative min-h-50 overflow-hidden rounded-3xl">
              <Image src={photo.url} alt={photo.title ?? "Fotografía"} fill className="object-cover transition duration-700 hover:scale-105"/>
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}