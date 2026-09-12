type Props = {
  className?: string
}

export default function QuinceanosElegantSparkles({
  className = "",
}: Props) {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        ${className}
      `}
      aria-hidden="true"
    >
      {/* Destello 1 */}
      <span
        className="
          absolute
          left-[7%]
          top-[18%]
          text-[13px]
          opacity-30
          animate-[elegantSparkle_5s_ease-in-out_infinite]
        "
        style={{
          color: "var(--theme-accent)",
        }}
      >
        ✦
      </span>

      {/* Destello 2 */}
      <span
        className="
          absolute
          right-[8%]
          top-[30%]
          text-[9px]
          opacity-25
          animate-[elegantSparkle_6s_ease-in-out_1s_infinite]
        "
        style={{
          color: "var(--theme-accent)",
        }}
      >
        ✧
      </span>

      {/* Punto 1 */}
      <span
        className="
          absolute
          left-[14%]
          top-[56%]
          h-1
          w-1
          rounded-full
          opacity-25
          animate-[elegantSparkle_5s_ease-in-out_0.5s_infinite]
        "
        style={{
          backgroundColor: "var(--theme-accent)",
        }}
      />

      {/* Destello 3 */}
      <span
        className="
          absolute
          right-[13%]
          top-[62%]
          text-[11px]
          opacity-25
          animate-[elegantSparkle_5.5s_ease-in-out_2s_infinite]
        "
        style={{
          color: "var(--theme-accent)",
        }}
      >
        ✦
      </span>

      {/* Punto 2 */}
      <span
        className="
          absolute
          left-[9%]
          bottom-[19%]
          h-1.5
          w-1.5
          rounded-full
          opacity-20
          animate-[elegantSparkle_6s_ease-in-out_1.5s_infinite]
        "
        style={{
          backgroundColor: "var(--theme-accent)",
        }}
      />

      {/* Destello 4 */}
      <span
        className="
          absolute
          right-[7%]
          bottom-[14%]
          text-[8px]
          opacity-20
          animate-[elegantSparkle_5s_ease-in-out_2.5s_infinite]
        "
        style={{
          color: "var(--theme-accent)",
        }}
      >
        ✧
      </span>
    </div>
  )
}