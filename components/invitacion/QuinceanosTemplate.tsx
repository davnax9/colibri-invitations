import { InvitationTemplateProps } from "@/utils/types/invitation"
import QuinceanosElegant from "./QuinceanosElegant"
import QuinceanosModern from "./QuinceanosModern"
import QuinceanosLuxury from "./QuinceanosLuxury"
import QuinceanosFloral from "./QuinceanosFloral"
import QuinceanosPrincess from "./QuinceanosPrincess"
import Principito from "./Principito"

export default function QuinceanosTemplate({event,guest}: InvitationTemplateProps) {

  switch (event.template.slug) {
    case "quince-elegant":
      return <QuinceanosElegant event={event} guest={guest} />
    case "quince-princess":
      return <QuinceanosPrincess event={event} guest={guest} />
    case "quince-modern":
      return <QuinceanosModern event={event} guest={guest} />
    case "quince-luxury":
      return <QuinceanosLuxury event={event} guest={guest} />
    case "quince-floral":
      return <QuinceanosFloral event={event} guest={guest} />
    //Caso para fiesta de Angel David
    case "principito":
      return <Principito event={event} guest={guest} />
    default:
      return <QuinceanosElegant event={event} guest={guest} />
  }
}