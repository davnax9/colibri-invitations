import WeddingTemplate from "./WeddingTemplate"
import QuinceanosTemplate from "./QuinceanosTemplate"
import BautizoTemplate from "./BautizoTemplate"
import ComunionTemplate from "./ComunionTemplate"

type GuestInfo = {
  name: string
  passes: number
  confirmedPasses: number | null
  status: "PENDING" | "CONFIRMED" | "DECLINED"
  token: string
}

type Props = {
  event: any
  guest?: GuestInfo
}

export default function InvitationRenderer({ event, guest }: Props) {
  switch (event.template?.type) {
    case "WEDDING":
      return (<WeddingTemplate event={event} guest={guest}/>)
    case "QUINCEANOS":
      return (<QuinceanosTemplate event={event} guest={guest}/>)
    case "BAUTIZO":
      return <BautizoTemplate event={event} guest={guest} />
    case "COMUNION":
      return <ComunionTemplate event={event} guest={guest} />
    default:
      return (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-slate-500">No se encontró una plantilla para este evento.</p>
        </div>
      )
  }
}