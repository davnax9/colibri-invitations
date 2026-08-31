import { GiftType } from "@/app/generated/prisma/enums"

export type EventTheme = {
  preset: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  surfaceColor: string
  textColor: string
}

export type InvitationGuest = {
  name: string
  passes: number
  confirmedPasses: number | null
  status: "PENDING" | "CONFIRMED" | "DECLINED"
  token: string
}

export type InvitationEvent = {
  id?: string
  name: string
  slug: string
  eventDate: Date
  backgroundEnabled: boolean
  backgroundTexture: string | null
  backgroundOpacity: number
  backgroundPosition: string

  template: {
    slug: string
  }

  theme: EventTheme | null

  details: {
    title: string | null
    subtitle: string | null
    description: string | null
    phrase: string | null
    groomName: string | null
    brideName: string | null
    quinceaneraName: string | null
    dressCode: string | null
  } | null

  locations: {
    id: string
    name: string
    address: string | null
    mapsUrl: string | null
  }[]

  schedules: {
    id: string
    title: string
    date: Date
    time: string | null
    description: string | null
    location: {
      name: string
    } | null
  }[]

  photos: {
    id: string
    url: string
    title: string | null
    isCover: boolean
  }[]

  music: {
    url: string
    title: string | null
    artist: string | null
    autoplay: boolean
  } | null

  gifts: {
    id: string
    type: GiftType
    title: string | null
    description: string | null
    url: string | null
    accountName: string | null
    accountNumber: string | null
    order: number
  }[]
}

export type InvitationTemplateProps = {
  event: InvitationEvent
  guest?: InvitationGuest
}