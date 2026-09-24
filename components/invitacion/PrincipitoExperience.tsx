"use client"

import { useState, type ReactNode } from "react"
import PrincipitoEnvelope from "./PrincipitoEnvelope"

type Props = {
  children: ReactNode
}

export default function PrincipitoExperience({
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
        <PrincipitoEnvelope onOpen={handleOpen} />
      )}
    </>
  )
}