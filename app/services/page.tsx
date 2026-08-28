'use client';

// import Hero from "@/components/hero";
import SectionServices from "@/components/section-services/section-services";
import SectionContact from "@/components/section-contact/section-contact";
import ImageParticles from "@/components/image-particles/image-particles";
import ServicesHero from '@/components/services-hero/services-hero';
import UnderlinedHeader from '@/components/underlined-header/underlined-header';

import AmbientVideo from "@/components/ambient-video/ambient-video";

import { Separator } from "@/components/ui/separator";

export default function PageServices(){
    return (
        <>

            <ServicesHero title="Leistungen" />


            <div className="pb-15 lg:pb-28 bg-background relative z-5">
                <div className="container mx-auto px-5">

                    <UnderlinedHeader>
                        <span>01 /</span> Strategie, Marke & Design
                    </UnderlinedHeader>

                    <div className="grid grid-cols-1 py-8 gap-10 lg:grid-cols-2 lg:py-12 lg:gap-[120px]">

                        {/* Grid items stretch to the row height by default, which leaves a
                            sticky child no room to travel. self-start shrinks the column to its
                            content so it can actually stick. Stacked, there is no second column
                            to scroll past it, so it only sticks once the grid splits. */}
                        <div className="self-start lg:sticky lg:top-(--hdr-height)">
                            {/* AmbientVideo holds off on fetching until the clip is near the
                                viewport and pauses it once it leaves, so four portrait loops
                                don't all download during the initial page load. */}
                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200 mx-auto w-full max-w-md lg:max-w-none">
                                <AmbientVideo
                                    src="/services/services-01.mp4"
                                    poster="/images/services-01-poster.webp"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 lg:gap-10">

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Strategie & Beratung</h3>
                                <div>Digitale Strategie</div>
                                <div>Markenpositionierung</div>
                                <div>Zielgruppenanalyse</div>
                                <div>Wettbewerbsanalyse</div>
                                <div>Customer Journey</div>
                                <div>Conversion-Strategie</div>
                                <div>Website-Struktur</div>
                                <div>Content-Planung</div>
                                <div>Kampagnen-Konzept</div>
                                <div>Marketing-Roadmap</div>
                                <div>Projektplanung</div>
                                <div>Beratung für digitale Transformation</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Webdesign & UX/UI</h3>
                                <div>Corporate Websites</div>
                                <div>Landingpages</div>
                                <div>Onepager</div>
                                <div>UX-Konzept</div>
                                <div>UI-Design</div>
                                <div>Wireframes</div>
                                <div>Designsysteme</div>
                                <div>Mobile Design</div>
                                <div>Responsive Design</div>
                                <div>Interaktive Layouts</div>
                                <div>Conversion-orientierte Seitenstruktur</div>
                                <div>User Journey</div>
                                <div>Navigationskonzept</div>
                                <div>Prototyping</div>
                                <div>Design für WordPress</div>
                                <div>Design für Webflow</div>
                                <div>Design für E-Commerce</div>
                                <div>Design für Arztpraxen, Kliniken und lokale Unternehmen</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Web Development</h3>
                                <div>WordPress Entwicklung</div>
                                <div>Webflow Entwicklung</div>
                                <div>Elementor Websites</div>
                                <div>Bricks Websites</div>
                                <div>Custom WordPress Lösungen</div>
                                <div>Frontend Development</div>
                                <div>CMS-Struktur</div>
                                <div>ACF-Strukturen</div>
                                <div>Individuelle Inhaltsmodule</div>
                                <div>Technische Umsetzung von Designs</div>
                                <div>Responsive Umsetzung</div>
                                <div>Performance-Optimierung</div>
                                <div>Pagespeed-Optimierung</div>
                                <div>Formulare & Anfrageprozesse</div>
                                <div>Mehrsprachige Websites</div>
                                <div>Technische SEO-Grundlagen</div>
                                <div>Tracking-Integration</div>
                                <div>Cookie-Consent-Integration</div>
                                <div>Wartbare Seitenarchitektur</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">E-Commerce & digitale Systeme</h3>
                                <div>WooCommerce Shops</div>
                                <div>Shopify-Strukturen</div>
                                <div>Produktseiten</div>
                                <div>Kategoriestrukturen</div>
                                <div>Filterlogik</div>
                                <div>Checkout-Optimierung</div>
                                <div>Produktverwaltung</div>
                                <div>Digitale Produktpräsentation</div>
                                <div>Buchungssysteme</div>
                                <div>Terminbuchung</div>
                                <div>Kursbuchung</div>
                                <div>Academy-Strukturen</div>
                                <div>Event-Anmeldung</div>
                                <div>Service-Anfragen</div>
                                <div>Mitgliederbereiche</div>
                                <div>Kundenbereiche</div>
                                <div>Zahlungsintegration</div>
                                <div>E-Mail-Automationen</div>
                                <div>Digitale Verkaufslogik</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="pb-15 lg:pb-28 bg-background relative z-5">
                <div className="container mx-auto px-5">

                    <UnderlinedHeader>
                        <span>02 /</span> Websites, Systeme & Development
                    </UnderlinedHeader>

                    <div className="grid grid-cols-1 py-8 gap-10 lg:grid-cols-2 lg:py-12 lg:gap-[120px]">

                        {/* Grid items stretch to the row height by default, which leaves a
                            sticky child no room to travel. self-start shrinks the column to its
                            content so it can actually stick. Stacked, there is no second column
                            to scroll past it, so it only sticks once the grid splits. */}
                        <div className="self-start lg:sticky lg:top-(--hdr-height)">
                            {/* AmbientVideo holds off on fetching until the clip is near the
                                viewport and pauses it once it leaves, so four portrait loops
                                don't all download during the initial page load. */}
                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200 mx-auto w-full max-w-md lg:max-w-none">
                                <AmbientVideo
                                    src="/services/services-02.mp4"
                                    poster="/images/services-02-poster.webp"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 lg:gap-10">

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">SEO & Sichtbarkeit</h3>
                                <div>Technisches SEO</div>
                                <div>Keyword-Recherche</div>
                                <div>OnPage-Optimierung</div>
                                <div>SEO-Struktur</div>
                                <div>Meta-Titel & Meta-Beschreibungen</div>
                                <div>Content-Optimierung</div>
                                <div>Lokales SEO</div>
                                <div>Google-Business-Optimierung</div>
                                <div>SEO für Arztpraxen</div>
                                <div>SEO für lokale Unternehmen</div>
                                <div>SEO für Dienstleister</div>
                                <div>SEO für E-Commerce</div>
                                <div>Interne Verlinkung</div>
                                <div>Indexierungsprüfung</div>
                                <div>Pagespeed-Analyse</div>
                                <div>Wettbewerbsanalyse</div>
                                <div>SEO-Monitoring</div>
                                <div>SEO-Reporting</div>
                                <div>Content-Strategie</div>
                                <div>FAQ-Strukturen</div>
                                <div>Schema Markup</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Google Ads & Performance Marketing</h3>
                                <div>Google Ads Kampagnen</div>
                                <div>Search Ads</div>
                                <div>Performance Max</div>
                                <div>Lokale Kampagnen</div>
                                <div>Keyword-Setup</div>
                                <div>Anzeigenstruktur</div>
                                <div>Kampagnenerstellung</div>
                                <div>Budgetplanung</div>
                                <div>Conversion-Tracking</div>
                                <div>Landingpage-Abstimmung</div>
                                <div>A/B-Testing</div>
                                <div>Laufende Optimierung</div>
                                <div>Klickpreis-Analyse</div>
                                <div>Lead-Qualität</div>
                                <div>Reporting</div>
                                <div>Remarketing</div>
                                <div>Tracking über Google Tag Manager</div>
                                <div>GA4-Integration</div>
                                <div>Kampagnenberatung</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Social Media & Content Marketing</h3>
                                <div>Instagram Content</div>
                                <div>Social-Media-Strategie</div>
                                <div>Post-Design</div>
                                <div>Carousel-Design</div>
                                <div>Reels-Konzepte</div>
                                <div>Story-Design</div>
                                <div>Content-Kalender</div>
                                <div>Kampagnenideen</div>
                                <div>Visuelle Serien</div>
                                <div>Social-Media-Guidelines</div>
                                <div>Community-orientierte Inhalte</div>
                                <div>Content für Arztpraxen</div>
                                <div>Content für Restaurants</div>
                                <div>Content für E-Commerce</div>
                                <div>Content für Premium-Brands</div>
                                <div>Text & Caption-Erstellung</div>
                                <div>Social-Media-Werbung</div>
                                <div>Meta Ads Vorbereitung</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Branding & Visual Identity</h3>
                                <div>Logo Design</div>
                                <div>Logo Redesign</div>
                                <div>Brand Identity</div>
                                <div>Brand Strategy</div>
                                <div>Farbsystem</div>
                                <div>Typografie</div>
                                <div>Bildsprache</div>
                                <div>Markenwelt</div>
                                <div>Corporate Design</div>
                                <div>Brand Guidelines</div>
                                <div>Social-Media-Look</div>
                                <div>Icon-Systeme</div>
                                <div>Grafische Elemente</div>
                                <div>Visuelle Richtung</div>
                                <div>Moodboards</div>
                                <div>Art Direction</div>
                                <div>Brand Refresh</div>
                                <div>Naming</div>
                                <div>Claim-Entwicklung</div>
                                <div>Markenpositionierung</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="pb-15 lg:pb-28 bg-background relative z-5">
                <div className="container mx-auto px-5">

                    <UnderlinedHeader>
                        <span>03 /</span> Sichtbarkeit, Marketing & Content
                    </UnderlinedHeader>

                    <div className="grid grid-cols-1 py-8 gap-10 lg:grid-cols-2 lg:py-12 lg:gap-[120px]">

                        {/* Grid items stretch to the row height by default, which leaves a
                            sticky child no room to travel. self-start shrinks the column to its
                            content so it can actually stick. Stacked, there is no second column
                            to scroll past it, so it only sticks once the grid splits. */}
                        <div className="self-start lg:sticky lg:top-(--hdr-height)">
                            {/* AmbientVideo holds off on fetching until the clip is near the
                                viewport and pauses it once it leaves, so four portrait loops
                                don't all download during the initial page load. */}
                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200 mx-auto w-full max-w-md lg:max-w-none">
                                <AmbientVideo
                                    src="/services/services-03.mp4"
                                    poster="/images/services-03-poster.webp"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 lg:gap-10">

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Foto, Video & Content Production</h3>
                                <div>Business-Fotografie</div>
                                <div>Portrait-Fotografie</div>
                                <div>Team-Fotografie</div>
                                <div>Praxis-Fotografie</div>
                                <div>Restaurant-Fotografie</div>
                                <div>Produktfotografie</div>
                                <div>Beauty-Fotografie</div>
                                <div>Automotive Content</div>
                                <div>Video-Produktion</div>
                                <div>Imagefilme</div>
                                <div>Reels-Produktion</div>
                                <div>Social-Media-Clips</div>
                                <div>Website-Videos</div>
                                <div>Behind-the-Scenes</div>
                                <div>Produktinszenierung</div>
                                <div>Content-Shooting</div>
                                <div>Postproduktion</div>
                                <div>Retusche</div>
                                <div>Color Grading</div>
                                <div>Cinematic Visuals</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Motion, 3D & AI Visuals</h3>
                                <div>AI-Bildwelten</div>
                                <div>AI-Kampagnenvisuals</div>
                                <div>AI-Produktinszenierung</div>
                                <div>3D Visuals</div>
                                <div>Motion Design</div>
                                <div>Animationen</div>
                                <div>Hero-Animationen</div>
                                <div>Website-Motion</div>
                                <div>Social-Media-Animationen</div>
                                <div>Kling AI Konzepte</div>
                                <div>Video-Prompts</div>
                                <div>Storyboard-Entwicklung</div>
                                <div>Cinematic Key Visuals</div>
                                <div>Produkt-Renderings</div>
                                <div>Surreale Markenwelten</div>
                                <div>Digitale Mood-Kampagnen</div>
                                <div>Creative Direction für AI Content</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Print Design & Offline Medien</h3>
                                <div>Visitenkarten</div>
                                <div>Flyer</div>
                                <div>Broschüren</div>
                                <div>Praxisunterlagen</div>
                                <div>Preislisten</div>
                                <div>Menükarten</div>
                                <div>Gutscheine</div>
                                <div>Plakate</div>
                                <div>Roll-ups</div>
                                <div>Briefpapier</div>
                                <div>Geschäftsausstattung</div>
                                <div>Packaging Design</div>
                                <div>Etiketten</div>
                                <div>Print-Kampagnen</div>
                                <div>Editorial Design</div>
                                <div>PDF-Präsentationen</div>
                                <div>Angebotsunterlagen</div>
                                <div>Brand-Materialien für Kundenkontakt</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">AI, Automatisierung & digitale Workflows</h3>
                                <div>AI-Workflows</div>
                                <div>Chatbots</div>
                                <div>Automatisierte Formulare</div>
                                <div>Lead-Automatisierung</div>
                                <div>E-Mail-Automationen</div>
                                <div>CRM-Anbindungen</div>
                                <div>Content-Automation</div>
                                <div>Interne Tools</div>
                                <div>KI-gestützte Texterstellung</div>
                                <div>KI-gestützte Bildkonzepte</div>
                                <div>Automatische Anfrageprozesse</div>
                                <div>Automatisierte Benachrichtigungen</div>
                                <div>Terminprozesse</div>
                                <div>Datenstrukturierung</div>
                                <div>No-Code-Automationen</div>
                                <div>Prozessberatung</div>
                                <div>Digitale Assistenzsysteme</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="pb-15 lg:pb-28 bg-background relative z-5">
                <div className="container mx-auto px-5">

                    <UnderlinedHeader>
                        <span>04 /</span> AI, Motion & Automation
                    </UnderlinedHeader>

                    <div className="grid grid-cols-1 py-8 gap-10 lg:grid-cols-2 lg:py-12 lg:gap-[120px]">

                        {/* Grid items stretch to the row height by default, which leaves a
                            sticky child no room to travel. self-start shrinks the column to its
                            content so it can actually stick. Stacked, there is no second column
                            to scroll past it, so it only sticks once the grid splits. */}
                        <div className="self-start lg:sticky lg:top-(--hdr-height)">
                            {/* AmbientVideo holds off on fetching until the clip is near the
                                viewport and pauses it once it leaves, so four portrait loops
                                don't all download during the initial page load. */}
                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200 mx-auto w-full max-w-md lg:max-w-none">
                                <AmbientVideo
                                    src="/services/services-04.mp4"
                                    poster="/images/services-04-poster.webp"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 lg:gap-10">

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Tracking, Analytics & Conversion</h3>
                                <div>Google Analytics 4</div>
                                <div>Google Tag Manager</div>
                                <div>Conversion-Tracking</div>
                                <div>Event-Tracking</div>
                                <div>Telefon-Klick-Tracking</div>
                                <div>Mail-Klick-Tracking</div>
                                <div>WhatsApp-Klick-Tracking</div>
                                <div>Formular-Tracking</div>
                                <div>Consent Mode V2</div>
                                <div>Cookie-Banner-Integration</div>
                                <div>Kampagnen-Tracking</div>
                                <div>Landingpage-Analyse</div>
                                <div>Conversion-Optimierung</div>
                                <div>User-Verhalten</div>
                                <div>Reporting</div>
                                <div>Dashboard-Strukturen</div>
                                <div>Datenbasierte Optimierung</div>
                            </div>

                            <Separator className="bg-black" />

                            <div className="text-xl lg:text-2xl tracking-tight font-medium">
                                <h3 className="text-3xl lg:text-4xl mb-3 lg:mb-5">Wartung, Support & Betreuung</h3>
                                <div>Website-Wartung</div>
                                <div>WordPress Updates</div>
                                <div>Plugin-Updates</div>
                                <div>Sicherheitschecks</div>
                                <div>Backups</div>
                                <div>Technischer Support</div>
                                <div>Performance-Kontrolle</div>
                                <div>Content-Anpassungen</div>
                                <div>Fehlerbehebung</div>
                                <div>Hosting-Beratung</div>
                                <div>Domain-Setup</div>
                                <div>E-Mail-Setup</div>
                                <div>Cookie-Updates</div>
                                <div>SEO-Betreuung</div>
                                <div>Kampagnenbetreuung</div>
                                <div>Monatliche Optimierung</div>
                                <div>Langfristige Beratung</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <SectionContact />


        </>
    )
}
