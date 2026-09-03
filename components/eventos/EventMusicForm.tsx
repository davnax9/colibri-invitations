"use client"

import { FormEvent, useState } from "react"
import { saveEventMusic } from "@/actions/event-actions"
import { extractYouTubeVideoId } from "@/utils/youtube"

type Music = {
  id: string
  url: string
  title: string | null
  artist: string | null
  autoplay: boolean
}

type Props = {
  eventId: string
  music: Music | null
}

export default function EventMusicForm({eventId, music}: Props) {
  const [url, setUrl] = useState(music?.url ?? "")
  const [title, setTitle] = useState(music?.title ?? "")
  const [artist, setArtist] = useState(music?.artist ?? "")
  const [autoplay, setAutoplay] = useState(music?.autoplay ?? false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setError("")
    setMessage("")

    const youtubeVideoId = extractYouTubeVideoId(url)

    if (!youtubeVideoId) {
      setError("Ingresa una URL válida de YouTube.")

      setLoading(false)
      return
    }

    const result = await saveEventMusic({eventId, url, title, artist, autoplay})

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setMessage("Música guardada correctamente")
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      {/* URL */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Video de youtube</label>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." required
          className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
        <p className="mt-2 text-xs text-slate-400">Pega aquí la URL del video de YouTube que deseas utilizar.</p>
      </div>
      {/* Título */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Nombre de la canción</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Perfect"
            className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
      </div>
      {/* Artista */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Artista</label>
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Ed Sheeran"
          className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
      </div>
      {/* Autoplay */}
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={autoplay} onChange={(e) => setAutoplay(e.target.checked)} className="h-4 w-4 rounded border-slate-300"/>
        <span className="text-sm text-slate-700">Reproducir automáticamente</span>
      </label>
      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}
      {message && (
        <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
          {message}
        </div>
      )}
      <div className="flex justify-end">
        <button type="submit" disabled={loading} className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Guardando..." : "Guardar música"}
        </button>
      </div>
    </form>
  )
}