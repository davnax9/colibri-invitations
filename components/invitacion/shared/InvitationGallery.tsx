"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"

type InvitationGalleryProps = {
  event: {
    name: string
    eventDate: Date

    details: {
      title: string | null
      subtitle: string | null
      description: string | null
      phrase: string | null
      groomName: string | null
      brideName: string | null
      quinceaneraName: string | null
      dressCode: string | null
    } | null

    locations: {
      id: string
      name: string
      address: string | null
      mapsUrl: string | null
    }[]

    schedules: {
      id: string
      title: string
      date: Date
      time: string | null
      description: string | null
      location: {
        name: string
      } | null
    }[]

    photos: {
      id: string
      url: string
      title: string | null
      isCover: boolean
    }[]

    music: {
      url: string
      title: string | null
      artist: string | null
      autoplay: boolean
    } | null
  }
}

export default function InvitationGallery({
  event,
}: InvitationGalleryProps) {

  const containerRef = useRef<HTMLDivElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)

  if (event.photos.length === 0) {
    return null
  }

  function scrollToPhoto(index: number) {
    const container = containerRef.current

    if (!container) return

    const photoWidth = container.clientWidth

    container.scrollTo({
      left: photoWidth * index,
      behavior: "smooth",
    })

    setCurrentIndex(index)
  }

  function handleScroll() {
    const container = containerRef.current

    if (!container) return

    const index = Math.round(
      container.scrollLeft / container.clientWidth
    )

    setCurrentIndex(index)
  }

  function previousPhoto() {
    const newIndex =
      currentIndex === 0
        ? event.photos.length - 1
        : currentIndex - 1

    scrollToPhoto(newIndex)
  }

  function nextPhoto() {
    const newIndex =
      currentIndex === event.photos.length - 1
        ? 0
        : currentIndex + 1

    scrollToPhoto(newIndex)
  }

  return (
    <section
      className="w-full max-w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <div className="mx-auto w-full max-w-5xl min-w-0">

        {/* ENCABEZADO */}

        <div className="text-center">

          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Nuestros momentos
          </p>

          <h2
            className="mt-4 font-serif text-4xl md:text-5xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Recuerdos
          </h2>

          <div
            className="mx-auto mt-6 h-px w-16"
            style={{
              backgroundColor: "var(--theme-accent)",
            }}
          />

        </div>

        {/* CARRUSEL */}

        <div className="relative mt-10 w-full min-w-0 sm:mt-14">

          {/* ANTERIOR */}

          {event.photos.length > 1 && (
            <button
              type="button"
              onClick={previousPhoto}
              aria-label="Fotografía anterior"
              className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:scale-105 md:flex"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          )}

          {/* FOTOGRAFÍAS */}

          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide"
            style={{
              overscrollBehaviorX: "contain",
            }}
          >
            {event.photos.map((photo) => (
              <div
                key={photo.id}
                className="w-full min-w-full shrink-0 snap-center px-1 sm:px-2"
              >
                <div
                  className="relative mx-auto aspect-4/5 w-full max-w-2xl overflow-hidden rounded-3xl border shadow-xl"
                  style={{
                    borderColor: "var(--theme-accent)",
                    backgroundColor: "var(--theme-surface)",
                  }}
                >

                  <Image
                    src={photo.url}
                    alt={
                      photo.title ??
                      "Fotografía de la celebración"
                    }
                    fill
                    sizes="(max-width: 640px) 92vw, 700px"
                    className="object-cover"
                  />

                  {/* OVERLAY */}

                  {photo.title && (
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/20 to-transparent px-6 pb-6 pt-20">
                      <p className="text-center text-sm font-medium text-white drop-shadow">
                        {photo.title}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

          {/* SIGUIENTE */}

          {event.photos.length > 1 && (
            <button
              type="button"
              onClick={nextPhoto}
              aria-label="Siguiente fotografía"
              className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:scale-105 md:flex"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}

        </div>

        {/* INDICADORES */}

        {event.photos.length > 1 && (
          <div className="mt-7 flex justify-center gap-2">
            {event.photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => scrollToPhoto(index)}
                aria-label={`Ir a fotografía ${index + 1}`}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width:
                    index === currentIndex
                      ? "2rem"
                      : "0.625rem",
                  backgroundColor:
                    index === currentIndex
                      ? "var(--theme-primary)"
                      : "var(--theme-accent)",
                }}
              />
            ))}
          </div>
        )}

        {/* INDICACIÓN CELULAR */}

        {event.photos.length > 1 && (
          <p
            className="mt-4 text-center text-xs opacity-50 md:hidden"
            style={{
              color: "var(--theme-text)",
            }}
          >
            Desliza para ver más fotografías
          </p>
        )}

      </div>
    </section>
  )
}