function ElegantOrnament({
  position,
}: {
  position: "top" | "bottom"
}) {
  return (
    <div
      className={[
        "pointer-events-none mx-auto w-full max-w-[760px]",
        position === "bottom" ? "rotate-180" : "",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 760 150"
        className="h-auto w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Línea principal */}
          <linearGradient
            id={`elegant-line-${position}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="var(--theme-accent)"
              stopOpacity="0"
            />

            <stop
              offset="18%"
              stopColor="var(--theme-accent)"
              stopOpacity="0.35"
            />

            <stop
              offset="50%"
              stopColor="var(--theme-accent)"
              stopOpacity="0.9"
            />

            <stop
              offset="82%"
              stopColor="var(--theme-accent)"
              stopOpacity="0.35"
            />

            <stop
              offset="100%"
              stopColor="var(--theme-accent)"
              stopOpacity="0"
            />
          </linearGradient>

          {/* Brillo central */}
          <radialGradient
            id={`elegant-glow-${position}`}
            cx="50%"
            cy="50%"
            r="60%"
          >
            <stop
              offset="0%"
              stopColor="var(--theme-accent)"
              stopOpacity="0.95"
            />

            <stop
              offset="55%"
              stopColor="var(--theme-accent)"
              stopOpacity="0.5"
            />

            <stop
              offset="100%"
              stopColor="var(--theme-accent)"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* =========================================================
            LÍNEAS PRINCIPALES
            ========================================================= */}

        <path
          d="
            M 35 76
            C 125 76, 175 76, 270 76
            C 315 76, 340 76, 355 76
          "
          fill="none"
          stroke={`url(#elegant-line-${position})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="
            M 725 76
            C 635 76, 585 76, 490 76
            C 445 76, 420 76, 405 76
          "
          fill="none"
          stroke={`url(#elegant-line-${position})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* =========================================================
            SEGUNDA LÍNEA — MUY SUTIL
            ========================================================= */}

        <path
          d="
            M 95 87
            C 165 87, 215 87, 285 87
          "
          fill="none"
          stroke="var(--theme-accent)"
          strokeOpacity="0.22"
          strokeWidth="0.8"
        />

        <path
          d="
            M 665 87
            C 595 87, 545 87, 475 87
          "
          fill="none"
          stroke="var(--theme-accent)"
          strokeOpacity="0.22"
          strokeWidth="0.8"
        />

        {/* =========================================================
            DIAMANTES LATERALES
            ========================================================= */}

        <g
          fill="none"
          stroke="var(--theme-accent)"
          strokeWidth="1"
          strokeOpacity="0.7"
        >
          <rect
            x="286"
            y="69"
            width="12"
            height="12"
            transform="rotate(45 292 75)"
          />

          <rect
            x="462"
            y="69"
            width="12"
            height="12"
            transform="rotate(45 468 75)"
          />
        </g>

        {/* =========================================================
            PEQUEÑOS PUNTOS
            ========================================================= */}

        <g
          fill="var(--theme-accent)"
          fillOpacity="0.55"
        >
          <circle cx="270" cy="76" r="2" />
          <circle cx="305" cy="76" r="1.5" />

          <circle cx="455" cy="76" r="1.5" />
          <circle cx="490" cy="76" r="2" />
        </g>

        {/* =========================================================
            ORNAMENTO CENTRAL
            ========================================================= */}

        <g transform="translate(380 76)">
          {/* Halo */}
          <circle
            cx="0"
            cy="0"
            r="31"
            fill={`url(#elegant-glow-${position})`}
            opacity="0.12"
          />

          {/* Círculo exterior */}
          <circle
            cx="0"
            cy="0"
            r="19"
            fill="none"
            stroke="var(--theme-accent)"
            strokeWidth="1"
            strokeOpacity="0.45"
          />

          {/* Diamante exterior */}
          <rect
            x="-13"
            y="-13"
            width="26"
            height="26"
            rx="1"
            fill="none"
            stroke="var(--theme-accent)"
            strokeWidth="1"
            strokeOpacity="0.75"
            transform="rotate(45)"
          />

          {/* Diamante interior */}
          <rect
            x="-5"
            y="-5"
            width="10"
            height="10"
            fill="var(--theme-accent)"
            fillOpacity="0.8"
            transform="rotate(45)"
          />

          {/* Punto central */}
          <circle
            cx="0"
            cy="0"
            r="2"
            fill="var(--theme-background)"
          />
        </g>

        {/* =========================================================
            DESTELLOS
            ========================================================= */}

        <g
          fill="var(--theme-accent)"
          fontFamily="serif"
        >
          <text
            x="150"
            y="58"
            fontSize="11"
            opacity="0.5"
          >
            ✦
          </text>

          <text
            x="595"
            y="58"
            fontSize="11"
            opacity="0.5"
          >
            ✦
          </text>

          <text
            x="335"
            y="47"
            fontSize="8"
            opacity="0.35"
          >
            ✧
          </text>

          <text
            x="415"
            y="47"
            fontSize="8"
            opacity="0.35"
          >
            ✧
          </text>
        </g>
      </svg>
    </div>
  )
}

type Props = {
  position: "top" | "bottom"
}

export default function QuinceanosBorder({
  position,
}: Props) {
  return (
    <div className="w-full overflow-hidden">
      <ElegantOrnament position={position} />
    </div>
  )
}