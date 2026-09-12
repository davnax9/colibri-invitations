type Props = {
  side: "left" | "right"
}

export default function QuinceanosSideBorder({
  side,
}: Props) {
  const isLeft = side === "left"

  return (
    <div
      className={`
        pointer-events-none
        fixed
        top-0
        bottom-0
        ${isLeft ? "left-2 sm:left-4 lg:left-7" : "right-2 sm:right-4 lg:right-7"}
        z-20
        hidden
        sm:block
      `}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 900"
        preserveAspectRatio="none"
        className="h-full w-5 sm:w-6 lg:w-7"
      >
        <defs>
          {/* Línea principal */}
          <linearGradient
            id={`side-line-${side}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--theme-accent)"
              stopOpacity="0"
            />

            <stop
              offset="12%"
              stopColor="var(--theme-accent)"
              stopOpacity="0.3"
            />

            <stop
              offset="50%"
              stopColor="var(--theme-accent)"
              stopOpacity="0.65"
            />

            <stop
              offset="88%"
              stopColor="var(--theme-accent)"
              stopOpacity="0.3"
            />

            <stop
              offset="100%"
              stopColor="var(--theme-accent)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* =====================================================
            LÍNEA VERTICAL PRINCIPAL
            ===================================================== */}

        <line
          x1="20"
          y1="35"
          x2="20"
          y2="865"
          stroke={`url(#side-line-${side})`}
          strokeWidth="1"
        />

        {/* =====================================================
            LÍNEA SECUNDARIA
            ===================================================== */}

        <line
          x1="25"
          y1="160"
          x2="25"
          y2="740"
          stroke="var(--theme-accent)"
          strokeWidth="0.5"
          strokeOpacity="0.18"
        />

        {/* =====================================================
            ORNAMENTO SUPERIOR
            ===================================================== */}

        <g transform="translate(20 105)">
          {/* círculo exterior */}
          <circle
            cx="0"
            cy="0"
            r="8"
            fill="var(--theme-background)"
            stroke="var(--theme-accent)"
            strokeWidth="1"
            strokeOpacity="0.55"
          />

          {/* diamante */}
          <rect
            x="-5"
            y="-5"
            width="10"
            height="10"
            fill="none"
            stroke="var(--theme-accent)"
            strokeWidth="1"
            strokeOpacity="0.75"
            transform="rotate(45)"
          />

          {/* punto central */}
          <circle
            cx="0"
            cy="0"
            r="1.5"
            fill="var(--theme-accent)"
            fillOpacity="0.8"
          />
        </g>

        {/* =====================================================
            DESTELLO SUPERIOR
            ===================================================== */}

        <text
          x="20"
          y="225"
          textAnchor="middle"
          fontSize="10"
          fontFamily="serif"
          fill="var(--theme-accent)"
          fillOpacity="0.45"
        >
          ✦
        </text>

        {/* =====================================================
            PUNTO
            ===================================================== */}

        <circle
          cx="20"
          cy="330"
          r="2"
          fill="var(--theme-accent)"
          fillOpacity="0.45"
        />

        {/* =====================================================
            DIAMANTE CENTRAL
            ===================================================== */}

        <g transform="translate(20 450)">
          <rect
            x="-6"
            y="-6"
            width="12"
            height="12"
            fill="var(--theme-background)"
            stroke="var(--theme-accent)"
            strokeWidth="1"
            strokeOpacity="0.65"
            transform="rotate(45)"
          />

          <rect
            x="-2"
            y="-2"
            width="4"
            height="4"
            fill="var(--theme-accent)"
            fillOpacity="0.65"
            transform="rotate(45)"
          />
        </g>

        {/* =====================================================
            DESTELLO INFERIOR
            ===================================================== */}

        <text
          x="20"
          y="575"
          textAnchor="middle"
          fontSize="8"
          fontFamily="serif"
          fill="var(--theme-accent)"
          fillOpacity="0.35"
        >
          ✧
        </text>

        {/* =====================================================
            PUNTO INFERIOR
            ===================================================== */}

        <circle
          cx="20"
          cy="680"
          r="1.5"
          fill="var(--theme-accent)"
          fillOpacity="0.4"
        />

        {/* =====================================================
            ORNAMENTO INFERIOR
            ===================================================== */}

        <g transform="translate(20 795)">
          <circle
            cx="0"
            cy="0"
            r="8"
            fill="var(--theme-background)"
            stroke="var(--theme-accent)"
            strokeWidth="1"
            strokeOpacity="0.55"
          />

          <rect
            x="-5"
            y="-5"
            width="10"
            height="10"
            fill="none"
            stroke="var(--theme-accent)"
            strokeWidth="1"
            strokeOpacity="0.75"
            transform="rotate(45)"
          />

          <circle
            cx="0"
            cy="0"
            r="1.5"
            fill="var(--theme-accent)"
            fillOpacity="0.8"
          />
        </g>
      </svg>
    </div>
  )
}