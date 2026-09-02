"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Design = {
  id: string
  category: "Boda" | "XV años"
  name: string
  description: string
  image: string
  href: string
}

type Props = {
  designs: Design[]
}

export default function InvitationBook({ designs }: Props) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTurning, setIsTurning] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isMobileTurning, setIsMobileTurning] = useState(false)

  const totalPages = designs.length
  const leftPage = designs[currentPage]
  const rightPage = designs[currentPage + 1]

  /*
   * Hoja siguiente
   */
  const nextLeftPage = designs[currentPage + 2]
  const nextRightPage = designs[currentPage + 3]

  /*
   * Hoja anterior
   */
  const previousLeftPage = designs[currentPage - 2]
  const previousRightPage = designs[currentPage - 1]

  const canGoNext = currentPage + 2 < totalPages
  const canGoPrevious = currentPage > 0

  /* ========================================================= */
  /* SIGUIENTE */
  /* ========================================================= */
  function goNext() {
    if (isTurning || !canGoNext) return

    setDirection("next")
    setIsTurning(true)

    setTimeout(() => {
      setCurrentPage((current) => current + 2)
      setIsTurning(false)
    }, 850)
  }

  /* ========================================================= */
  /* ANTERIOR */
  /* ========================================================= */

  function goPrevious() {
    if (isTurning || !canGoPrevious) return

    setDirection("prev")
    setIsTurning(true)

    setTimeout(() => {
      setCurrentPage((current) => current - 2)
      setIsTurning(false)
    }, 850)
  }

  function goMobileNext() {
    if (isMobileTurning || currentPage >= designs.length - 1) return

    setIsMobileTurning(true)

    setTimeout(() => {
      setCurrentPage((current) => current + 1)
      setIsMobileTurning(false)
    }, 500)
  }

  function goMobilePrevious() {
    if (isMobileTurning || currentPage <= 0) return

    setIsMobileTurning(true)

    setTimeout(() => {
      setCurrentPage((current) => current - 1)
      setIsMobileTurning(false)
    }, 500)
  }

  const displayLeftPage = isTurning && direction === "prev" ? previousLeftPage : leftPage
  const displayRightPage = rightPage

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* ===================================================== */}
      {/* LIBRO */}
      {/* ===================================================== */}
      <div className="relative">
        {/* =================================================== */}
        {/* SOMBRA DEL LIBRO */}
        {/* =================================================== */}
        <div className="absolute -bottom-6.25 left-1/2 h-10 w-[80%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl" />
        {/* =================================================== */}
        {/* DESKTOP */}
        {/* =================================================== */}
        <div className="relative mx-auto hidden w-full max-w-5xl md:block" style={{perspective: "2000px"}}>
          {/* ================================================= */}
          {/* CONTENEDOR DEL LIBRO */}
          {/* ================================================= */}
          <div className="relative grid grid-cols-2 overflow-visible" style={{transformStyle: "preserve-3d"}}>
            {/* =============================================== */}
            {/* PÁGINA IZQUIERDA */}
            {/* =============================================== */}
            <BookPage design={displayLeftPage} side="left"/>
            {/* =============================================== */}
            {/* PÁGINA DERECHA */}
            {/* =============================================== */}
            <BookPage design={displayRightPage} side="right"/>
            {/* ================================================= */}
            {/* ANIMACIÓN HACIA ADELANTE */}
            {/* ================================================= */}
            {isTurning && direction === "next" && rightPage && nextLeftPage && (
                <div className="book-page-flip-next absolute inset-y-0 right-0 z-30 w-1/2" style={{transformStyle: "preserve-3d",transformOrigin: "left center"}}>
                  {/* ----------------------------------------- */}
                  {/* FRENTE */}
                  {/* ----------------------------------------- */}
                  <div className="absolute inset-0 overflow-hidden rounded-r-2xl border border-[#DCE4DF] bg-white shadow-xl" style={{backfaceVisibility: "hidden"}}>
                    <BookPage design={rightPage} side="right" floating/>
                  </div>
                  {/* ----------------------------------------- */}
                  {/* REVERSO */}
                  {/* ----------------------------------------- */}
                  <div className="absolute inset-0 overflow-hidden rounded-l-2xl border border-[#DCE4DF] bg-white shadow-xl" style={{transform: "rotateY(180deg)", backfaceVisibility: "hidden"}}>
                    <BookPage design={nextLeftPage} side="left" floating/>
                  </div>
                </div>
              )}
            {/* ================================================= */}
            {/* ANIMACIÓN HACIA ATRÁS */}
            {/* ================================================= */}
            {isTurning && direction === "prev" && leftPage && previousRightPage && (
                <div className="book-page-flip-prev absolute inset-y-0 left-0 z-30 w-1/2" style={{transformStyle: "preserve-3d", transformOrigin: "right center"}}>
                  {/* ----------------------------------------- */}
                  {/* FRENTE */}
                  {/* Página izquierda actual */}
                  {/* ----------------------------------------- */}
                  <div className="absolute inset-0 overflow-hidden rounded-l-2xl border border-[#DCE4DF] bg-white shadow-xl" style={{backfaceVisibility: "hidden"}}>
                    <BookPage design={leftPage} side="left" floating/>
                  </div>
                  {/* ----------------------------------------- */}
                  {/* REVERSO */}
                  {/* Página derecha de la hoja anterior */}
                  {/* ----------------------------------------- */}
                  <div className="absolute inset-0 overflow-hidden rounded-r-2xl border border-[#DCE4DF] bg-white shadow-xl" style={{transform: "rotateY(180deg)", backfaceVisibility: "hidden"}}>
                    <BookPage design={previousRightPage} side="right" floating/>
                  </div>
                </div>
              )}
            {/* ================================================= */}
            {/* CENTRO DEL LIBRO */}
            {/* ================================================= */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-40 w-8 -translate-x-1/2">
              {/* Línea central */}
              <div className="absolute inset-y-0 left-1/2 w-px bg-black/15" />
              {/* Sombra del centro */}
              <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black/5 via-transparent to-black/5" />
            </div>
          </div>
        </div>
        {/* ===================================================== */}
        {/* VERSIÓN MÓVIL */}
        {/* ===================================================== */}
        <div className="relative mx-auto w-full max-w-sm md:hidden">
          {/* =============================================== */}
          {/* IMAGEN DE LA INVITACIÓN */}
          {/* =============================================== */}
          <div className="relative">
            {/* BOTÓN ANTERIOR */}
            <button
              type="button"
              onClick={goMobilePrevious}
              disabled={currentPage <= 0 || isMobileTurning}
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE4DF] bg-white/95 text-3xl font-light leading-none text-[#2F5D50] shadow-lg transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30" aria-label="Diseño anterior"
            >
              <span className="-mt-1">‹</span>
            </button>
            {/* IMAGEN */}
            {leftPage && (
              <Link
                href={leftPage.href}
                className={`block overflow-hidden rounded-2xl border border-[#DCE4DF] bg-white shadow-2xl transition-all duration-500 ${ isMobileTurning ? "scale-[0.98] opacity-70" : "scale-100 opacity-100" }`}
              >
                <div className="relative aspect-4/5">
                  <Image
                    src={leftPage.image}
                    alt={leftPage.name}
                    fill
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                  {/* DEGRADADO */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                  {/* INFORMACIÓN SOBRE LA IMAGEN */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]">{leftPage.category}</p>
                    <h3 className="mt-1 text-2xl font-bold">{leftPage.name}</h3>
                  </div>
                </div>
              </Link>
            )}
            {/* BOTÓN SIGUIENTE */}
            <button
              type="button"
              onClick={goMobileNext}
              disabled={currentPage >= totalPages - 1 || isMobileTurning}
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE4DF] bg-white/95 text-3xl font-light leading-none text-[#2F5D50] shadow-lg transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Siguiente diseño"
            >
              <span className="-mt-1">›</span>
            </button>
          </div>
          {/* =============================================== */}
          {/* INFORMACIÓN DEL DISEÑO ACTUAL */}
          {/* =============================================== */}
          {leftPage && (
            <div className="mt-6 rounded-2xl bg-white p-5 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">{leftPage.category}</p>
              <h3 className="mt-2 text-xl font-bold text-[#263832]">{leftPage.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#687A72]">{leftPage.description}</p>
              <Link href={leftPage.href} className="mt-5 inline-flex rounded-xl bg-[#2F5D50] px-6 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-95">
                Ver invitación<span className="ml-2">→</span>
              </Link>
            </div>
          )}
          {/* =============================================== */}
          {/* INDICADOR */}
          {/* =============================================== */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {designs.map((design, index) => (
              <button
                key={design.id}
                type="button"
                onClick={() => {
                  if (!isMobileTurning && !isTurning) {
                    setCurrentPage(index)
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${currentPage === index ? "w-7 bg-[#2F5D50]" : "w-2 bg-[#C9D3CD]"}`} aria-label={`Ver diseño ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* ===================================================== */}
        {/* CONTROLES LATERALES */}
        {/* ===================================================== */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between md:flex">
          {/* ================================================= */}
          {/* ANTERIOR */}
          {/* ================================================= */}
          <button type="button" onClick={goPrevious} disabled={!canGoPrevious || isTurning} className="pointer-events-auto -ml-16 flex h-12 w-12 items-center justify-center rounded-full border border-[#DCE4DF] bg-white text-3xl font-light leading-none text-[#2F5D50] shadow-md transition hover:-translate-x-1 hover:bg-[#F5F2EB] disabled:cursor-not-allowed disabled:opacity-30" aria-label="Diseños anteriores">
            <span className="-mt-1">‹</span>
          </button>
          {/* ================================================= */}
          {/* SIGUIENTE */}
          {/* ================================================= */}
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext || isTurning}
            className="pointer-events-auto -mr-16 flex h-12 w-12 items-center justify-center rounded-full border border-[#DCE4DF] bg-white text-3xl font-light leading-none text-[#2F5D50] shadow-md transition hover:translate-x-1 hover:bg-[#F5F2EB] disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Siguientes diseños"
          >
            <span className="-mt-1">›</span>
          </button>
        </div>
      </div>
        {/* ===================================================== */}
        {/* INFORMACIÓN DE LOS DISEÑOS */}
        {/* ===================================================== */}
        {leftPage && (
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2">
            {/* ================================================= */}
            {/* INFORMACIÓN DISEÑO IZQUIERDO */}
            {/* ================================================= */}
            <div className="rounded-2xl bg-white p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">{leftPage.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#263832]">{leftPage.name}</h3>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#687A72]">{leftPage.description}</p>
                <Link href={leftPage.href} className="mt-5 inline-flex rounded-xl bg-[#2F5D50] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#244A40]">
                    Ver invitación<span className="ml-2">→</span>
                </Link>
            </div>
            {/* ================================================= */}
            {/* INFORMACIÓN DISEÑO DERECHO */}
            {/* ================================================= */}
            {rightPage && (
            <div className="rounded-2xl bg-white p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">{rightPage.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#263832]">{rightPage.name}</h3>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#687A72]">{rightPage.description}</p>
                <Link href={rightPage.href} className="mt-5 inline-flex rounded-xl bg-[#2F5D50] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#244A40]">
                    Ver invitación <span className="ml-2">→</span>
                </Link>
            </div>
            )}
        </div>
        )}
      {/* ===================================================== */}
      {/* INDICADORES */}
      {/* ===================================================== */}
      <div className="mt-8 hidden items-center justify-center gap-2 md:flex">
        {Array.from({
          length: Math.ceil(designs.length / 2),
        }).map((_, index) => {
          const active = Math.floor(currentPage / 2) === index
          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (!isTurning) {
                  setCurrentPage(index * 2)
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                active
                  ? "w-7 bg-[#2F5D50]"
                  : "w-2 bg-[#C9D3CD]"
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          )
        })}
      </div>
      {/* ===================================================== */}
      {/* TEXTO */}
      {/* ===================================================== */}
      <p className="mt-4 text-center text-xs text-[#8A9A8F]">
        Explora nuestros diseños y haz clic sobre una invitación para verla.
      </p>
      {/* ===================================================== */}
      {/* ANIMACIONES */}
      {/* ===================================================== */}
      <style jsx>{`
        /*
         * =====================================================
         * HOJA HACIA ADELANTE
         * =====================================================
         *
         * Ejemplo:
         *
         *     [ 0 ] [ 1 ]
         *
         * Presionamos >
         *
         *     [ 0 ] [ 1 ]  → gira
         *
         *     [ 2 ] [ 3 ]
         *
         * Resultado:
         *
         *     [ 2 ] [ 3 ]
         */

        .book-page-flip-next {
          animation:
            bookFlipNext
            850ms
            cubic-bezier(0.4, 0, 0.2, 1)
            forwards;
        }

        @keyframes bookFlipNext {

          0% {
            transform: rotateY(0deg);
          }

          100% {
            transform: rotateY(-180deg);
          }

        }


        /*
         * =====================================================
         * HOJA HACIA ATRÁS
         * =====================================================
         *
         * Ejemplo:
         *
         *     [ 2 ] [ 3 ]
         *
         * Presionamos <
         *
         * La página 2 gira hacia la derecha.
         *
         *     [ 2 ] → gira
         *
         * Debajo queda:
         *
         *     [ 0 ] [ 3 ]
         *
         * El reverso de la hoja es la página 1.
         *
         * Resultado:
         *
         *     [ 0 ] [ 1 ]
         */

        .book-page-flip-prev {
          animation:
            bookFlipPrev
            850ms
            cubic-bezier(0.4, 0, 0.2, 1)
            forwards;
        }

        @keyframes bookFlipPrev {

          0% {
            transform: rotateY(0deg);
          }

          100% {
            transform: rotateY(180deg);
          }

        }

      `}</style>
    </div>
  )
}


/* ========================================================= */
/* COMPONENTE DE PÁGINA */
/* ========================================================= */

type BookPageProps = {
  design?: Design
  side: "left" | "right"
  floating?: boolean
}

function BookPage({
  design,
  side,
  floating = false,
}: BookPageProps) {

  /* ======================================================= */
  /* PÁGINA VACÍA */
  /* ======================================================= */

  if (!design) {

    return (

      <div
        className={`relative aspect-4/5 bg-[#F7F4EC] ${
          side === "left"
            ? "rounded-l-2xl"
            : "rounded-r-2xl"
        }`}
      />

    )

  }


  /* ======================================================= */
  /* PÁGINA */
  /* ======================================================= */

  return (

    <Link
      href={design.href}
      className={`relative block aspect-4/5 overflow-hidden border border-[#DCE4DF] bg-white ${
        side === "left"
          ? "rounded-l-2xl"
          : "rounded-r-2xl"
      } ${
        floating
          ? "absolute inset-0"
          : ""
      }`}
      style={{
        backfaceVisibility: "hidden",
      }}
    >
      {/* =================================================== */}
      {/* IMAGEN */}
      {/* =================================================== */}
      <Image
        src={design.image}
        alt={`Diseño ${design.name}`}
        fill
        sizes="50vw"
        className="object-cover object-top"
      />
      {/* =================================================== */}
      {/* DEGRADADO */}
      {/* =================================================== */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black/50 to-transparent" />
      {/* =================================================== */}
      {/* CATEGORÍA */}
      {/* =================================================== */}
      <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#2F5D50] shadow-sm backdrop-blur">
        {design.category}
      </div>
      {/* =================================================== */}
      {/* INFORMACIÓN */}
      {/* =================================================== */}
      <div className="absolute bottom-5 left-5 right-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.2em]">
          {design.category}
        </p>
        <p className="mt-1 text-xl font-bold">
          {design.name}
        </p>
      </div>
    </Link>

  )
}