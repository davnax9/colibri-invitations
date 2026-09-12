"use client"

type OrnamentPosition =
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right"

type Props = {
  positions: OrnamentPosition[]
}

const PRIMARY = "var(--theme-primary)"
const ACCENT = "var(--theme-accent)"
const SECONDARY = "var(--theme-secondary)"

const PAPER = "#FAF8F3"

/* =========================================================
   HOJA BOTÁNICA
========================================================= */

function Leaf({
  x,
  y,
  rotate = 0,
  scale = 1,
  opacity = 0.55,
}: {
  x: number
  y: number
  rotate?: number
  scale?: number
  opacity?: number
}) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      opacity={opacity}
    >
      <path
        d="
          M 0 0
          C 4 -10, 13 -15, 22 -15
          C 17 -6, 9 0, 0 0
          Z
        "
        fill={PRIMARY}
      />

      <path
        d="M 1 -1 C 8 -7, 14 -11, 20 -14"
        fill="none"
        stroke={SECONDARY}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.6"
      />
    </g>
  )
}


/* =========================================================
   PEQUEÑO BROTE
========================================================= */

function Bud({
  x,
  y,
  rotate = 0,
  scale = 1,
}: {
  x: number
  y: number
  rotate?: number
  scale?: number
}) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <path
        d="
          M 0 0
          C -7 -8, -5 -16, 0 -21
          C 5 -16, 7 -8, 0 0
          Z
        "
        fill={ACCENT}
        opacity="0.55"
      />

      <path
        d="M 0 0 C 0 -7, 0 -14, 0 -20"
        fill="none"
        stroke={PRIMARY}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </g>
  )
}


/* =========================================================
   FLOR BOTÁNICA DELICADA
========================================================= */

function BotanicalFlower({
  x,
  y,
  scale = 1,
}: {
  x: number
  y: number
  scale?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>

      {/* pétalos traseros */}
      <path
        d="M 0 0
           C -18 -7, -20 -20, -10 -28
           C -2 -34, 5 -20, 0 0"
        fill={ACCENT}
        opacity="0.42"
      />

      <path
        d="M 0 0
           C 18 -7, 20 -20, 10 -28
           C 2 -34, -5 -20, 0 0"
        fill={ACCENT}
        opacity="0.42"
      />

      {/* pétalos principales */}
      <path
        d="M 0 0
           C -14 -5, -18 -16, -11 -22
           C -4 -27, 1 -15, 0 0"
        fill={ACCENT}
        opacity="0.72"
      />

      <path
        d="M 0 0
           C 14 -5, 18 -16, 11 -22
           C 4 -27, -1 -15, 0 0"
        fill={ACCENT}
        opacity="0.72"
      />

      <path
        d="M 0 0
           C -8 -13, -5 -24, 1 -27
           C 8 -23, 7 -11, 0 0"
        fill={ACCENT}
        opacity="0.62"
      />

      {/* centro */}
      <circle
        cx="0"
        cy="0"
        r="4"
        fill={SECONDARY}
        opacity="0.9"
      />

      <circle
        cx="0"
        cy="0"
        r="1.7"
        fill={PAPER}
        opacity="0.9"
      />

    </g>
  )
}


/* =========================================================
   FLOR PEQUEÑA
========================================================= */

function SmallFlower({
  x,
  y,
  scale = 1,
}: {
  x: number
  y: number
  scale?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>

      <circle
        cx="0"
        cy="0"
        r="2.8"
        fill={SECONDARY}
        opacity="0.9"
      />

      {[0, 72, 144, 216, 288].map((rotation) => (
        <ellipse
          key={rotation}
          cx="0"
          cy="-7"
          rx="3.5"
          ry="8"
          fill={ACCENT}
          opacity="0.48"
          transform={`rotate(${rotation})`}
        />
      ))}

      <circle
        cx="0"
        cy="0"
        r="1.1"
        fill={PAPER}
        opacity="0.8"
      />

    </g>
  )
}


/* =========================================================
   DESTELLO FINO
========================================================= */

