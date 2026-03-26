"use client";

import { Logo } from "../logo/logo";
import { Separator } from "../ui/separator";
import DarkVeil from "../DarkVeil/DarkVeil";
import "./footer.css";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";


export function Footer() {
  const t = useTranslations("Footer");
  return (
        <div className="ftr">

            <DarkVeil speed={0.5} warpAmount={0.3} hueShift={-260} />

            <div className="container">

                <div className="ftr-main">

                    <div className="ftr-main-menus">

                        <ul className="ftr-menu">
                            <li>
                                <a href="#intro">{t("about")}</a>
                            </li>
                            <li>
                                <a href="#services">{t("services")}</a>
                            </li>
                            <li>
                                <Link href="/kontakt">{t("contact")}</Link>
                            </li>
                        </ul>

                        {/* <ul className="ftr-menu">
                            <li>
                                <a href="#">Internet Marketing</a>
                            </li>
                            <li>
                                <a href="#">Webentwicklung</a>
                            </li>
                            <li>
                                <a href="#">Videoproduktion</a>
                            </li>
                        </ul> */}

                        {/* <ul className="ftr-menu">
                            <li>
                                <a href="#">Another service</a>
                            </li>
                            <li>
                                <a href="#">Internet Marketing</a>
                            </li>
                            <li>
                                <a href="#">Videoproduktion</a>
                            </li>
                        </ul> */}

                    </div>

                    <div className="ftr-main-brand">
                        <Logo color="white" />
                    </div>

                </div>

                <Separator className="bg-white/20" />

                <div className="ftr-contact">

                    <div className="ftr-contact-items">
                        <div className="ftr-contact-item">
                            <a href="tel:017624685516">0176 24685516</a>
                        </div>
                        <div className="ftr-contact-item">
                            <a href="mailto:info@mindlind.de">info@mindlind.de</a>
                        </div>
                    </div>

                    <div className="ftr-socials">
                        <a className="ftr-socials-item" href="#">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.3335 15.9995C26.3335 12.8158 26.3196 11.4715 25.9615 10.4165C25.2619 8.35584 23.6442 6.73718 21.5835 6.03763C20.5286 5.67952 19.1835 5.66654 15.9995 5.66654C12.816 5.66654 11.4714 5.6796 10.4165 6.03763C8.35581 6.73716 6.73716 8.35581 6.03763 10.4165C5.6796 11.4714 5.66654 12.816 5.66654 15.9995C5.66654 19.1835 5.67952 20.5286 6.03763 21.5835C6.73718 23.6442 8.35584 25.2619 10.4165 25.9615C11.4715 26.3196 12.8158 26.3335 15.9995 26.3335C19.1835 26.3335 20.5286 26.3196 21.5835 25.9615C23.644 25.2619 25.2619 23.644 25.9615 21.5835C26.3196 20.5286 26.3335 19.1835 26.3335 15.9995ZM18.9995 15.9995C18.9994 14.3428 17.6563 12.9995 15.9995 12.9995C14.343 12.9997 12.9997 14.343 12.9995 15.9995C12.9995 17.6563 14.3428 18.9994 15.9995 18.9995C17.6564 18.9995 18.9995 17.6564 18.9995 15.9995ZM22.0025 8.99955C22.5547 8.99955 23.0023 9.44741 23.0025 9.99955C23.0025 10.5518 22.5548 10.9995 22.0025 10.9995H21.9995C21.4474 10.9994 20.9995 10.5517 20.9995 9.99955C20.9997 9.44752 21.4475 8.99972 21.9995 8.99955H22.0025ZM20.9995 15.9995C20.9995 18.761 18.761 20.9995 15.9995 20.9995C13.2383 20.9994 10.9995 18.7609 10.9995 15.9995C10.9997 13.2384 13.2384 10.9997 15.9995 10.9995C18.7609 10.9995 20.9994 13.2383 20.9995 15.9995ZM28.3335 15.9995C28.3335 19.0209 28.3469 20.7797 27.856 22.2261C26.9566 24.8756 24.8756 26.9566 22.2261 27.856C20.7797 28.3469 19.0209 28.3335 15.9995 28.3335C12.9786 28.3335 11.2203 28.3468 9.77396 27.856C7.12445 26.9566 5.04347 24.8756 4.14408 22.2261C3.6531 20.7797 3.66654 19.021 3.66654 15.9995C3.66654 12.9785 3.65322 11.2203 4.14408 9.77396C5.04347 7.12445 7.12445 5.04347 9.77396 4.14408C11.2203 3.65322 12.9785 3.66654 15.9995 3.66654C19.021 3.66654 20.7797 3.6531 22.2261 4.14408C24.8756 5.04347 26.9566 7.12445 27.856 9.77396C28.3468 11.2203 28.3335 12.9786 28.3335 15.9995Z" fill="white"/></svg>
                        </a>
                        <a className="ftr-socials-item" href="#">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 13.333C15.0002 11.3081 16.6421 9.66699 18.667 9.66699H19.333C19.8853 9.66699 20.333 10.1147 20.333 10.667C20.3328 11.2191 19.8852 11.667 19.333 11.667H18.667C17.7466 11.667 17.0002 12.4127 17 13.333V16.333H18.667C19.219 16.3332 19.6668 16.781 19.667 17.333C19.667 17.8852 19.2191 18.3328 18.667 18.333H17V26.9521C22.6064 26.4468 27 21.738 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 21.738 9.39363 26.4468 15 26.9521V18.333H13.333C12.7809 18.3328 12.333 17.8852 12.333 17.333C12.3332 16.781 12.781 16.3332 13.333 16.333H15V13.333ZM29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16Z" fill="white"/></svg>
                        </a>
                    </div>
                    
                </div>

                <div className="ftr-bottom">

                    <ul className="ftr-links">
                        <li>
                            <Link href="/datenschutz">{t("privacy")}</Link>
                        </li>
                        <li>
                            <Link href="/impressum">{t("imprint")}</Link>
                        </li>
                    </ul>

                    <div className="ftr-copy">
                        <a href="/">mindlind.de</a> 2026
                    </div>
                    
                </div>
                
            </div>
        </div>
      )
}