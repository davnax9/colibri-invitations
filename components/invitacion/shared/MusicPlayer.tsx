"use client"

import YouTube, { YouTubeProps, YouTubePlayer} from "react-youtube"
import { useState } from "react"

type Props = {
  videoId: string
  title?: string | null
  artist?: string | null
  autoplay?: boolean
}

export default function MusicPlayer({ videoId, title, artist, autoplay = false}: Props) {
  const [playing, setPlaying] = useState(false)
  const [player, setPlayer] = useState<YouTubePlayer | null>(null)
  const opts: YouTubeProps["opts"] = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      controls: 0,
      loop: 1,
      playlist: videoId,
      modestbranding: 1,
      rel: 0,
    },
  }

  function handleReady(event: {target: YouTubePlayer}) {
    setPlayer(event.target)

    if (autoplay) {
      event.target.playVideo()
      setPlaying(true)
    }
  }

  function toggleMusic() {
    if (!player) return

    if (playing) {
      player.pauseVideo()
      setPlaying(false)
    } else {
      player.playVideo()
      setPlaying(true)
    }
  }

  return (
    <>
      <YouTube videoId={videoId} opts={opts} onReady={handleReady} className="hidden"/>
      <div className="fixed bottom-5 right-5 z-50">
        <div className="flex items-center gap-3 rounded-full px-3 py-2 shadow-xl backdrop-blur-md" style={{backgroundColor: "color-mix(in srgb, var(--theme-primary) 90%, transparent)",
            color: "white", border: "1px solid color-mix(in srgb, var(--theme-accent) 45%, transparent)"}}
        >
          {/* BOTÓN */}
          <button type="button" onClick={toggleMusic} className="flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-105"
            style={{backgroundColor: "var(--theme-surface)", color: "var(--theme-primary)"}} aria-label={playing ? "Pausar música" : "Reproducir música"}
          >
            {playing ? "Ⅱ" : "▶"}
          </button>
          {/* INFORMACIÓN */}
          <div className="hidden max-w-40 sm:block">
            <p className="truncate text-sm font-medium">{title ?? "Nuestra canción"}</p>
            {artist && (<p className="truncate text-xs text-white/60">{artist}</p>)}
          </div>
          {/* INDICADOR */}
          {playing && (
            <div className="mr-2 flex items-end gap-0.5">
              <span className="h-2 w-0.5 animate-pulse" style={{backgroundColor: "var(--theme-accent)"}}/>
              <span className="h-4 w-0.5 animate-pulse" style={{backgroundColor: "var(--theme-accent)", animationDelay: "150ms"}}/>
              <span className="h-3 w-0.5 animate-pulse" style={{backgroundColor: "var(--theme-accent)", animationDelay: "300ms",}}/>
            </div>
          )}
        </div>
      </div>
    </>
  )
}