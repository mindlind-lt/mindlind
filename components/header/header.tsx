"use client";

import { useState } from "react";
import { Logo } from "@/components/logo/logo";
import "./header.css";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

type HeaderColorTheme = "default" | "white";
type HeaderPosition = "default" | "absolute";

type HeaderProps = {
  colorTheme?: HeaderColorTheme;
  position?: HeaderPosition;
};

const COLOR_THEME_CLASS: Record<HeaderColorTheme, string> = {
  default: "hdr-default",
  white: "hdr-white",
};

const POSITION_CLASS: Record<HeaderPosition, string> = {
  default: "hdr-position-default",
  absolute: "hdr-position-absolute",
};

const LOGO_COLOR_BY_THEME: Record<HeaderColorTheme, "brand" | "white"> = {
  default: "brand",
  white: "white",
};

export function Header({ colorTheme = "default", position = "default" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  const hdrClassName = `hdr ${COLOR_THEME_CLASS[colorTheme]} ${POSITION_CLASS[position]} ${isMobileMenuOpen ? "hdr-has-mobnav-expanded" : ""}`;
  const logoColor = LOGO_COLOR_BY_THEME[colorTheme];

  function switchLocale(locale: string) {
    router.replace(pathname, { locale });
  }

  return (
    <div className={hdrClassName}>
      <div className="container">
        <div className="hdr-row">

          <div className="hdr-brand">
            <Logo color={logoColor} aria-label="Mindlind Logo" />
          </div>

          {/* Desktop menu */}
          <div className="hdr-menu">
            <Link className="hdr-menu-item" href="/">{t("home")}</Link>
            <Link className="hdr-menu-item" href="/#intro">{t("about")}</Link>
            <Link className="hdr-menu-item" href="/#services">{t("services")}</Link>
            <Link className="hdr-menu-item" href="/#works">{t("portfolio")}</Link>
            <Link className="hdr-menu-item" href="/kontakt">{t("contact")}</Link>
          </div>

          <div className="hdr-languages">
            <div className="langswitcher">
              <button
                className={`langswitcher-item ${currentLocale === "de" ? "langswitcher-item-active" : ""}`}
                onClick={() => switchLocale("de")}
              >DE</button>
              <button
                className={`langswitcher-item ${currentLocale === "lv" ? "langswitcher-item-active" : ""}`}
                onClick={() => switchLocale("lv")}
              >LV</button>
            </div>
          </div>

          {/* Hamburger toggle — visible on mobile only */}
          <div className="hdr-hamburger">
            <button
              className={`burger ${isMobileMenuOpen ? "burger-active" : ""}`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <div className="burger-inner">
                <span></span>
                <span></span>
              </div>
              <div className="burger-label">Menu</div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <div className={`hdr-mobnav ${isMobileMenuOpen ? "hdr-mobnav-expanded" : ""}`}>
        <div className="hdr-mobnav-menu">
          <Link className="hdr-mobnav-menu-item" href="/">{t("home")}</Link>
          <Link className="hdr-mobnav-menu-item" href="/#intro">{t("about")}</Link>
          <Link className="hdr-mobnav-menu-item" href="/#services">{t("services")}</Link>
          <Link className="hdr-mobnav-menu-item" href="/#works">{t("portfolio")}</Link>
          <Link className="hdr-mobnav-menu-item" href="/kontakt">{t("contact")}</Link>
        </div>
      </div>
    </div>
  );
}
