type Props = {
  className?: string
}

export default function QuinceanosGoldDust({
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >

      {/* BRILLO SUPERIOR */}
      <div
        className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.14) 0%, rgba(216,192,138,0.05) 35%, transparent 70%)",
        }}
      />

      {/* BRILLO IZQUIERDO */}
      <div
        className="absolute -left-24 top-1/3 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,85,0.08) 0%, transparent 70%)",
        }}
      />

      {/* BRILLO DERECHO */}
      <div
        className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.08) 0%, transparent 70%)",
        }}
      />

      {/* PARTICULAS */}
      <span
        className="absolute left-[18%] top-[30%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#B89455",
          boxShadow: "0 0 7px rgba(184,148,85,0.6)",
        }}
      />

      <span
        className="absolute left-[42%] top-[18%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#D8C08A",
          boxShadow: "0 0 8px rgba(216,192,138,0.7)",
        }}
      />

      <span
        className="absolute right-[22%] top-[40%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#B89455",
          boxShadow: "0 0 7px rgba(184,148,85,0.6)",
        }}
      />

      <span
        className="absolute left-[27%] bottom-[25%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#D8C08A",
          boxShadow: "0 0 8px rgba(216,192,138,0.7)",
        }}
      />

      <span
        className="absolute right-[35%] bottom-[20%] h-1 w-1 rounded-full"
        style={{
          backgroundColor: "#B89455",
          boxShadow: "0 0 7px rgba(184,148,85,0.6)",
        }}
      />

    </div>
  )
}