type Props = {
  children: React.ReactNode
  className?: string
}

export default function QuinceanosElegantDecor({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        ${className}
      `}
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {children}
    </div>
  )
}