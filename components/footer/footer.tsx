import CtaBox from '../cta-box/cta-box';
import SocialsIcons from '../socials-icons/socials-icons';
import './footer.css';

export default function Footer(){

    return (
        <div className="ftr"> 
            <div className="ftr-box">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-3 gap-20">

                        <div>

                            <div className='ftr-brand mb-12'>
                                <div className='font-mono uppercase text-md'>Digital Creative Agency</div>
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

                            {/* <div>Newsletter</div> */}

                            <div className='mb-12'>
                                <CtaBox />
                            </div>

                            <div className='ftr-links'>
                                <a href="#">Terms</a>
                                <a href="#">Privacy Policy</a>
                            </div>

                        </div>

                        <div>
                            <div>3D</div>
                        </div>

                        <div>

                            <div className='mb-12'>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/">Agency</a>
                                    </li>
                                    <li>
                                        <a href="/">Projects</a>
                                    </li>
                                    <li>
                                        <a href="/">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='mb-12'>
                                <div className='font-mono text-lg uppercase mb-2'>Follow us</div>
                                <SocialsIcons />
                            </div>

                            <div className='mb-24 ftr-cinfo'>
                                <div>
                                    <a href="#">27 Whitfield Yard, Shoreditch, London E2 7NX</a>
                                </div>
                                <div>
                                    <a href="#">+44 20 3999 1245</a>
                                </div>
                            </div>

                            <div className='ftr-copyright'>© Mondragon Agency. All Rights Reserved.</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
