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

/* =========================================================
   ORNAMENTO HORIZONTAL
   ========================================================= */

function FloralHorizontal({
  position,
}: {
  position: "top" | "bottom"
}) {
  const gradientId = `gold-horizontal-${position}`
  const flowerId = `flower-horizontal-${position}`

  return (
    <div
      className={[
        "pointer-events-none w-full overflow-hidden",
        position === "bottom" ? "rotate-180" : "",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 760 180"
        className="mx-auto h-auto w-full max-w-[760px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
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
              offset="18%"
              stopColor={PRIMARY}
              stopOpacity="0.35"
            />

            <stop
              offset="50%"
              stopColor={ACCENT}
              stopOpacity="0.9"
            />

            <stop
              offset="82%"
              stopColor={PRIMARY}
              stopOpacity="0.35"
            />

            <stop
              offset="100%"
              stopColor={PRIMARY}
              stopOpacity="0"
            />
          </linearGradient>

          <radialGradient
            id={flowerId}
            cx="50%"
            cy="50%"
            r="60%"
          >
            <stop
              offset="0%"
              stopColor={ACCENT}
              stopOpacity="0.9"
            />

            <stop
              offset="60%"
              stopColor={PRIMARY}
              stopOpacity="0.65"
            />

            <stop
              offset="100%"
              stopColor={SECONDARY}
              stopOpacity="0.15"
            />
          </radialGradient>
        </defs>

        {/* Rama izquierda */}
        <path
          d="
            M 35 105
            C 95 78, 135 82, 180 105
            C 225 128, 270 125, 315 98
          "
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Rama derecha */}
        <path
          d="
            M 725 105
            C 665 78, 625 82, 580 105
            C 535 128, 490 125, 445 98
          "
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Ramas secundarias */}
        <path
          d="
            M 65 125
            C 145 105, 200 110, 265 125
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        <path
          d="
            M 695 125
            C 615 105, 560 110, 495 125
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Flor central */}
        <g transform="translate(380 82)">
          {Array.from({ length: 8 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="-17"
              rx="9"
              ry="18"
              fill={`url(#${flowerId})`}
              transform={`rotate(${index * 45})`}
            />
          ))}

          <circle
            cx="0"
            cy="0"
            r="7"
            fill={SECONDARY}
            fillOpacity="0.85"
          />

          <circle
            cx="0"
            cy="0"
            r="3"
            fill="#FAF8F3"
            fillOpacity="0.8"
          />
        </g>

        {/* Flores laterales */}
        <SmallFlower x={255} y={112} />
        <SmallFlower x={505} y={112} />

        {/* Hojas */}
        <g
          fill={PRIMARY}
          fillOpacity="0.55"
        >
          <ellipse
            cx="150"
            cy="91"
            rx="5"
            ry="13"
            transform="rotate(-48 150 91)"
          />

          <ellipse
            cx="185"
            cy="105"
            rx="5"
            ry="13"
            transform="rotate(48 185 105)"
          />

          <ellipse
            cx="225"
            cy="113"
            rx="5"
            ry="13"
            transform="rotate(-48 225 113)"
          />

          <ellipse
            cx="610"
            cy="91"
            rx="5"
            ry="13"
            transform="rotate(48 610 91)"
          />

          <ellipse
            cx="575"
            cy="105"
            rx="5"
            ry="13"
            transform="rotate(-48 575 105)"
          />

          <ellipse
            cx="535"
            cy="113"
            rx="5"
            ry="13"
            transform="rotate(48 535 113)"
          />
        </g>

        {/* Destellos */}
        <g
          fill={PRIMARY}
          fillOpacity="0.55"
          fontFamily="serif"
        >
          <text
            x="115"
            y="70"
            fontSize="13"
          >
            ✦
          </text>

          <text
            x="625"
            y="70"
            fontSize="13"
          >
            ✦
          </text>

          <text
            x="300"
            y="55"
            fontSize="9"
          >
            ✦
          </text>

          <text
            x="450"
            y="55"
            fontSize="9"
          >
            ✦
          </text>
        </g>
      </svg>
    </div>
  )
}


/* =========================================================
   FLOR PEQUEÑA
   ========================================================= */

