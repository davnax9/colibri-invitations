type Props = {
  variant?: "sparkles" | "divider" | "corner"
  className?: string
}

export default function QuinceanosGoldDecor({variant = "sparkles", className = ""}: Props) {

  if (variant === "divider") {
    return (
      <div
        className={`flex items-center justify-center gap-4 ${className}`}
        aria-hidden="true"
      >
        <span
          className="h-px w-14"
          style={{
            backgroundColor: "#B89455",
            opacity: 0.45,
          }}
        />

        <span
          className="text-sm"
          style={{
            color: "#B89455",
          }}
        >
          ✦
        </span>

        <span
          className="h-px w-14"
          style={{
            backgroundColor: "#B89455",
            opacity: 0.45,
          }}
        />
      </div>
    )
  }

  if (variant === "corner") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <span
          className="absolute left-6 top-6 text-xl"
          style={{ color: "#B89455" }}
        >
          ❦
        </span>

        <span
          className="absolute right-6 top-6 -scale-x-100 text-xl"
          style={{ color: "#B89455" }}
        >
          ❦
        </span>

        <span
          className="absolute bottom-6 left-6 rotate-180 text-xl"
          style={{ color: "#B89455" }}
        >
          ❦
        </span>

        <span
          className="absolute bottom-6 right-6 rotate-180 -scale-x-100 text-xl"
          style={{ color: "#B89455" }}
        >
          ❦
        </span>
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >

      {/* DESTELLO 01 */}
      <span
        className="absolute left-[12%] top-[18%] text-lg opacity-70"
        style={{
          color: "#B89455",
          textShadow: "0 0 10px rgba(184,148,85,0.35)",
        }}
      >
        ✦
      </span>

      {/* DESTELLO 02 */}
      <span
        className="absolute right-[15%] top-[27%] text-xs opacity-60"
        style={{
          color: "#D8C08A",
          textShadow: "0 0 8px rgba(216,192,138,0.45)",
        }}
      >
        ✧
      </span>

      {/* DESTELLO 03 */}
      <span
        className="absolute left-[20%] bottom-[22%] text-sm opacity-55"
        style={{
          color: "#B89455",
          textShadow: "0 0 9px rgba(184,148,85,0.35)",
        }}
      >
        ✦
      </span>

      {/* DESTELLO 04 */}
      <span
        className="absolute right-[11%] bottom-[16%] text-lg opacity-65"
        style={{
          color: "#D8C08A",
          textShadow: "0 0 12px rgba(216,192,138,0.4)",
        }}
      >
        ✧
      </span>

      {/* PEQUEÑOS PUNTOS DE LUZ */}
      <span
        className="absolute left-[31%] top-[38%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#B89455",
          boxShadow: "0 0 8px rgba(184,148,85,0.7)",
        }}
      />

      <span
        className="absolute right-[32%] top-[14%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#D8C08A",
          boxShadow: "0 0 8px rgba(216,192,138,0.8)",
        }}
      />

      <span
        className="absolute right-[25%] bottom-[35%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#B89455",
          boxShadow: "0 0 8px rgba(184,148,85,0.65)",
        }}
      />

      <span
        className="absolute left-[9%] bottom-[34%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#D8C08A",
          boxShadow: "0 0 8px rgba(216,192,138,0.75)",
        }}
      />

    </div>
  )
}