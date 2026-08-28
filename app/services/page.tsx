'use client';

// import Hero from "@/components/hero";
import SectionServices from "@/components/section-services/section-services";
import SectionContact from "@/components/section-contact/section-contact";
import ImageParticles from "@/components/image-particles/image-particles";
import ServicesHero from '@/components/services-hero/services-hero';
import UnderlinedHeader from '@/components/underlined-header/underlined-header';
import { Fragment } from "react";

import AmbientVideo from "@/components/ambient-video/ambient-video";

import { Separator } from "@/components/ui/separator";
import { serviceSections, type ServiceSection } from "@/lib/services";

/**
 * One numbered section: the header, a media column that stays put, and the
 * groups of services scrolling past it.
 */
function ServicesSection({ section }: { section: ServiceSection }) {
    return (
        <div className="pb-20 bg-background relative z-5">
            <div className="container mx-auto px-5">

                <UnderlinedHeader>
                    <span>{section.number} /</span> {section.title}
                </UnderlinedHeader>

                <div className="grid grid-cols-2 py-12 gap-[120px]">

                    {/* Grid items stretch to the row height by default, which leaves a
                        sticky child no room to travel. self-start shrinks the column to its
                        content so it can actually stick. */}
                    <div className="self-start sticky top-(--hdr-height)">
                        {/* AmbientVideo holds off on fetching until the clip is near the
                            viewport and pauses it once it leaves, so four portrait loops
                            don't all download during the initial page load. */}
                        <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                            <AmbientVideo
                                src={section.video}
                                poster={section.poster}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">

                        {section.groups.map((group, index) => (
                            <Fragment key={group.number}>

                                {/* Rules go between groups, not after the last one. */}
                                {index > 0 && <Separator className="bg-black" />}

                                <div className="text-2xl tracking-tight font-medium">
                                    <h3 className="text-4xl mb-5">{group.title}</h3>
                                    {group.items.map((item) => (
                                        <div key={item}>{item}</div>
                                    ))}
                                </div>

                            </Fragment>
                        ))}

                    </div>

                </div>

            </div>
        </div>
    );
}

export default function PageServices(){
    return (
        <>

            <ServicesHero title="Leistungen" />

            {serviceSections.map((section) => (
                <ServicesSection key={section.number} section={section} />
            ))}

            <SectionContact />


        </>
    )
}
