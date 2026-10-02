"use client"

import { useState, type ReactNode } from "react"
import KpopWarriorsEnvelope from "./KpopWarriorsEnvelope"

type Props = {
  children: ReactNode
}

export default function KpopWarriorsExperience({
  children,
}: Props) {
  const [opened, setOpened] = useState(false)

  function handleOpen() {
    setOpened(true)
  }

  return (
    <>
      {opened && children}

      {!opened && (
        <KpopWarriorsEnvelope onOpen={handleOpen} />
      )}
    </>
  )
}