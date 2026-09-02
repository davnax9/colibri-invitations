import { GuestStatus } from "@/app/generated/prisma/enums"

export type GiftType =
  | "ENVELOPE"
  | "PHYSICAL_GIFT"
  | "GIFT_TABLE"
  | "BANK_TRANSFER"
  | "CUSTOM"

export type GiftData = {
  eventId: string
  type: GiftType
  title: string
  description?: string
  url?: string
  accountName?: string
  accountNumber?: string
}

export type Gift = {
  id: string
  type: GiftType
  title: string
  description: string | null
  url: string | null
  accountName: string | null
  accountNumber: string | null
  order: number
}

export type BackgroundTexture = {
  id: string
  name: string
  image: string
  description: string
  pro: boolean
}

export type EventTheme = {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  surfaceColor: string
  textColor: string
}

export type Guest = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  message: string | null
  eventId: string
  phone: string | null
  email: string | null
  passes: number
  confirmed: number | null
  status: GuestStatus
  token: string
}