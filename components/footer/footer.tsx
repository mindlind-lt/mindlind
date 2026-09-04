import CtaBox from '../cta-box/cta-box';
import SocialsIcons from '../socials-icons/socials-icons';
import FooterMenu from '../footer-menu/footer-menu';
import ConsentSettingsLink from '../consent/consent-settings-link';
import LoadingOrb from '../loading-orb/loading-orb';
import Strands from '../strands/strands';
import './footer.css';
import Link from 'next/link';

export default function Footer(){

    return (
        <div className="ftr relative">
            <div className="ftr-box relative z-10">

                <div className="ftr-strands">
                    <Strands
                        colors={[
                            '#0FD680', '#00D4FF', '#4C6FFF', '#A855F7',
                            '#FF2D95', '#A855F7', '#4C6FFF', '#00D4FF'
                        ]}
                        count={4}
                        speed={0.35}
                        amplitude={0.6}
                        waviness={0.9}
                        thickness={0.6}
                        glow={1.4}
                        taper={3}
                        spread={1}
                        hueShift={0.35}
                        intensity={0.5}
                        saturation={1.6}
                        opacity={0.6}
                        scale={1}
                    />
                </div>

                <div className="container mx-auto max-w-[840px] px-6 lg:px-8 relative z-10">
                    <div className='ftr-brand'>
                        {/* <div className='font-mono uppercase text-2xl'>Digital Creative Agency</div> */}
                        <div className="mt-4">

                            <svg width="1291" height="210" viewBox="0 0 1291 210" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 210V0H48L76.2 199.2H79.8L108 0H156V210H132.6V10.8H129L100.8 210H55.2L27 10.8H23.4V210H0Z"/>
                                <path d="M174.091 210V186.6H228.091V23.4H174.091V0H307.291V23.4H253.291V186.6H307.291V210H174.091Z"/>
                                <path d="M333.483 210V0H383.883L444.483 199.2H448.083V0H473.283V210H422.883L362.283 10.8H358.683V210H333.483Z"/>
                                <path d="M496.174 210V186.3H514.174V23.4H496.174V0H565.174C590.974 0 609.874 6.3 621.874 18.9C634.074 31.3 640.174 51 640.174 78V132C640.174 159 634.074 178.8 621.874 191.4C609.874 203.8 590.974 210 565.174 210H496.174ZM539.374 186.6H561.574C573.774 186.6 583.774 185 591.574 181.8C599.574 178.4 605.474 172.6 609.274 164.4C613.074 156.2 614.974 144.8 614.974 130.2V79.8C614.974 65.2 613.074 53.8 609.274 45.6C605.474 37.4 599.574 31.7 591.574 28.5C583.774 25.1 573.774 23.4 561.574 23.4H539.374V186.6Z"/>
                                <path d="M663.066 210V0H688.266V186.6H798.066V210H663.066Z"/>
                                <path d="M824.857 210V186.6H878.857V23.4H824.857V0H958.057V23.4H904.057V186.6H958.057V210H824.857Z"/>
                                <path d="M984.248 210V0H1034.65L1095.25 199.2H1098.85V0H1124.05V210H1073.65L1013.05 10.8H1009.45V210H984.248Z"/>
                                <path d="M1146.94 210V186.3H1164.94V23.4H1146.94V0H1215.94C1241.74 0 1260.64 6.3 1272.64 18.9C1284.84 31.3 1290.94 51 1290.94 78V132C1290.94 159 1284.84 178.8 1272.64 191.4C1260.64 203.8 1241.74 210 1215.94 210H1146.94ZM1190.14 186.6H1212.34C1224.54 186.6 1234.54 185 1242.34 181.8C1250.34 178.4 1256.24 172.6 1260.04 164.4C1263.84 156.2 1265.74 144.8 1265.74 130.2V79.8C1265.74 65.2 1263.84 53.8 1260.04 45.6C1256.24 37.4 1250.34 31.7 1242.34 28.5C1234.54 25.1 1224.54 23.4 1212.34 23.4H1190.14V186.6Z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10 mix-blend-lighten">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-10 lg:gap-16 xl:gap-28">

                        <div className='flex flex-col justify-between'>

                            <div className='mb-12 cta-box-wrap'>
                                <CtaBox />
                            </div>

                            <div className='mb-12 flex-1'>
                                <div className='font-mono text-lg uppercase mb-5'>Folgen Sie uns</div>
                                <SocialsIcons color="white" />
                            </div>

                            <div className='ftr-links'>
                                <Link href="/impressum">Impressum</Link>
                                <Link href="/datenschutz">Datenschutz</Link>
                                <ConsentSettingsLink />
                            </div>

                        </div>

                        <div className='hidden lg:flex items-center justify-center text-3xl'>
                            {/* background stays .ftr-box's colour, NOT the preset's
                                #070709, so the orb's square canvas blends in. */}
                            <LoadingOrb preset="Ghost" values={{ background: '#1A1A1A' }} />
                        </div>

                        <div>

                            <div className='mb-12'>
                                <FooterMenu />
                            </div>

                            <div className='mb-12 lg:mb-24 ftr-cinfo'>
                                {/* <div>
                                    <a href="#">Žirgų g. 18-6, Raudondvario k. LT-14257 Vilnius</a>
                                </div> */}
                                <div>
                                    <a href="mailto:info@mindlind.de">info@mindlind.de</a>
                                </div>
                                <div>
                                    <a href="tel:+37067546918">+370 675 46 918</a>
                                </div>
                                <div>
                                    <a href="tel:+4917624685516">+49 176 24685516</a>
                                </div>
                            </div>

                            <div className='ftr-copyright'>© Mindlind Agency. All Rights Reserved.</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
