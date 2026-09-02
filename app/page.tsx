import ContactButton from "@/components/landing/ContactButton"
import FaqSection from "@/components/landing/FaqSection"
import FeaturedDesigns from "@/components/landing/FeaturedDesigns"
import InvitationExamples from "@/components/landing/InvitationExamples"
import InvitationPreview from "@/components/landing/InvitationPreview"
import MobileMenu from "@/components/landing/MobileMenu"
import PromotionBanner from "@/components/landing/PromotionBanner"
import TrustSection from "@/components/landing/TrustSection"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#263832]">
      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}
      <header className="relative border-b border-[#E5E9E5]/80 bg-[#FAF8F3]">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-5 lg:px-8">
          {/* LOGO - IZQUIERDA */}
          <div className="flex justify-start">
            <Link href="/">
              <Image src="/logoColibri.png" alt="Colibrí Invitaciones Digitales" width={280} height={90} className="h-16 w-auto object-contain sm:h-20" priority/>
            </Link>
          </div>
          {/* NOMBRE - CENTRO */}
          <div className="text-center">
            <p className="text-lg font-bold tracking-tight text-[#2F5D50]">Colibrí</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8A9A8F]">Invitaciones digitales</p>
          </div>
          {/* BOTONES - DERECHA */}
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            {/* DESKTOP */}
            <div className="hidden items-center gap-2 md:flex">
              <a href="#diseños" className="rounded-xl px-3 py-2 text-sm font-semibold text-[#2F5D50] transition hover:bg-[#2F5D50]/5">Diseños</a>
              <a href="#planes" className="rounded-xl px-3 py-2 text-sm font-semibold text-[#2F5D50] transition hover:bg-[#2F5D50]/5">Planes</a>
              <Link href="/login" className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#2F5D50] transition hover:bg-[#2F5D50]/5">Iniciar sesión</Link>
              <Link href="/login" className="rounded-xl bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#244A40] hover:shadow-md">
                Crear mi invitación
              </Link>
            </div>
            {/* MOBILE */}
            <MobileMenu />
          </div>
        </div>
      </header>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden">
        {/* Decoraciones */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#A8C3A0]/20 blur-3xl" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#D6B98C]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* TEXTO */}
            <div>
              <span className="inline-flex rounded-full border border-[#8FA89D]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F5D50]">
                Tu historia comienza aquí
              </span>
              <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-[#263832] sm:text-6xl lg:text-7xl">Una invitación tan especial como tu momento.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#687A72]">Diseñamos invitaciones digitales elegantes y personalizadas para bodas y XV años. Comparte cada detalle de tu celebración de una manera única.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/login" className="inline-flex items-center justify-center rounded-xl bg-[#2F5D50] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2F5D50]/20 transition hover:-translate-y-0.5 hover:bg-[#244A40]">
                  Crear mi invitación<span className="ml-2">→</span>
                </Link>
                <a href="#como-funciona" className="inline-flex items-center justify-center rounded-xl border border-[#DCE4DF] bg-white px-7 py-3.5 text-sm font-semibold text-[#2F5D50] transition hover:bg-[#F5F2EB]">
                  Descubrir cómo funciona
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#687A72]">
                <span>✓ Diseños elegantes</span>
                <span>✓ Personalización</span>
                <span>✓ Comparte por WhatsApp</span>
                <span>✓ Confirmación de invitados</span>
                <span>✓ Dashboard de confirmaciones</span>
              </div>
            </div>
            {/* PREVIEW */}
            <InvitationPreview slug="/xv-bianquita-luxury" />
          </div>
        </div>
      </section>
      {/* ===================================================== */}
      {/* DISEÑOS DESTACADOS                                    */}
      {/* ===================================================== */}
      <FeaturedDesigns />
      {/* ===================================================== */}
      {/* CONFIANZA */}
      {/* ===================================================== */}
      <TrustSection />
      {/* ===================================================== */}
      {/* COMO FUNCIONA */}
      {/* ===================================================== */}
      <section id="como-funciona" className="border-y border-[#E5E9E5] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">Así de sencillo</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">Crea tu invitación en pocos pasos</h2>
            <p className="mt-4 text-[#687A72]">Nosotros ponemos las herramientas. Tú pones la historia.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              {
                number: "01",
                icon: "🎨",
                title: "Elige tu diseño",
                text: "Selecciona una plantilla.",
              },
              {
                number: "02",
                icon: "✨",
                title: "Personaliza",
                text: "Agrega detalles a tu evento.",
              },
              {
                number: "03",
                icon: "💌",
                title: "Comparte",
                text: "Envía tu invitación fácilmente por WhatsApp.",
              },
              {
                number: "04",
                icon: "👥",
                title: "Administra tus invitaciones",
                text: "Recibe y administra las confirmaciones de tus invitados.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-3xl border border-[#E5E9E5] bg-[#FAF8F3] p-5 sm:p-7 text-base sm:text-xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F5D50]/10 text-xl">{item.icon}</div>
                  <span className="text-sm font-bold text-[#C9A86A]">{item.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-[#263832]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#687A72]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===================================================== */}
      {/* CARACTERISTICAS */}
      {/* ===================================================== */}
      <section className="bg-[#FAF8F3]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">Todo en un solo lugar</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">Mucho más que una invitación.</h2>
              <p className="mt-5 leading-7 text-[#687A72]">Crea una experiencia completa para tus invitados y administra todos los detalles de tu evento desde un solo lugar.</p>
              <Link href="/login" className="mt-7 inline-flex rounded-xl bg-[#2F5D50] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#244A40]">Comenzar ahora</Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                ["📸", "Fotografías", "Comparte los momentos más especiales."],
                ["🎵", "Música", "Dale personalidad a tu invitación."],
                ["📍", "Ubicación", "Tus invitados sabrán exactamente dónde llegar."],
                ["⏳", "Cuenta regresiva", "Haz que la espera también sea especial."],
                ["👥", "Lista de invitados", "Administra nombres y pases."],
                ["💌", "Confirmaciones", "Conoce quién asistirá a tu evento."],
              ].map(([icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-[#E5E9E5] bg-white p-4 shadow-sm sm:p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F5D50]/10">{icon}</div>
                  <h3 className="mt-4 text-sm font-semibold text-[#263832] sm:text-base">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#687A72] sm:text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ===================================================== */}
      {/* PLANES */}
      {/* ===================================================== */}
      <section id="planes" className="border-t border-[#E5E9E5] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          {/* ENCABEZADO */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">Planes</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">Elige la experiencia ideal para tu evento</h2>
            <p className="mt-4 text-[#687A72]">Elige el plan que mejor se adapte a tu celebración.</p>
          </div>
          {/* OFERTA */}
          <PromotionBanner endDate="2026-09-06T23:59:59" />
          {/* PLANES */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {/* ================================================= */}
            {/* BASIC */}
            {/* ================================================= */}
            <div className="rounded-3xl border border-[#E5E9E5] bg-[#FAF8F3] p-8">
              <p className="text-sm font-semibold text-[#8A9A8F]">BASIC</p>
              <h3 className="mt-3 text-2xl font-bold text-[#263832]">Lo esencial</h3>
              <p className="mt-3 text-sm leading-6 text-[#687A72]">Todo lo necesario para crear y compartir una invitación digital elegante.</p>
              {/* PRECIO */}
              <div className="mt-6">
                <span className="text-sm font-medium text-[#8A9A8F]">Desde</span>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-lg font-medium text-[#8A9A8F] line-through">$500</span>
                  <span className="text-4xl font-bold text-[#263832]">$400</span>
                </div>
                <p className="mt-1 text-xs text-[#8A9A8F]">20% de descuento · Pago único</p>
              </div>
              {/* CARACTERÍSTICAS */}
              <ul className="mt-7 space-y-3 text-sm text-[#687A72]">
                <li>✓ Invitación digital</li>
                <li>✓ Personalización del evento</li>
                <li>✓ Fotografías</li>
                <li>✓ Música</li>
                <li>✓ Ubicaciones</li>
                <li>✓ Lista de invitados</li>
                <li>✓ Mensaje base para WhatsApp</li>
              </ul>
            </div>
            {/* PRO */}
            <div className="relative rounded-3xl border-2 border-[#2F5D50] bg-[#2F5D50] p-8 text-white shadow-xl">
              {/* RECOMENDADO */}
              <div className="absolute right-6 top-6 rounded-full bg-[#C9A86A] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Recomendado</div>
              <p className="text-sm font-semibold text-[#D7E3DE]">PRO</p>
              <h3 className="mt-3 text-2xl font-bold">Experiencia completa</h3>
              <p className="mt-3 text-sm leading-6 text-[#D7E3DE]">Más control, más personalización y una mejor experiencia para administrar tus invitaciones.</p>
              {/* PRECIO */}
              <div className="mt-6">
                <span className="text-sm font-medium text-[#D7E3DE]">Desde</span>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-lg font-medium text-[#AFC0B8] line-through">$800</span><span className="text-4xl font-bold text-white">$640</span>
                </div>
                <p className="mt-1 text-xs text-[#AFC0B8]">20% de descuento · Pago único</p>
              </div>
              {/* CARACTERÍSTICAS */}
              <ul className="mt-7 space-y-3 text-sm text-[#E4ECE8]">
                <li>✓ Todo lo incluido en BASIC</li>
                <li>✓ Mensajes personalizados</li>
                <li>✓ Personalización por invitado</li>
                <li>✓ Administración avanzada</li>
                <li>✓ Mayor control sobre tus envíos</li>
              </ul>
            </div>
          </div>
          {/* CONTACTO */}
          <div className="mt-10 text-center">
            <ContactButton />
          </div>
        </div>
      </section>
      {/* ===================================================== */}
      {/* PREGUNTAS FRECUENTES */}
      {/* ===================================================== */}
      <FaqSection />
      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden bg-[#2F5D50]">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#8FA89D]/20 blur-2xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#C9A86A]/10 blur-2xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D7E3DE]">Tu momento está por comenzar</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Haz que tus invitados vivan la celebración desde antes de llegar.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#D7E3DE]">Crea una invitación digital que represente tu historia y comparte cada detalle de ese día tan especial.</p>
          <Link href="/login" className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#2F5D50] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F5F2EB]">
            Crear mi invitación
          </Link>
        </div>
      </section>
      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}
      <footer className="bg-[#263832]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-white">Colibrí</p>
            <p className="mt-1 text-xs text-[#AFC0B8]">Invitaciones digitales para momentos inolvidables.</p>
          </div>
          <Link href="/login" className="text-sm font-medium text-[#D7E3DE] transition hover:text-white">Iniciar sesión →</Link>
        </div>
      </footer>
    </main>
  )
}