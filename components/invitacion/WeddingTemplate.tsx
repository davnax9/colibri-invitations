import { EventTheme } from "@/utils/types/invitation"
import WeddingElegant from "./WeddingElegant"
import WeddingRomantic from "./WeddingRomantic"
import WeddingModern from "./WeddingModern"
import WeddingLuxury from "./WeddingLuxury"
import WeddingMinimal from "./WeddingMinimal"

type Props = {
  event: {
    name: string
    slug: string
    eventDate: Date

    template: {
      slug: string
      name: string
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
  }

  guest?: GuestInfo
}

type GuestInfo = {
  name: string
  passes: number
  confirmedPasses: number | null
  status: "PENDING" | "CONFIRMED" | "DECLINED"
  token: string
}

export default function WeddingTemplate({ event, guest }: Props) {
  switch (event.template.slug) {
    case "wedding-elegant":
      return <WeddingElegant event={event} guest={guest} />
    case "wedding-romantic":
      return <WeddingRomantic event={event} guest={guest} />
    case "wedding-modern":
      return <WeddingModern event={event} guest={guest} />
    case "wedding-luxury":
      return <WeddingLuxury
       event={event} guest={guest} />
    case "wedding-minimal":
      return <WeddingMinimal event={event} guest={guest} />
    default:
      return <WeddingElegant event={event} guest={guest} />
  }
}