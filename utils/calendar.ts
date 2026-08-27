type CalendarEvent = {
  title: string
  description?: string
  start: Date
  end: Date
  location?: string
}

export function generateGoogleCalendarUrl({ title, description, start, end, location}: CalendarEvent) {
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}

  const params = new URLSearchParams({action: "TEMPLATE", text: title, dates: `${formatDate(start)}/${formatDate(end)}`, details: description ?? "", location: location ?? ""})

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}