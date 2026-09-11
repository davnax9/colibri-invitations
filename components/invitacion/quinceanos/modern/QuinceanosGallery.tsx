type Props = {
  images: string[]
}

export default function QuinceanosGallery({
  images,
}: Props) {
  if (!images.length) return null

  return (
    <section className="relative overflow-hidden bg-[#29251F] px-5 py-24 sm:px-6 sm:py-32">

      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#C9A86A]">
            Momentos
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#F4EFE6] sm:text-5xl">
            Un día para recordar
          </h2>

        </div>

        <div className="grid gap-4 md:grid-cols-12">

          {images[0] && (
            <div className="overflow-hidden rounded-3xl md:col-span-8 md:row-span-2">
              <img
                src={images[0]}
                alt=""
                className="h-full min-h-[420px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          )}

          {images[1] && (
            <div className="overflow-hidden rounded-3xl md:col-span-4">
              <img
                src={images[1]}
                alt=""
                className="h-full min-h-[220px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          )}

          {images[2] && (
            <div className="overflow-hidden rounded-3xl md:col-span-4">
              <img
                src={images[2]}
                alt=""
                className="h-full min-h-[220px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          )}

          {images.slice(3, 6).map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="overflow-hidden rounded-3xl md:col-span-4"
            >
              <img
                src={image}
                alt=""
                className="h-72 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}