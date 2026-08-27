export function getInvitationUrl(eventSlug: string, guestToken: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  return `${baseUrl}/invitacion/${eventSlug}/${guestToken}`
}

type InvitationMessageData = {
  template: string
  guestName: string
  passes: number
  invitationUrl: string
}

export function generateInvitationMessage({template,guestName,passes,invitationUrl}: InvitationMessageData) {
  return template.replaceAll("{nombre}", guestName).replaceAll("{pases}", String(passes)).replaceAll("{link}", invitationUrl)
}