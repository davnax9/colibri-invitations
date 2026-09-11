type Props = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "subtle" | "ornate"
}

export default function QuinceanosVintageFrame({
  children,
  className = "",
  variant = "default",
}: Props) {

  const isOrnate = variant === "ornate"
  const isSubtle = variant === "subtle"

  const gold = "#B89455"

  return (
    <div className={`relative ${className}`}>

      {/* Marco exterior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border"
        style={{
          borderColor: isSubtle
            ? "rgba(184,148,85,0.28)"
            : "rgba(184,148,85,0.55)",
        }}
      />

      {/* Marco interior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 border"
        style={{
          borderColor: isSubtle
            ? "rgba(184,148,85,0.16)"
            : "rgba(184,148,85,0.30)",
        }}
      />

      {/* Esquina superior izquierda */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-4 h-10 w-10"
        style={{
          borderLeft: `2px solid ${gold}`,
          borderTop: `2px solid ${gold}`,
          opacity: isSubtle ? 0.5 : 0.8,
        }}
      />

      {/* Esquina superior derecha */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-4 h-10 w-10"
        style={{
          borderRight: `2px solid ${gold}`,
          borderTop: `2px solid ${gold}`,
          opacity: isSubtle ? 0.5 : 0.8,
        }}
      />

      {/* Esquina inferior izquierda */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-4 h-10 w-10"
        style={{
          borderBottom: `2px solid ${gold}`,
          borderLeft: `2px solid ${gold}`,
          opacity: isSubtle ? 0.5 : 0.8,
        }}
      />

      {/* Esquina inferior derecha */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 h-10 w-10"
        style={{
          borderBottom: `2px solid ${gold}`,
          borderRight: `2px solid ${gold}`,
          opacity: isSubtle ? 0.5 : 0.8,
        }}
      />

      {/* Ornamentos */}
      {isOrnate && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-8 top-7 text-lg"
            style={{ color: gold }}
          >
            ❦
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-7 -scale-x-100 text-lg"
            style={{ color: gold }}
          >
            ❦
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-7 left-8 rotate-180 text-lg"
            style={{ color: gold }}
          >
            ❦
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-7 right-8 rotate-180 -scale-x-100 text-lg"
            style={{ color: gold }}
          >
            ❦
          </div>
        </>
      )}

      <div className="relative z-10">
        {children}
      </div>

    </div>
  )
}