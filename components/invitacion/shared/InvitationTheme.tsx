type EventTheme = {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  surfaceColor: string
  textColor: string
}

type Props = {
  theme?: EventTheme | null
  children: React.ReactNode
}

export default function InvitationTheme({ theme, children}: Props) {

  const currentTheme = theme ?? {
    primaryColor: "#292524",
    secondaryColor: "#78716c",
    accentColor: "#a8a29e",
    backgroundColor: "#fafaf9",
    surfaceColor: "#ffffff",
    textColor: "#292524",
  }

  return (
    <div
      style={{
        "--theme-primary": currentTheme.primaryColor,
        "--theme-secondary": currentTheme.secondaryColor,
        "--theme-accent": currentTheme.accentColor,
        "--theme-background": currentTheme.backgroundColor,
        "--theme-surface": currentTheme.surfaceColor,
        "--theme-text": currentTheme.textColor,
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}