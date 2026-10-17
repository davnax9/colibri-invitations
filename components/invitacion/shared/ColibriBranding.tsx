const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "/"

export default function ColibriBranding() {
  return (
    <section
      className="relative px-6 py-5 text-center"
      style={{
        backgroundColor: "var(--theme-text)",
        borderTop: "1px solid var(--theme-accent)",
      }}
    >
      <a
        href="https://colibri-invitations.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Invitación realizada por Colibrí Invitaciones"
        className="group inline-flex flex-col items-center gap-1.5 no-underline"
      >
        <span
          className="text-[0.55rem] uppercase tracking-[0.4em]"
          style={{ color: "var(--theme-accent)" }}
        >
          Invitación realizada por
        </span>
        <span className="font-serif text-sm tracking-[0.18em] text-white/85 transition-colors group-hover:text-white">
          Colibrí Invitaciones
        </span>
      </a>
    </section>
  )
}
