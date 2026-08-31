import { InvitationTemplateProps } from "@/utils/types/invitation"
import WeddingElegant from "./WeddingElegant"
import WeddingRomantic from "./WeddingRomantic"
import WeddingModern from "./WeddingModern"
import WeddingLuxury from "./WeddingLuxury"
import WeddingMinimal from "./WeddingMinimal"

export default function WeddingTemplate({ event, guest }: InvitationTemplateProps) {
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