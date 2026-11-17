
"use client"

import { useState, type ReactNode } from "react"
import KuromiEnvelope from "./KuromiEnvelope"

type Props = {
  children: ReactNode
}

export default function KuromiExperience({
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
        <KuromiEnvelope onOpen={handleOpen} />
      )}
    </>
  )
}
