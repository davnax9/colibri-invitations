export default function BotanicalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* RAMA BOTÁNICA IZQUIERDA */}
      <svg
        viewBox="0 0 220 460"
        className="absolute -left-12 top-16 w-32 sm:-left-6 sm:top-20 sm:w-44 md:left-0 md:top-24 md:w-52"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.32 }}
      >
        <path d="M8 430 Q95 310 75 205 Q65 125 135 25" />

        <path d="M43 366 Q4 340 8 305 Q42 315 43 366Z" />
        <path d="M44 365 Q31 333 8 305" />

        <path d="M67 316 Q115 306 132 268 Q88 264 67 316Z" />
        <path d="M68 315 Q94 284 132 268" />

        <path d="M73 246 Q23 230 21 190 Q65 197 73 246Z" />
        <path d="M73 246 Q53 208 21 190" />

        <path d="M88 184 Q133 177 148 140 Q110 139 88 184Z" />
        <path d="M88 184 Q114 153 148 140" />

        <path d="M111 112 Q65 99 70 62 Q104 75 111 112Z" />
        <path d="M111 112 Q99 81 70 62" />

        {/* FLOR DE CONTORNO */}
        <g transform="translate(145 90)">
          <path d="M0 0 C-19 -5 -21 -24 -9 -28 C1 -28 4 -12 0 0Z" />
          <path d="M0 0 C7 -19 25 -18 28 -7 C28 3 12 5 0 0Z" />
          <path d="M0 0 C19 7 18 25 7 28 C-3 28 -5 12 0 0Z" />
          <path d="M0 0 C-7 19 -25 18 -28 7 C-28 -3 -12 -5 0 0Z" />
          <circle cx="0" cy="0" r="5" />
        </g>

        <path d="M105 137 Q124 118 145 90" />
        <path d="M75 205 Q102 190 113 164" />
      </svg>

      {/* FLOR Y RAMAS DERECHAS */}
      <svg
        viewBox="0 0 240 440"
        className="absolute -right-14 bottom-8 w-36 rotate-12 sm:-right-5 sm:bottom-10 sm:w-48 md:right-0 md:bottom-8 md:w-56"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.32 }}
      >
        <path d="M230 420 Q140 325 164 220 Q178 135 95 30" />

        <path d="M194 373 Q226 343 216 309 Q184 326 194 373Z" />
        <path d="M194 373 Q202 338 216 309" />

        <path d="M166 318 Q122 303 112 265 Q151 269 166 318Z" />
        <path d="M166 318 Q145 285 112 265" />

        <path d="M166 230 Q210 210 206 173 Q172 188 166 230Z" />
        <path d="M166 230 Q184 197 206 173" />

        <path d="M136 159 Q93 150 82 114 Q118 120 136 159Z" />
        <path d="M136 159 Q112 128 82 114" />

        <path d="M113 95 Q153 85 158 51 Q125 60 113 95Z" />
        <path d="M113 95 Q138 68 158 51" />

        {/* FLOR DE CONTORNO */}
        <g transform="translate(76 178)">
          <path d="M0 0 C-17 -4 -20 -20 -10 -25 C0 -25 4 -11 0 0Z" />
          <path d="M0 0 C6 -17 22 -16 25 -6 C25 2 11 5 0 0Z" />
          <path d="M0 0 C17 6 16 22 6 25 C-2 25 -5 11 0 0Z" />
          <path d="M0 0 C-6 17 -22 16 -25 6 C-25 -2 -11 -5 0 0Z" />
          <circle cx="0" cy="0" r="4.5" />
        </g>

        <path d="M126 137 Q104 155 76 178" />
      </svg>
    </div>
  )
}
