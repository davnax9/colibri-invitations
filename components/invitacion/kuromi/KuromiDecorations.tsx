
type Props = {
  variant?: "background" | "corners" | "floating"
}

export default function KuromiDecorations({
  variant = "background",
}: Props) {
  if (variant === "corners") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute left-5 top-5 text-2xl text-pink-200/60">✦</span>
        <span className="absolute right-5 top-8 text-3xl text-violet-200/60">♡</span>
        <span className="absolute bottom-6 left-7 text-2xl text-violet-200/50">✧</span>
        <span className="absolute bottom-5 right-6 text-3xl text-pink-200/50">♥</span>
      </div>
    )
  }

  if (variant === "floating") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute left-[8%] top-[18%] animate-pulse text-3xl text-pink-200/50">✦</span>
        <span className="absolute right-[12%] top-[30%] text-4xl text-violet-200/50">♡</span>
        <span className="absolute bottom-[20%] left-[15%] text-2xl text-pink-200/50">✧</span>
        <span className="absolute bottom-[15%] right-[10%] animate-pulse text-3xl text-violet-200/50">♥</span>
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-700/20 blur-[100px]" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[100px]" />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(#e9d5ff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <span className="absolute left-[8%] top-[15%] text-3xl text-purple-200/40">✦</span>
      <span className="absolute right-[10%] top-[25%] text-4xl text-pink-200/40">♡</span>
      <span className="absolute bottom-[20%] left-[12%] text-2xl text-fuchsia-200/40">✧</span>
      <span className="absolute bottom-[15%] right-[8%] text-3xl text-purple-200/40">♥</span>
    </div>
  )
}
