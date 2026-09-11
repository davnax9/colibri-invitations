type TimelineItem = {
  time: string
  title: string
  description?: string
}

type Props = {
  items: TimelineItem[]
}

export default function QuinceanosTimeline({
  items,
}: Props) {
  return (
    <section className="relative bg-[#F4EFE6] px-6 py-24 sm:py-32">

      <div className="mx-auto max-w-3xl">

        <div className="text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#8C6A36]">
            La celebración
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#29251F] sm:text-5xl">
            Así viviremos este día
          </h2>

        </div>

        <div className="relative mt-16">

          <div className="absolute left-3 top-0 h-full w-px bg-[#B89455]/40" />

          <div className="space-y-10">

            {items.map((item, index) => (
              <div
                key={`${item.time}-${index}`}
                className="relative pl-12"
              >

                <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#B89455] bg-[#F4EFE6]">
                  <span className="h-2 w-2 rounded-full bg-[#B89455]" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6A36]">
                  {item.time}
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#29251F]">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-2 text-sm leading-6 text-[#6F6250]">
                    {item.description}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}