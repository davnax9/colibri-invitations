import { InvitationTemplateProps } from "@/utils/types/invitation"

import BautizoElegant from "./BautizoElegant"
import BautizoAngelical from "./BautizoAngelical"
import BautizoFloral from "./BautizoFloral"
import BautizoLuxury from "./BautizoLuxury"

export default function BautizoTemplate({event, guest}: InvitationTemplateProps) {
  switch (event.template.slug) {
    case "bautizo-elegant":
      return <BautizoElegant event={event} guest={guest} />
    case "bautizo-angelical":
      return <BautizoAngelical event={event} guest={guest} />
    case "bautizo-floral":
      return <BautizoFloral event={event} guest={guest} />
    case "bautizo-luxury":
      return <BautizoLuxury event={event} guest={guest} />
    default:
      return <BautizoElegant event={event} guest={guest} />
  }
}