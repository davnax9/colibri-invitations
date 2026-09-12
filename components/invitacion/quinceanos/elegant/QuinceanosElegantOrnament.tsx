type Props = {
  className?: string
  symbol?: "diamond" | "star" | "cross"
}

export default function QuinceanosElegantOrnament({
  className = "",
  symbol = "diamond",
}: Props) {
  const symbols = {
    diamond: "◇",
    star: "✦",
    cross: "✧",
  }

  return (
    <div
      className={`
        flex
        items-center
        justify-center
        ${className}
      `}
      aria-hidden="true"
    >
      {/* Línea izquierda */}
      <div
        className="h-px w-12 sm:w-20"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.45,
        }}
      />

      {/* Pequeño punto */}
      <span
        className="mx-2 h-1 w-1 rounded-full"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.55,
        }}
      />

      {/* Símbolo central */}
      <span
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          text-sm
        "
        style={{
          color: "var(--theme-accent)",
        }}
      >
        {symbols[symbol]}
      </span>

      {/* Pequeño punto */}
      <span
        className="mx-2 h-1 w-1 rounded-full"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.55,
        }}
      />

      {/* Línea derecha */}
      <div
        className="h-px w-12 sm:w-20"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.45,
        }}
      />
    </div>
  )
}