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