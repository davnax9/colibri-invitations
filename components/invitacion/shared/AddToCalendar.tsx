"use client"

import { generateGoogleCalendarUrl } from "@/utils/calendar"

type Schedule = {
  id: string
  title: string
  date: Date
  time: string | null
  description: string | null
  location: {
    name: string
  } | null
}

type Props = {
  title: string
  eventDate: Date
  schedules: Schedule[]
  invitationUrl?: string
}

export default function AddToCalendar({title,eventDate,schedules,invitationUrl}: Props) {

  function handleAddToCalendar() {
    const validSchedules = schedules.filter((schedule) => schedule.date)

    /*
     * Si no existen horarios,
     * utilizamos eventDate como respaldo.
     */
    if (validSchedules.length === 0) {
      const start = new Date(eventDate)
      const end = new Date(start.getTime() + 2 * 60 * 60 * 1000)

      const description = ["Te esperamos para celebrar este día tan especial.", "", invitationUrl ? `Consulta tu invitación:\n${invitationUrl}` : ""].filter(Boolean).join("\n")

      const url = generateGoogleCalendarUrl({ title, description, start, end, location: ""})
      window.open(url, "_blank", "noopener,noreferrer")
      return
    }

    const firstSchedule = validSchedules[0]
    const lastSchedule = validSchedules[validSchedules.length - 1]
    const start = createScheduleDate(firstSchedule)
    let end = createScheduleDate(lastSchedule)

    /*
     * Si solamente existe un horario,
     * damos 2 horas de duración.
     */
    if (validSchedules.length === 1) {
      end = new Date(start.getTime() + 2 * 60 * 60 * 1000)
    }

    if (end <= start) {
      end = new Date(start.getTime() + 2 * 60 * 60 * 1000)
    }

    /*
     * Descripción de los horarios.
     */
    const description = buildCalendarDescription(validSchedules, invitationUrl)

    /*
     * Ubicaciones utilizadas en los horarios.
     */
    const location = buildCalendarLocation(validSchedules)

    const url = generateGoogleCalendarUrl({title, description, start, end, location})

    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <button type="button" onClick={handleAddToCalendar} className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90" style={{backgroundColor: "var(--theme-primary)"}}>
      📅 Agregar al calendario
    </button>
  )
}

/* =========================================================
   DESCRIPCIÓN
========================================================= */

function buildCalendarDescription(schedules: Schedule[], invitationUrl?: string) {
  const lines: string[] = []
  lines.push("Te esperamos para celebrar este día tan especial.")
  lines.push("")
  lines.push("HORARIOS")
  lines.push("")

  schedules.forEach((schedule) => {
    lines.push(schedule.title)
    if (schedule.time) {
      lines.push(`Hora: ${schedule.time}`)
    }
    if (schedule.location?.name) {
      lines.push(`Lugar: ${schedule.location.name}`)
    }
    if (schedule.description) {
      lines.push(schedule.description)
    }
    lines.push("")

    if (invitationUrl) {
        lines.push("Consulta tu invitación:")
        lines.push(invitationUrl)
        lines.push("")
    }
  })
  return lines.join("\n")
}

/* =========================================================
   UBICACIONES
========================================================= */

function buildCalendarLocation(schedules: Schedule[]) {
  const locations = schedules.map((schedule) => schedule.location?.name).filter((location): location is string => Boolean(location))

  /*
   * Eliminamos ubicaciones repetidas.
   */
  const uniqueLocations = [...new Set(locations)]
  return uniqueLocations.join(" / ")
}

/* =========================================================
   FECHA + HORA
========================================================= */

function createScheduleDate(schedule: Schedule) {
  const date = new Date(schedule.date)
  if (!schedule.time) {
    return date
  }
  const time = schedule.time.trim()
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i)
  if (!match) {
    return date
  }

  let hours = Number(match[1])
  const minutes = Number(match[2])
  const period = match[3]?.toUpperCase()
  if (period === "PM" && hours < 12) {
    hours += 12
  }
  if (period === "AM" && hours === 12) {
    hours = 0
  }
  date.setHours(hours, minutes, 0, 0)
  return date
}