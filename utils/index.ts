type EventDetails = {
  groomName: string | null
  brideName: string | null
} | null

export function getCoupleInitials(details: EventDetails): string {
  const brideName = details?.brideName?.trim() ?? ""
  const groomName = details?.groomName?.trim() ?? ""

  const brideInitial = brideName.charAt(0).toLocaleUpperCase("es-MX")
  const groomInitial = groomName.charAt(0).toLocaleUpperCase("es-MX")

  if (!brideInitial && !groomInitial) return ""
  if (!brideInitial) return groomInitial
  if (!groomInitial) return brideInitial

  return `${brideInitial}  &  ${groomInitial}`
}