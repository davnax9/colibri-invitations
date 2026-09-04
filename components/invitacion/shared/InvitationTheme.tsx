import { EventTheme } from "@/utils/types"
import { InvitationEvent } from "@/utils/types/invitation"

type Props = {
  theme?: EventTheme | null
  event: InvitationEvent
  children: React.ReactNode
}

export default function InvitationTheme({theme,event,children}: Props) {

  const { backgroundEnabled, backgroundTexture, backgroundOpacity} = event

  const currentTheme = theme ?? {
    primaryColor: "#292524",
    secondaryColor: "#78716c",
    accentColor: "#a8a29e",
    backgroundColor: "#fafaf9",
    surfaceColor: "#ffffff",
    textColor: "#292524",
  }

  return (
    <div className="relative min-h-screen" style={{"--theme-primary": currentTheme.primaryColor, "--theme-secondary": currentTheme.secondaryColor, "--theme-accent": currentTheme.accentColor,
      "--theme-background": currentTheme.backgroundColor, "--theme-surface": currentTheme.surfaceColor, "--theme-text": currentTheme.textColor} as React.CSSProperties}
    >
      {/* ============================================= */}
      {/* FONDO BASE                                    */}
      {/* ============================================= */}
      <div aria-hidden="true" className="fixed inset-0 z-0" style={{backgroundColor: currentTheme.backgroundColor}}/>
      {/* ============================================= */}
      {/* CONTENIDO                                     */}
      {/* ============================================= */}
      <div className="relative z-10">{children}</div>
      {/* ============================================= */}
      {/* TEXTURA GLOBAL                                */}
      {/* ============================================= */}
      {backgroundEnabled && backgroundTexture && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 bg-repeat" style={{backgroundImage: `url("${backgroundTexture}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "repeat", opacity: backgroundOpacity / 100, mixBlendMode: "multiply"}}/>
      )}
    </div>
  )
}