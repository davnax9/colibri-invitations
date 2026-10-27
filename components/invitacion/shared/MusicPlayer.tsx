"use client"

import YouTube, {YouTubeProps, YouTubePlayer} from "react-youtube"
import {forwardRef,useCallback,useEffect,useImperativeHandle,useState} from "react"

export type MusicPlayerRef = {
  play: () => void
  pause: () => void
  toggle: () => void
}

type Props = {
  videoId: string
  title?: string | null
  artist?: string | null
  autoplay?: boolean
  onReady?: () => void
}

type YouTubeReadyEvent = Parameters<NonNullable<YouTubeProps["onReady"]>>[0]
type YouTubeStateChangeEvent = Parameters<NonNullable<YouTubeProps["onStateChange"]>>[0]
type YouTubeErrorEvent = Parameters<NonNullable<YouTubeProps["onError"]>>[0]

const MusicPlayer = forwardRef<MusicPlayerRef, Props>(
  function MusicPlayer({videoId,title,artist,autoplay = false,onReady},ref) {
    const [playing, setPlaying] = useState(false)
    const [player, setPlayer] = useState<YouTubePlayer | null>(null)
    const [ready, setReady] = useState(false)

    const opts: YouTubeProps["opts"] = {
      width: "200",
      height: "200",
      playerVars: {
        autoplay: autoplay ? 1 : 0,
        controls: 0,
        loop: 1,
        playlist: videoId,
        playsinline: 1,
        rel: 0,
      },
    }

    const play = useCallback(() => {
      if (!player || !ready) {
        return
      }

      player.playVideo()
    }, [player, ready])

    const pause = useCallback(() => {
      if (!player || !ready) return

      player.pauseVideo()
    }, [player, ready])

    const toggle = useCallback(() => {
      if (!player || !ready) return

      const currentState = player.getPlayerState()

      if (currentState === 1 || currentState === 3) {
        player.pauseVideo()
      } else {
        player.playVideo()
      }
    }, [player, ready])

    useImperativeHandle(ref,() => ({play,pause,toggle}),[play, pause, toggle])

    const handleReady: YouTubeProps["onReady"] = useCallback(
      (event: YouTubeReadyEvent) => {
        console.log("YouTube listo")

        setPlayer(event.target)
        setReady(true)

        console.log(
          "Estado inicial:",
          event.target.getPlayerState()
        )
      },
      [onReady]
    )

    const handleStateChange: YouTubeProps["onStateChange"] = useCallback((event: YouTubeStateChangeEvent) => {
        switch (event.data) {
          case 1:
            console.log("✅ YouTube está reproduciendo")
            setPlaying(true)
            break

          case 2:
            console.log("⏸️ YouTube está pausado")
            setPlaying(false)
            break

          case 3:
            console.log("⏳ YouTube está cargando...")
            break

          case 0:
            console.log("🔚 YouTube terminó")
            setPlaying(false)
            break

          case -1:
            console.log("ℹ️ YouTube UNSTARTED")
            setPlaying(false)
            break

          default:
            setPlaying(false)
        }
      }, [])

    const handleError: YouTubeProps["onError"] = useCallback((event: YouTubeErrorEvent) => {
        setPlaying(false)
      }, [])

    useEffect(() => {
      if (!player || !ready || !autoplay || playing) {
        return
      }

      const startMusicOnInteraction = () => {
        const state = player.getPlayerState()

        if (state === 1 || state === 3) {
          return
        }

        player.playVideo()
      }

      document.addEventListener(
        "pointerdown",
        startMusicOnInteraction,
        { passive: true }
      )

      document.addEventListener(
        "keydown",
        startMusicOnInteraction
      )

      return () => {
        document.removeEventListener(
          "pointerdown",
          startMusicOnInteraction
        )

        document.removeEventListener(
          "keydown",
          startMusicOnInteraction
        )
      }
    }, [player, ready, autoplay, playing])

    return (
      <>
        {/* ================================================= */}
        {/* YOUTUBE */}
        {/* ================================================= */}

        <div
          aria-hidden="true"
          className="fixed pointer-events-none overflow-hidden"
          style={{
            width: "1px",
            height: "1px",
            opacity: 0,
            left: 0,
            top: 0,
            clipPath: "inset(50%)",
            contain: "strict",
          }}
        >
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={handleReady}
            onStateChange={handleStateChange}
            onError={handleError}
          />
        </div>

        {/* ================================================= */}
        {/* CONTROL DE MÚSICA */}
        {/* ================================================= */}

        {/* <div className="fixed bottom-5 right-5 z-[9998]"> */}
        <div
          className="fixed z-[99999]"
          style={{
            right: "max(16px, env(safe-area-inset-right))",
            bottom: "max(16px, env(safe-area-inset-bottom))",
            isolation: "isolate",
          }}
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              px-3
              py-2
              shadow-xl
              backdrop-blur-md
            "
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--theme-primary) 90%, transparent)",
              color: "white",
              border:
                "1px solid color-mix(in srgb, var(--theme-accent) 45%, transparent)",
            }}
          >
            <button
              type="button"
              onClick={toggle}
              disabled={!ready}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                transition
                hover:scale-105
                disabled:opacity-50
              "
              style={{
                backgroundColor: "var(--theme-surface)",
                color: "var(--theme-primary)",
              }}
              aria-label={
                playing
                  ? "Pausar música"
                  : "Reproducir música"
              }
            >
              {playing ? "Ⅱ" : "▶"}
            </button>

            <div className="hidden max-w-40 sm:block">
              <p className="truncate text-sm font-medium">
                {title ?? "Nuestra canción"}
              </p>

              {artist && (
                <p className="truncate text-xs text-white/60">
                  {artist}
                </p>
              )}

              {!ready && (
                <p className="text-[10px] text-white/50">
                  Cargando música...
                </p>
              )}

              {ready && !playing && (
                <p className="text-[10px] text-white/60">
                  Presiona para reproducir
                </p>
              )}
            </div>

            {playing && (
              <div className="mr-2 flex items-end gap-0.5">
                <span
                  className="h-2 w-0.5 animate-pulse"
                  style={{
                    backgroundColor:
                      "var(--theme-accent)",
                  }}
                />

                <span
                  className="h-4 w-0.5 animate-pulse"
                  style={{
                    backgroundColor:
                      "var(--theme-accent)",
                    animationDelay: "150ms",
                  }}
                />

                <span
                  className="h-3 w-0.5 animate-pulse"
                  style={{
                    backgroundColor:
                      "var(--theme-accent)",
                    animationDelay: "300ms",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
)

MusicPlayer.displayName = "MusicPlayer"

export default MusicPlayer