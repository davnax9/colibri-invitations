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

export default function InvitationLuxuryGallery({
  photos,
}: Props) {
  if (!photos.length) return null

  const mainPhoto =
    photos.find((photo) => photo.isCover) ?? photos[0]

  const secondaryPhotos = photos
    .filter((photo) => photo.id !== mainPhoto.id)
    .slice(0, 3)

  return (
    <section
      className="px-6 py-28"
      style={{
        backgroundColor: "var(--theme-primary)",
      }}
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="text-center">

          <p
            className="text-xs uppercase tracking-[0.5em]"
            style={{
              color: "var(--theme-accent)",
            }}
          >
            Galería
          </p>

          <h2 className="mt-5 font-serif text-5xl text-white md:text-6xl">
            Nuestros recuerdos
          </h2>

        </div>

        {/* FOTO PRINCIPAL */}

        <div className="mt-16">

          <div
            className="relative mx-auto max-w-4xl overflow-hidden border p-2"
            style={{
              borderColor: "var(--theme-accent)",
            }}
          >

            <div className="relative aspect-16/10 overflow-hidden">

              <Image
                src={mainPhoto.url}
                alt={mainPhoto.title ?? "Fotografía"}
                fill
                className="object-cover"
              />

            </div>

          </div>

          {mainPhoto.title && (
            <p className="mt-5 text-center text-sm italic text-white/60">
              {mainPhoto.title}
            </p>
          )}

        </div>

        {/* SECUNDARIAS */}

        {secondaryPhotos.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            {secondaryPhotos.map((photo) => (

              <div
                key={photo.id}
                className="relative aspect-square overflow-hidden border p-1"
                style={{
                  borderColor: "var(--theme-accent)",
                }}
              >

                <Image
                  src={photo.url}
                  alt={photo.title ?? "Fotografía"}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  )
}