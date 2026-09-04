import { InvitationTemplateProps } from "@/utils/types/invitation"
import ComunionElegant from "./ComunionElegant"
import ComunionClassic from "./ComunionClassic"
import ComunionFloral from "./ComunionFloral"
import ComunionModern from "./ComunionModern"

export default function ComunionTemplate({event, guest}: InvitationTemplateProps) {
  switch (event.template.slug) {
      case "comunion-elegant":
        return <ComunionElegant event={event} guest={guest} />
      case "comunion-clasic":
        return <ComunionClassic event={event} guest={guest} />
      case "comunion-floral":
        return <ComunionFloral event={event} guest={guest} />
      case "comunion-modern":
        return <ComunionModern event={event} guest={guest} />
      default:
        return <ComunionElegant event={event} guest={guest} />
    }
}