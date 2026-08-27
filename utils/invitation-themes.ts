export type InvitationThemePreset = {
  name: string
  description: string

  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  surfaceColor: string
  textColor: string
}

export const invitationThemePresets: Record<string,InvitationThemePreset> = {
  ELEGANT: {
    name: "Elegante",
    description: "Un estilo sobrio, elegante y atemporal.",

    primaryColor: "#292524",
    secondaryColor: "#78716c",
    accentColor: "#a8a29e",
    backgroundColor: "#fafaf9",
    surfaceColor: "#ffffff",
    textColor: "#292524",
  },

  ROMANTIC: {
    name: "Romántico",
    description: "Tonos suaves para una celebración romántica.",

    primaryColor: "#881337",
    secondaryColor: "#be123c",
    accentColor: "#fda4af",
    backgroundColor: "#fff1f2",
    surfaceColor: "#ffffff",
    textColor: "#4c0519",
  },

  GOLDEN: {
    name: "Dorado",
    description: "Un estilo sofisticado con detalles cálidos.",

    primaryColor: "#78350f",
    secondaryColor: "#a16207",
    accentColor: "#d4af37",
    backgroundColor: "#fffbeb",
    surfaceColor: "#ffffff",
    textColor: "#451a03",
  },

  NATURAL: {
    name: "Natural",
    description: "Tonos cálidos inspirados en la naturaleza.",

    primaryColor: "#365314",
    secondaryColor: "#4d7c0f",
    accentColor: "#a3a380",
    backgroundColor: "#f7fee7",
    surfaceColor: "#ffffff",
    textColor: "#1a2e05",
  },

  MODERN: {
    name: "Moderno",
    description: "Una apariencia limpia, moderna y minimalista.",

    primaryColor: "#1e293b",
    secondaryColor: "#475569",
    accentColor: "#38bdf8",
    backgroundColor: "#f8fafc",
    surfaceColor: "#ffffff",
    textColor: "#0f172a",
  },
}