function Sparkle({
  x,
  y,
  size = 8,
}: {
  x: number
  y: number
  size?: number
}) {
  return (
    <g
      transform={`translate(${x} ${y})`}
      fill={ACCENT}
      opacity="0.65"
    >
      <path
        d={`
          M 0 -${size}
          L 1.4 -1.4
          L ${size} 0
          L 1.4 1.4
          L 0 ${size}
          L -1.4 1.4
          L -${size} 0
          L -1.4 -1.4
          Z
        `}
      />
    </g>
  )
}


/* =========================================================
   ORNAMENTO HORIZONTAL
========================================================= */

function FloralHorizontal({
  position,
}: {
  position: "top" | "bottom"
}) {
  const isBottom = position === "bottom"

  return (
    <div
      className={`
        pointer-events-none
        w-full
        overflow-hidden
        ${isBottom ? "rotate-180" : ""}
      `}
    >
      <svg
        viewBox="0 0 760 170"
        className="mx-auto h-auto w-full max-w-[760px]"
        aria-hidden="true"
      >

        <defs>

          <linearGradient
            id={`branch-${position}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor={PRIMARY}
              stopOpacity="0"
            />

            <stop
              offset="25%"
              stopColor={PRIMARY}
              stopOpacity="0.45"
            />

            <stop
              offset="50%"
              stopColor={ACCENT}
              stopOpacity="0.85"
            />

            <stop
              offset="75%"
              stopColor={PRIMARY}
              stopOpacity="0.45"
            />

            <stop
              offset="100%"
              stopColor={PRIMARY}
              stopOpacity="0"
            />
          </linearGradient>

        </defs>


        {/* =================================================
            RAMAS PRINCIPALES
        ================================================= */}

        <path
          d="
            M 35 118
            C 105 75, 155 82, 220 108
            C 275 130, 320 118, 360 88
          "
          fill="none"
          stroke={`url(#branch-${position})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="
            M 725 118
            C 655 75, 605 82, 540 108
            C 485 130, 440 118, 400 88
          "
          fill="none"
          stroke={`url(#branch-${position})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />


        {/* =================================================
            RAMAS FINAS
        ================================================= */}

        <path
          d="
            M 75 111
            C 125 94, 165 96, 208 112
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.3"
          strokeWidth="0.8"
        />

        <path
          d="
            M 685 111
            C 635 94, 595 96, 552 112
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.3"
          strokeWidth="0.8"
        />


        {/* =================================================
            HOJAS IZQUIERDA
        ================================================= */}

        <Leaf
          x={115}
          y={91}
          rotate={-35}
          scale={0.8}
        />

        <Leaf
          x={145}
          y={96}
          rotate={35}
          scale={0.7}
        />

        <Leaf
          x={182}
          y={105}
          rotate={-38}
          scale={0.75}
        />

        <Leaf
          x={220}
          y={112}
          rotate={34}
          scale={0.7}
        />

        <Leaf
          x={270}
          y={111}
          rotate={-42}
          scale={0.72}
        />


        {/* =================================================
            HOJAS DERECHA
        ================================================= */}

        <g transform="translate(760 0) scale(-1 1)">

          <Leaf
            x={115}
            y={91}
            rotate={-35}
            scale={0.8}
          />

          <Leaf
            x={145}
            y={96}
            rotate={35}
            scale={0.7}
          />

          <Leaf
            x={182}
            y={105}
            rotate={-38}
            scale={0.75}
          />

          <Leaf
            x={220}
            y={112}
            rotate={34}
            scale={0.7}
          />

          <Leaf
            x={270}
            y={111}
            rotate={-42}
            scale={0.72}
          />

        </g>


        {/* =================================================
            FLORES
        ================================================= */}

        <BotanicalFlower
          x={380}
          y={76}
          scale={0.9}
        />

        <SmallFlower
          x={270}
          y={111}
          scale={0.75}
        />

        <SmallFlower
          x={490}
          y={111}
          scale={0.75}
        />


        {/* =================================================
            BROTES
        ================================================= */}

        <Bud
          x={95}
          y={102}
          rotate={-55}
          scale={0.65}
        />

        <Bud
          x={300}
          y={104}
          rotate={-25}
          scale={0.55}
        />

        <g transform="translate(760 0) scale(-1 1)">
          <Bud
            x={95}
            y={102}
            rotate={-55}
            scale={0.65}
          />

          <Bud
            x={300}
            y={104}
            rotate={-25}
            scale={0.55}
          />
        </g>


        {/* =================================================
            DESTELLOS
        ================================================= */}

        <Sparkle
          x={125}
          y={65}
          size={5}
        />

        <Sparkle
          x={635}
          y={65}
          size={5}
        />

        <Sparkle
          x={320}
          y={47}
          size={4}
        />

        <Sparkle
          x={440}
          y={47}
          size={4}
        />

      </svg>
    </div>
  )
}


/* =========================================================
   ORNAMENTO DE ESQUINA
========================================================= */

function FloralCorner({
  position,
}: {
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
}) {
  const isRight =
    position === "top-right" ||
    position === "bottom-right"

  const isBottom =
    position === "bottom-left" ||
    position === "bottom-right"

  const transform = [
    isRight ? "scaleX(-1)" : "",
    isBottom ? "scaleY(-1)" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div
      className="
        pointer-events-none
        w-[180px]
        sm:w-[220px]
      "
      style={{
        transform,
        transformOrigin: "center",
      }}
    >
      <svg
        viewBox="0 0 220 220"
        className="h-auto w-full"
        aria-hidden="true"
      >

        {/* =================================================
            RAMA PRINCIPAL VERTICAL
        ================================================= */}

        <path
          d="
            M 22 205
            C 30 165, 42 132, 65 102
            C 88 72, 118 47, 158 22
          "
          fill="none"
          stroke={PRIMARY}
          strokeWidth="1.6"
          strokeOpacity="0.58"
          strokeLinecap="round"
        />


        {/* =================================================
            RAMA PRINCIPAL HORIZONTAL
        ================================================= */}

        <path
          d="
            M 22 205
            C 62 197, 98 188, 128 166
            C 158 144, 180 113, 199 76
          "
          fill="none"
          stroke={PRIMARY}
          strokeWidth="1.6"
          strokeOpacity="0.58"
          strokeLinecap="round"
        />


        {/* =================================================
            RAMAS FINAS
        ================================================= */}

        <path
          d="
            M 42 168
            C 67 158, 85 145, 105 123
          "
          fill="none"
          stroke={PRIMARY}
          strokeWidth="0.8"
          strokeOpacity="0.32"
        />

        <path
          d="
            M 65 103
            C 85 95, 101 83, 116 67
          "
          fill="none"
          stroke={PRIMARY}
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />


        {/* =================================================
            FLOR PRINCIPAL
        ================================================= */}

        <BotanicalFlower
          x={28}
          y={187}
          scale={0.95}
        />


        {/* =================================================
            FLOR SECUNDARIA
        ================================================= */}

        <SmallFlower
          x={104}
          y={126}
          scale={0.75}
        />


        {/* =================================================
            HOJAS
        ================================================= */}

        <Leaf
          x={51}
          y={160}
          rotate={-55}
          scale={0.8}
        />

        <Leaf
          x={73}
          y={148}
          rotate={35}
          scale={0.75}
        />

        <Leaf
          x={78}
          y={92}
          rotate={-45}
          scale={0.72}
        />

        <Leaf
          x={105}
          y={69}
          rotate={42}
          scale={0.7}
        />

        <Leaf
          x={134}
          y={47}
          rotate={-42}
          scale={0.68}
        />

        <Leaf
          x={157}
          y={29}
          rotate={35}
          scale={0.55}
        />


        {/* =================================================
            BROTES
        ================================================= */}

        <Bud
          x={92}
          y={136}
          rotate={-40}
          scale={0.55}
        />

        <Bud
          x={124}
          y={57}
          rotate={-35}
          scale={0.48}
        />


        {/* =================================================
            DESTELLOS
        ================================================= */}

        <Sparkle
          x={119}
          y={103}
          size={5}
        />

        <Sparkle
          x={158}
          y={72}
          size={4}
        />

        <Sparkle
          x={77}
          y={182}
          size={4}
        />

      </svg>
    </div>
  )
}


/* =========================================================
   ORNAMENTO LATERAL
========================================================= */

function FloralSide({
  position,
}: {
  position: "left" | "right"
}) {
  const isRight = position === "right"

  return (
    <div
      className="
        pointer-events-none
        w-[75px]
        sm:w-[105px]
        lg:w-[125px]
      "
      style={{
        transform: isRight
          ? "scaleX(-1)"
          : undefined,
      }}
    >
      <svg
        viewBox="0 0 160 620"
        className="h-auto w-full"
        aria-hidden="true"
      >

        {/* =================================================
            RAMA PRINCIPAL
        ================================================= */}

        <path
          d="
            M 22 600
            C 34 520, 28 460, 52 392
            C 74 330, 72 272, 98 212
            C 116 170, 126 120, 138 34
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.58"
          strokeWidth="1.6"
          strokeLinecap="round"
        />


        {/* =================================================
            RAMAS SECUNDARIAS
        ================================================= */}

        <path
          d="
            M 34 486
            C 64 472, 83 451, 97 419
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.3"
          strokeWidth="0.8"
        />

        <path
          d="
            M 51 352
            C 76 337, 93 316, 105 284
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.3"
          strokeWidth="0.8"
        />

        <path
          d="
            M 73 274
            C 95 259, 108 239, 117 216
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />


        {/* =================================================
            FLOR INFERIOR
        ================================================= */}

        <BotanicalFlower
          x={25}
          y={575}
          scale={0.9}
        />


        {/* =================================================
            FLOR CENTRAL
        ================================================= */}

        <SmallFlower
          x={62}
          y={342}
          scale={0.72}
        />


        {/* =================================================
            HOJAS
        ================================================= */}

        <Leaf
          x={40}
          y={500}
          rotate={-55}
          scale={0.82}
        />

        <Leaf
          x={48}
          y={451}
          rotate={42}
          scale={0.78}
        />

        <Leaf
          x={63}
          y={390}
          rotate={-48}
          scale={0.75}
        />

        <Leaf
          x={77}
          y={276}
          rotate={42}
          scale={0.72}
        />

        <Leaf
          x={94}
          y={210}
          rotate={-48}
          scale={0.68}
        />

        <Leaf
          x={112}
          y={145}
          rotate={42}
          scale={0.62}
        />

        <Leaf
          x={125}
          y={90}
          rotate={-42}
          scale={0.58}
        />


        {/* =================================================
            BROTES
        ================================================= */}

        <Bud
          x={52}
          y={468}
          rotate={-45}
          scale={0.52}
        />

        <Bud
          x={87}
          y={305}
          rotate={-35}
          scale={0.48}
        />

        <Bud
          x={116}
          y={175}
          rotate={-40}
          scale={0.45}
        />


        {/* =================================================
            DESTELLOS
        ================================================= */}

        <Sparkle
          x={79}
          y={320}
          size={5}
        />

        <Sparkle
          x={110}
          y={174}
          size={4}
        />

        <Sparkle
          x={55}
          y={430}
          size={4}
        />

      </svg>
    </div>
  )
}


/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function QuinceanosOrnaments({
  positions,
}: Props) {
  return (
    <div className="pointer-events-none">

      {positions.includes("top") && (
        <FloralHorizontal position="top" />
      )}

      {positions.includes("bottom") && (
        <FloralHorizontal position="bottom" />
      )}

      {positions.includes("top-left") && (
        <FloralCorner position="top-left" />
      )}

      {positions.includes("top-right") && (
        <FloralCorner position="top-right" />
      )}

      {positions.includes("bottom-left") && (
        <FloralCorner position="bottom-left" />
      )}

      {positions.includes("bottom-right") && (
        <FloralCorner position="bottom-right" />
      )}

      {positions.includes("left") && (
        <FloralSide position="left" />
      )}

      {positions.includes("right") && (
        <FloralSide position="right" />
      )}

    </div>
  )
}