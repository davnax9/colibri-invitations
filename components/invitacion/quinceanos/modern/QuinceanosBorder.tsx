function FloralOrnament({
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
        viewBox="0 0 760 180"
        className="h-auto w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`gold-${position}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="#B89455"
              stopOpacity="0"
            />
            <stop
              offset="18%"
              stopColor="#B89455"
              stopOpacity="0.35"
            />
            <stop
              offset="50%"
              stopColor="#D8C08A"
              stopOpacity="0.9"
            />
            <stop
              offset="82%"
              stopColor="#B89455"
              stopOpacity="0.35"
            />
            <stop
              offset="100%"
              stopColor="#B89455"
              stopOpacity="0"
            />
          </linearGradient>

          <radialGradient
            id={`flower-${position}`}
            cx="50%"
            cy="50%"
            r="60%"
          >
            <stop
              offset="0%"
              stopColor="#D8C08A"
              stopOpacity="0.9"
            />
            <stop
              offset="60%"
              stopColor="#B89455"
              stopOpacity="0.65"
            />
            <stop
              offset="100%"
              stopColor="#8C6A36"
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
          stroke={`url(#gold-${position})`}
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
          stroke={`url(#gold-${position})`}
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
          stroke="#B89455"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        <path
          d="
            M 695 125
            C 615 105, 560 110, 495 125
          "
          fill="none"
          stroke="#B89455"
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
              fill={`url(#flower-${position})`}
              transform={`rotate(${index * 45})`}
            />
          ))}

          <circle
            cx="0"
            cy="0"
            r="7"
            fill="#8C6A36"
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
        <g transform="translate(255 112)">
          <circle
            cx="0"
            cy="0"
            r="5"
            fill="#B89455"
            fillOpacity="0.65"
          />

          {[0, 45, 90, 135].map((rotation) => (
            <ellipse
              key={rotation}
              cx="0"
              cy="-11"
              rx="5"
              ry="11"
              fill="#D8C08A"
              fillOpacity="0.5"
              transform={`rotate(${rotation})`}
            />
          ))}
        </g>

        <g transform="translate(505 112)">
          <circle
            cx="0"
            cy="0"
            r="5"
            fill="#B89455"
            fillOpacity="0.65"
          />

          {[0, 45, 90, 135].map((rotation) => (
            <ellipse
              key={rotation}
              cx="0"
              cy="-11"
              rx="5"
              ry="11"
              fill="#D8C08A"
              fillOpacity="0.5"
              transform={`rotate(${rotation})`}
            />
          ))}
        </g>

        {/* Hojas */}
        <g
          fill="#B89455"
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
          fill="#B89455"
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

type Props = {
  position: "top" | "bottom"
}

export default function QuinceanosBorder({
  position,
}: Props) {
  return (
    <div className="w-full overflow-hidden">
      <FloralOrnament position={position} />
    </div>
  )
}