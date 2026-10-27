
export default function WeddingBotanicalLuxury() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* BRUMA DECORATIVA MUY SUAVE */}
      <div
        className="absolute -left-24 top-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.035,
        }}
      />

      <div
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.04,
        }}
      />

      {/* RAMA FLORAL SUPERIOR IZQUIERDA */}
      <svg
        viewBox="0 0 260 410"
        className="absolute -left-16 -top-6 w-40 sm:-left-8 sm:top-0 sm:w-52 md:left-0 md:w-64"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.36 }}
      >
        {/* TALLO PRINCIPAL */}
        <path d="M-8 385 Q48 300 63 220 Q77 133 176 23" />

        {/* HOJAS */}
        <path d="M24 325 Q-4 296 7 263 Q34 280 24 325Z" />
        <path d="M24 325 Q19 290 7 263" />

        <path d="M42 285 Q87 281 108 244 Q67 244 42 285Z" />
        <path d="M42 285 Q72 257 108 244" />

        <path d="M57 222 Q19 201 29 166 Q60 185 57 222Z" />
        <path d="M57 222 Q48 185 29 166" />

        <path d="M79 177 Q124 175 145 137 Q102 137 79 177Z" />
        <path d="M79 177 Q111 149 145 137" />

        <path d="M111 123 Q77 101 90 70 Q116 91 111 123Z" />
        <path d="M111 123 Q107 91 90 70" />

        <path d="M143 76 Q176 77 193 48 Q159 45 143 76Z" />
        <path d="M143 76 Q170 56 193 48" />

        {/* FLORES DE CINCO PÉTALOS */}
        <g transform="translate(139 199)">
          <path d="M0 0 C-13 -8 -13 -25 -3 -28 C7 -28 10 -12 0 0Z" />
          <path d="M0 0 C3 -15 18 -20 25 -12 C29 -3 14 5 0 0Z" />
          <path d="M0 0 C15 -1 22 13 15 22 C7 27 -2 13 0 0Z" />
          <path d="M0 0 C-3 15 -18 20 -25 12 C-29 3 -14 -5 0 0Z" />
          <path d="M0 0 C-15 1 -22 -13 -15 -22 C-7 -27 2 -13 0 0Z" />
          <circle cx="0" cy="0" r="4" />
        </g>

        <path d="M88 159 Q113 185 139 199" />

        {/* RAMITA CON BOTONES */}
        <path d="M117 122 Q150 105 166 82" />
        <path d="M140 108 Q132 91 140 81 Q151 91 140 108Z" />
        <circle cx="166" cy="82" r="3" />
        <circle cx="178" cy="71" r="2.5" />
        <circle cx="184" cy="87" r="2.2" />
        <path d="M166 82L178 71 M166 82L184 87" />

        {/* FLORECILLA INFERIOR */}
        <g transform="translate(42 355)">
          <path d="M0 0 C-10 -4 -12 -16 -4 -19 C3 -18 5 -8 0 0Z" />
          <path d="M0 0 C5 -10 17 -10 19 -3 C19 4 8 5 0 0Z" />
          <path d="M0 0 C10 5 10 17 3 19 C-4 19 -5 8 0 0Z" />
          <path d="M0 0 C-5 10 -17 10 -19 3 C-19 -4 -8 -5 0 0Z" />
          <circle cx="0" cy="0" r="3" />
        </g>
      </svg>

      {/* RAMA FLORAL INFERIOR DERECHA */}
      <svg
        viewBox="0 0 280 440"
        className="absolute -bottom-8 -right-16 w-44 rotate-3 sm:-bottom-4 sm:-right-8 sm:w-56 md:right-0 md:w-72"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.36 }}
      >
        {/* TALLO CURVO */}
        <path d="M288 430 Q217 350 199 272 Q178 184 85 48" />

        {/* HOJAS */}
        <path d="M258 386 Q283 351 270 322 Q243 343 258 386Z" />
        <path d="M258 386 Q266 350 270 322" />

        <path d="M233 350 Q188 348 166 312 Q208 310 233 350Z" />
        <path d="M233 350 Q204 325 166 312" />

        <path d="M207 287 Q242 260 229 224 Q198 244 207 287Z" />
        <path d="M207 287 Q215 250 229 224" />

        <path d="M184 241 Q142 238 125 202 Q166 204 184 241Z" />
        <path d="M184 241 Q154 213 125 202" />

        <path d="M153 188 Q187 168 176 135 Q150 152 153 188Z" />
        <path d="M153 188 Q164 154 176 135" />

        <path d="M124 139 Q88 129 78 96 Q110 105 124 139Z" />
        <path d="M124 139 Q100 111 78 96" />

        {/* FLOR ABIERTA */}
        <g transform="translate(175 320)">
          <path d="M0 0 C-16 -4 -19 -21 -9 -27 C1 -27 5 -12 0 0Z" />
          <path d="M0 0 C6 -17 23 -17 27 -7 C27 3 12 5 0 0Z" />
          <path d="M0 0 C17 6 17 23 7 27 C-3 27 -5 12 0 0Z" />
          <path d="M0 0 C-6 17 -23 17 -27 7 C-27 -3 -12 -5 0 0Z" />
          <path d="M0 0 C-17 -6 -17 -23 -7 -27 C3 -27 5 -12 0 0Z" />
          <circle cx="0" cy="0" r="4.5" />
          <circle cx="0" cy="0" r="8" strokeDasharray="1 4" />
        </g>

        {/* PEQUEÑA FLOR LATERAL */}
        <g transform="translate(109 224) scale(.65)">
          <path d="M0 0 C-15 -4 -18 -20 -8 -25 C1 -25 5 -11 0 0Z" />
          <path d="M0 0 C6 -16 21 -16 24 -6 C24 3 11 5 0 0Z" />
          <path d="M0 0 C16 6 16 21 6 24 C-3 24 -5 11 0 0Z" />
          <path d="M0 0 C-6 16 -21 16 -24 6 C-24 -3 -11 -5 0 0Z" />
          <circle cx="0" cy="0" r="4" />
        </g>

        <path d="M140 263 Q121 246 109 224" />

        {/* BROTES Y BAYAS */}
        <path d="M144 174 Q121 157 111 137" />
        <path d="M126 160 Q110 159 105 146 Q120 146 126 160Z" />
        <circle cx="111" cy="137" r="3" />
        <circle cx="101" cy="126" r="2.5" />
        <circle cx="121" cy="124" r="2.5" />
        <path d="M111 137L101 126 M111 137L121 124" />

        {/* HOJITAS DEL EXTREMO */}
        <path d="M231 367 Q211 360 205 343 Q225 346 231 367Z" />
        <path d="M231 367 Q220 351 205 343" />
      </svg>

      {/* PEQUEÑOS DESTELLOS DECORATIVOS */}
      <svg
        viewBox="0 0 120 120"
        className="absolute right-[17%] top-[12%] h-12 w-12 sm:h-16 sm:w-16"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth="1"
        strokeLinecap="round"
        style={{ opacity: 0.28 }}
      >
        <path d="M60 38V82 M38 60H82" />
        <path d="M60 48L72 60L60 72L48 60Z" />
        <circle cx="92" cy="27" r="2" />
        <circle cx="26" cy="88" r="2" />
      </svg>

      <svg
        viewBox="0 0 80 80"
        className="absolute bottom-[15%] left-[18%] h-8 w-8 sm:h-11 sm:w-11"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth="1"
        strokeLinecap="round"
        style={{ opacity: 0.24 }}
      >
        <path d="M40 15V65 M15 40H65" />
        <path d="M40 29L51 40L40 51L29 40Z" />
      </svg>
    </div>
  )
}