function SmallFlower({
  x,
  y,
}: {
  x: number
  y: number
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle
        cx="0"
        cy="0"
        r="5"
        fill={PRIMARY}
        fillOpacity="0.65"
      />

      {[0, 45, 90, 135].map((rotation) => (
        <ellipse
          key={rotation}
          cx="0"
          cy="-11"
          rx="5"
          ry="11"
          fill={ACCENT}
          fillOpacity="0.5"
          transform={`rotate(${rotation})`}
        />
      ))}
    </g>
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
      className="pointer-events-none"
      style={{
        transform,
        transformOrigin: "center",
      }}
    >
      <svg
        viewBox="0 0 220 220"
        width="220"
        height="220"
        aria-hidden="true"
      >
        {/* Rama vertical */}
        <path
          d="
            M 18 205
            C 25 165, 35 130, 60 100
            C 82 74, 110 48, 150 25
          "
          fill="none"
          stroke={PRIMARY}
          strokeWidth="2"
          strokeOpacity="0.65"
          strokeLinecap="round"
        />

        {/* Rama horizontal */}
        <path
          d="
            M 18 205
            C 58 198, 95 190, 125 170
            C 153 151, 176 124, 198 82
          "
          fill="none"
          stroke={PRIMARY}
          strokeWidth="2"
          strokeOpacity="0.65"
          strokeLinecap="round"
        />

        {/* Rama secundaria */}
        <path
          d="
            M 42 166
            C 66 157, 85 145, 103 128
          "
          fill="none"
          stroke={PRIMARY}
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Flor principal */}
        <g transform="translate(28 188)">
          {Array.from({ length: 8 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="-17"
              rx="8"
              ry="17"
              fill={ACCENT}
              fillOpacity="0.55"
              transform={`rotate(${index * 45})`}
            />
          ))}

          <circle
            cx="0"
            cy="0"
            r="7"
            fill={SECONDARY}
            fillOpacity="0.8"
          />

          <circle
            cx="0"
            cy="0"
            r="3"
            fill="#FAF8F3"
            fillOpacity="0.75"
          />
        </g>

        {/* Flor secundaria */}
        <g transform="translate(100 126)">
          <circle
            cx="0"
            cy="0"
            r="4"
            fill={PRIMARY}
            fillOpacity="0.7"
          />

          {[0, 60, 120, 180, 240, 300].map(
            (rotation) => (
              <ellipse
                key={rotation}
                cx="0"
                cy="-9"
                rx="4"
                ry="9"
                fill={ACCENT}
                fillOpacity="0.45"
                transform={`rotate(${rotation})`}
              />
            )
          )}
        </g>

        {/* Hojas */}
        <g
          fill={PRIMARY}
          fillOpacity="0.55"
        >
          <ellipse
            cx="52"
            cy="157"
            rx="5"
            ry="13"
            transform="rotate(-55 52 157)"
          />

          <ellipse
            cx="73"
            cy="147"
            rx="5"
            ry="13"
            transform="rotate(35 73 147)"
          />

          <ellipse
            cx="82"
            cy="91"
            rx="5"
            ry="13"
            transform="rotate(-45 82 91)"
          />

          <ellipse
            cx="108"
            cy="69"
            rx="5"
            ry="13"
            transform="rotate(42 108 69)"
          />

          <ellipse
            cx="135"
            cy="48"
            rx="5"
            ry="13"
            transform="rotate(-45 135 48)"
          />
        </g>

        {/* Destellos */}
        <g
          fill={PRIMARY}
          fillOpacity="0.55"
          fontFamily="serif"
        >
          <text
            x="118"
            y="105"
            fontSize="10"
          >
            ✦
          </text>

          <text
            x="155"
            y="70"
            fontSize="8"
          >
            ✦
          </text>

          <text
            x="78"
            y="185"
            fontSize="8"
          >
            ✦
          </text>
        </g>
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
      className="pointer-events-none"
      style={{
        transform: isRight ? "scaleX(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 160 620"
        width="160"
        height="620"
        className="h-auto w-[90px] sm:w-[120px]"
        aria-hidden="true"
      >
        {/* Rama principal */}
        <path
          d="
            M 20 600
            C 35 520, 25 455, 52 390
            C 80 325, 70 270, 100 210
            C 116 175, 125 125, 138 35
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Rama secundaria */}
        <path
          d="
            M 34 485
            C 68 470, 82 450, 96 420
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        <path
          d="
            M 50 350
            C 78 335, 94 315, 105 285
          "
          fill="none"
          stroke={PRIMARY}
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Flor inferior */}
        <g transform="translate(25 575)">
          {Array.from({ length: 8 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="-15"
              rx="8"
              ry="16"
              fill={ACCENT}
              fillOpacity="0.55"
              transform={`rotate(${index * 45})`}
            />
          ))}

          <circle
            cx="0"
            cy="0"
            r="6"
            fill={SECONDARY}
            fillOpacity="0.8"
          />

          <circle
            cx="0"
            cy="0"
            r="2.5"
            fill="#FAF8F3"
            fillOpacity="0.8"
          />
        </g>

        {/* Flor central */}
        <g transform="translate(62 342)">
          <circle
            cx="0"
            cy="0"
            r="4"
            fill={PRIMARY}
            fillOpacity="0.7"
          />

          {[0, 60, 120, 180, 240, 300].map(
            (rotation) => (
              <ellipse
                key={rotation}
                cx="0"
                cy="-9"
                rx="4"
                ry="9"
                fill={ACCENT}
                fillOpacity="0.45"
                transform={`rotate(${rotation})`}
              />
            )
          )}
        </g>

        {/* Hojas */}
        <g
          fill={PRIMARY}
          fillOpacity="0.55"
        >
          <ellipse
            cx="40"
            cy="500"
            rx="5"
            ry="14"
            transform="rotate(-55 40 500)"
          />

          <ellipse
            cx="48"
            cy="450"
            rx="5"
            ry="14"
            transform="rotate(42 48 450)"
          />

          <ellipse
            cx="63"
            cy="390"
            rx="5"
            ry="14"
            transform="rotate(-48 63 390)"
          />

          <ellipse
            cx="77"
            cy="275"
            rx="5"
            ry="14"
            transform="rotate(42 77 275)"
          />

          <ellipse
            cx="94"
            cy="210"
            rx="5"
            ry="14"
            transform="rotate(-48 94 210)"
          />

          <ellipse
            cx="112"
            cy="145"
            rx="5"
            ry="14"
            transform="rotate(42 112 145)"
          />
        </g>

        {/* Destellos */}
        <g
          fill={PRIMARY}
          fillOpacity="0.55"
          fontFamily="serif"
        >
          <text
            x="78"
            y="320"
            fontSize="9"
          >
            ✦
          </text>

          <text
            x="110"
            y="175"
            fontSize="8"
          >
            ✦
          </text>

          <text
            x="55"
            y="430"
            fontSize="8"
          >
            ✦
          </text>
        </g>
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