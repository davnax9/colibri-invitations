import WeddingHero from "./wedding/WeddingHero"
import WeddingIntro from "./wedding/WeddingIntro"
import WeddingDate from "./wedding/WeddingDate"
import WeddingDressCode from "./wedding/WeddingDressCode"
import WeddingFooter from "./wedding/WeddingFooter"
import Countdown from "./shared/Countdown"
import InvitationLocations from "./shared/InvitationLocations"
import InvitationGallery from "./shared/InvitationGallery"
import MusicPlayer from "./shared/MusicPlayer"
import AddToCalendar from "./shared/AddToCalendar"
import InvitationTheme from "./shared/InvitationTheme"
import WeddingElegantHero from "./wedding/WeddingElegantHero"
import WeddingElegantEvents from "./wedding/WeddingElegantEvents"
import InvitationGifts from "./shared/InvitationGifts"
import { InvitationTemplateProps } from "@/utils/types/invitation"
import WeddingElegantOpening from "./wedding/WeddingElegantOpening"
import ScrollReveal from "@/app/components/ui/ScrollReveal"
import ColibriBranding from "./shared/ColibriBranding"
import InvitationChilds from "./shared/InvitationChilds"
import QuinceanosFamily from "../eventos/QuinceanosFamily"
import QuinceanosFamilyHelen from "./wedding/weddingHelen/QuinceanosFamilyHelen"
import InvitationScheduleHelen from "./wedding/weddingHelen/InvitationScheduleHelen"
import BotanicalBackground from "./shared/BotanicalBackground"
import WeddingDateHelen from "./wedding/weddingHelen/WeddingDateHelen"
import Image from "next/image"

export default function WeddingElegant({event, guest}: InvitationTemplateProps) {
    const details = event.details
  
    const brideName = details?.brideName ?? ""
    const groomName = details?.groomName ?? ""

    const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
    const featurePhoto = event.photos[2] ?? null
    const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

    return (
        <InvitationTheme theme={event.theme} event={event}>
            <WeddingElegantOpening brideName={brideName} groomName={groomName} eventDate={event.eventDate}>
                <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
                    {/* PORTADA */}
                    <ScrollReveal direction="left" delay={0} duration={800}>
                        <WeddingElegantHero coverPhoto={coverPhoto} details={details} event={event}/>
                    </ScrollReveal>
                    {/* INTRODUCCIÓN */}
                    <ScrollReveal direction="right" delay={100} duration={700}>
                        <WeddingIntro details={details}/>
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={700} duration={700}>
                        <QuinceanosFamilyHelen details={details} type='W'/>
                    </ScrollReveal>
                    {/* FECHA */}
                    <ScrollReveal direction="left" delay={200} duration={700}>
                        <WeddingDateHelen event={event} />
                    </ScrollReveal>
                    {/* CONTADOR RETROCESO */}
                    <ScrollReveal direction="right" delay={300} duration={700}>
                        <Countdown targetDate={event.eventDate.toISOString()}/>
                    </ScrollReveal>
                    {/* FOTO DEL EVENTO */}
                    {featurePhoto && (
                    <ScrollReveal direction="left" delay={200} duration={700}>
                        <section className="w-full" style={{backgroundColor: "var(--theme-background)"}}>
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image src={featurePhoto.url} alt={featurePhoto.title ?? event.name} fill className="object-cover"/>
                        </div>
                        </section>
                    </ScrollReveal>
                    )}
                    {/* PROGRAMA ELEGANTE */}
                    <ScrollReveal direction="left" delay={400} duration={700}>
                        {/* <WeddingElegantEvents schedules={event.schedules}/> */}
                        <InvitationScheduleHelen event={event} />
                    </ScrollReveal>
                    {/* UBICACIONES */}
                    <ScrollReveal direction="right" delay={500} duration={700}>
                        <InvitationLocations event={event}/>
                    </ScrollReveal>
                    {/* CALENDARIO */}
                    <ScrollReveal direction="left" delay={600} duration={700}>
                        <section className="px-6 py-10 text-center" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
                            <BotanicalBackground />
                            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>No olvides la fecha</p>
                            <h2 className="mt-4 text-4xl font-serif" style={{ color: "var(--theme-primary)" }}>Guarda nuestro día</h2>
                            <p className="mx-auto mt-4 max-w-xl" style={{ color: "var(--theme-secondary)" }}>Agrega nuestra celebración a tu calendario para que no olvides acompañarnos.</p>
                            <div className="mt-8">
                                <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
                            </div>
                        </section>
                    </ScrollReveal>
                    {/* FOTOGRAFÍAS */}
                    <ScrollReveal direction="right" delay={700} duration={700}>
                        <InvitationGallery event={event} />
                    </ScrollReveal>
                    {event.showChildsSection && (
                        <ScrollReveal direction="right" delay={850} duration={700}>
                          <InvitationChilds />
                        </ScrollReveal>
                    )}
                    <ScrollReveal direction="left" delay={800} duration={700}>
                        <InvitationGifts gifts={event.gifts} />
                    </ScrollReveal>
                    {/* VESTIMENTA */}
                    <ScrollReveal direction="right" delay={900} duration={700}>
                        <WeddingDressCode details={details} />
                    </ScrollReveal>
                    {/* FOOTER */}
                    <ScrollReveal direction="left" delay={1000} duration={700}>
                        <WeddingFooter details={details} />
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={1100} duration={700}>
                        <ColibriBranding />
                    </ScrollReveal>
                    {/* REPRODUCTOR MUSICA */}
                    {event.music && (
                        <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>
                    )}
                </main>
            </WeddingElegantOpening>
        </InvitationTheme>
    )
}
