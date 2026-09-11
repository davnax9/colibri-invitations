import QuinceanosVintageFrame from "./QuinceanosVintageFrame"

type Props = {
  quote?: string
  author?: string
}

export default function QuinceanosQuote({
  quote = "Hay momentos en la vida que merecen ser celebrados para siempre.",
  author = "Con cariño, familia",
}: Props) {

  return (
    <section
      className="relative px-6 py-20 sm:px-10 sm:py-28"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >

      <QuinceanosVintageFrame
        variant="ornate"
        className="mx-auto max-w-5xl"
      >

        <div className="px-14 py-20 text-center sm:px-24 sm:py-28">

          {/* Ornamento */}
          <div
            className="mb-8 flex items-center justify-center gap-4"
            style={{
              color: "#B89455",
            }}
          >

            <span className="h-px w-16 bg-current opacity-50" />

            <span className="text-xl">
              ✦
            </span>

            <span className="h-px w-16 bg-current opacity-50" />

          </div>


          <p
            className="mx-auto max-w-3xl font-serif text-2xl leading-relaxed sm:text-4xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            “{quote}”
          </p>


          <p
            className="mt-8 text-xs uppercase tracking-[0.35em]"
            style={{
              color: "#8C6A36",
            }}
          >
            {author}
          </p>


          <div
            className="mx-auto mt-8 h-px w-16"
            style={{
              backgroundColor: "#B89455",
            }}
          />

        </div>

      </QuinceanosVintageFrame>

    </section>
  )
}