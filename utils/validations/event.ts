import { z } from "zod"

export const CreateEventSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(100, "El nombre es demasiado largo"),
  type: z.enum(["WEDDING", "QUINCEANOS", "BAUTIZO", "COMUNION"]),
  eventDate: z.coerce.date({error: "La fecha del evento no es válida"}),
  templateId: z.string().min(1, "Debes seleccionar un diseño")
})

export type CreateEventInput = z.infer<typeof CreateEventSchema>