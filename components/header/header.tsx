"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Agency", href: "/agency" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Contra", href: "https://contra.com/", icon: <ContraIcon /> },
  { label: "X / Twitter", href: "https://x.com/", icon: <XIcon /> },
  { label: "Behance", href: "https://www.behance.net/", icon: <BehanceIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/", icon: <InstagramIcon /> },
];

// ─── Logo ────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <a href="/" aria-label="Home" style={{ display: "flex", alignItems: "center" }}>
      <svg
        viewBox="0 0 30 41"
        width={30}
        height={41}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 0 0 L 9.23 0 L 14.654 38.891 L 15.346 38.891 L 20.77 0 L 30 0 L 30 41 L 25.5 41 L 25.5 2.109 L 24.808 2.109 L 19.385 41 L 10.615 41 L 5.192 2.109 L 4.5 2.109 L 4.5 41 L 0 41 Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}

// ─── Social icons ─────────────────────────────────────────────────────────────

function ContraIcon() {
  return (
    <svg viewBox="0 0 40 40" width={24} height={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M 14.811 13.043 C 14.669 13.043 14.554 12.928 14.554 12.787 L 14.554 0.257 C 14.554 0.115 14.669 0 14.811 0 L 15.123 0 C 15.24 0.001 15.341 0.079 15.371 0.192 C 16.921 6.063 21.523 10.638 27.404 12.153 C 27.517 12.182 27.597 12.285 27.597 12.402 L 27.597 12.786 C 27.597 12.928 27.482 13.043 27.34 13.043 Z M 14.811 27.581 C 14.669 27.581 14.554 27.466 14.554 27.325 L 14.554 14.795 C 14.554 14.653 14.668 14.539 14.81 14.538 L 27.34 14.538 C 27.482 14.539 27.596 14.653 27.596 14.795 L 27.596 15.106 C 27.597 15.223 27.519 15.326 27.406 15.356 C 21.535 16.905 16.959 21.508 15.444 27.388 C 15.415 27.501 15.312 27.581 15.195 27.581 Z M 12.226 27.389 C 10.676 21.518 6.073 16.943 0.193 15.429 C 0.08 15.399 0 15.297 0 15.179 L 0 14.795 C 0 14.653 0.115 14.538 0.257 14.538 L 12.786 14.538 C 12.928 14.538 13.043 14.653 13.043 14.795 L 13.043 27.324 C 13.043 27.466 12.928 27.581 12.786 27.581 L 12.474 27.581 C 12.357 27.581 12.256 27.503 12.226 27.389 Z M 0 12.786 L 0 12.475 C 0 12.358 0.078 12.256 0.191 12.226 C 6.063 10.676 10.638 6.074 12.153 0.193 C 12.182 0.08 12.285 0 12.402 0 L 12.786 0 C 12.928 0 13.043 0.115 13.043 0.257 L 13.043 12.786 C 13.043 12.928 12.928 13.043 12.786 13.043 L 0.257 13.043 C 0.115 13.043 0 12.928 0 12.786 Z"
        fill="currentColor"
        transform="translate(6 6)"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 40 40" width={24} height={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M 20.475 0 L 24.462 0 L 15.752 9.742 L 26 23 L 17.977 23 L 11.689 14.96 L 4.502 23 L 0.511 23 L 9.826 12.577 L 0 0.002 L 8.227 0.002 L 13.903 7.349 Z M 19.073 20.665 L 21.283 20.665 L 7.02 2.213 L 4.65 2.213 Z"
        fill="currentColor"
        transform="translate(7.5 8.5)"
      />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 40 40" width={24} height={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M 9.598 0 C 10.551 0 11.43 0.074 12.236 0.297 C 13.042 0.445 13.701 0.742 14.288 1.113 C 14.874 1.484 15.313 2.004 15.606 2.671 C 15.9 3.339 16.046 4.155 16.046 5.046 C 16.046 6.085 15.826 6.975 15.313 7.643 C 14.874 8.311 14.141 8.905 13.262 9.35 C 14.507 9.721 15.46 10.389 16.046 11.279 C 16.632 12.17 16.999 13.283 16.999 14.544 C 16.999 15.583 16.779 16.473 16.412 17.216 C 16.046 17.958 15.46 18.625 14.8 19.071 C 14.141 19.516 13.335 19.887 12.456 20.11 C 11.577 20.332 10.697 20.481 9.818 20.481 L 0 20.481 L 0 0 Z M 9.012 8.311 C 9.818 8.311 10.478 8.088 10.99 7.717 C 11.503 7.346 11.723 6.678 11.723 5.862 C 11.723 5.417 11.65 4.972 11.503 4.675 C 11.357 4.378 11.137 4.155 10.844 3.933 C 10.551 3.784 10.258 3.636 9.891 3.562 C 9.525 3.488 9.159 3.488 8.719 3.488 L 4.469 3.488 L 4.469 8.311 Z M 9.232 17.067 C 9.672 17.067 10.111 16.993 10.478 16.919 C 10.844 16.845 11.21 16.696 11.503 16.473 C 11.796 16.251 12.016 16.028 12.236 15.657 C 12.383 15.286 12.529 14.841 12.529 14.322 C 12.529 13.283 12.236 12.541 11.65 12.021 C 11.064 11.576 10.258 11.353 9.305 11.353 L 4.469 11.353 L 4.469 17.067 Z M 23.373 16.993 C 23.959 17.587 24.838 17.883 26.011 17.883 C 26.817 17.883 27.549 17.661 28.136 17.29 C 28.722 16.845 29.088 16.399 29.235 15.954 L 32.825 15.954 C 32.239 17.735 31.359 18.996 30.187 19.813 C 29.015 20.555 27.623 21 25.937 21 C 24.765 21 23.739 20.777 22.787 20.406 C 21.834 20.035 21.102 19.516 20.442 18.774 C 19.783 18.106 19.27 17.29 18.977 16.325 C 18.61 15.36 18.464 14.322 18.464 13.134 C 18.464 12.021 18.61 10.982 18.977 10.018 C 19.343 9.053 19.856 8.237 20.515 7.495 C 21.175 6.827 21.981 6.233 22.86 5.862 C 23.813 5.491 24.765 5.269 25.937 5.269 C 27.183 5.269 28.282 5.491 29.235 6.011 C 30.187 6.53 30.92 7.124 31.506 8.014 C 32.092 8.83 32.532 9.795 32.825 10.834 C 32.971 11.873 33.044 12.912 32.971 14.099 L 22.347 14.099 C 22.347 15.286 22.787 16.399 23.373 16.993 Z M 27.989 9.201 C 27.476 8.682 26.67 8.385 25.718 8.385 C 25.058 8.385 24.545 8.534 24.106 8.756 C 23.666 8.979 23.373 9.276 23.08 9.572 C 22.787 9.869 22.64 10.24 22.567 10.611 C 22.494 10.982 22.42 11.279 22.42 11.576 L 29.015 11.576 C 28.868 10.463 28.502 9.721 27.989 9.201 Z M 21.541 1.41 L 29.747 1.41 L 29.747 3.413 L 21.541 3.413 Z"
        fill="currentColor"
        transform="translate(4 9.5)"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 40 40" width={24} height={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M 19.067 0.085 C 16.583 -0.031 10.43 -0.025 7.944 0.085 C 5.759 0.187 3.832 0.715 2.278 2.268 C -0.318 4.865 0.014 8.364 0.014 13.495 C 0.014 18.746 -0.279 22.164 2.278 24.721 C 4.885 27.326 8.434 26.985 13.505 26.985 C 18.707 26.985 20.502 26.989 22.342 26.277 C 24.843 25.306 26.73 23.07 26.915 19.055 C 27.032 16.57 27.025 10.419 26.915 7.933 C 26.692 3.193 24.148 0.319 19.067 0.085 Z M 22.999 23.003 C 21.297 24.705 18.935 24.553 13.472 24.553 C 7.847 24.553 5.592 24.636 3.946 22.986 C 2.05 21.099 2.393 18.07 2.393 13.477 C 2.393 7.261 1.755 2.785 7.993 2.465 C 9.427 2.415 9.849 2.398 13.456 2.398 L 13.507 2.432 C 19.502 2.432 24.206 1.804 24.488 8.041 C 24.552 9.464 24.567 9.891 24.567 13.493 C 24.566 19.053 24.672 21.322 22.999 23.003 Z"
        fill="currentColor"
        transform="translate(6.5 7)"
      />
      <circle cx="26.5" cy="13.5" r="1.619" fill="currentColor" />
      <circle cx="20" cy="20.5" r="4.928" fill="none" stroke="currentColor" strokeWidth="2.43" />
    </svg>
  );
}

// ─── Hamburger button ─────────────────────────────────────────────────────────

function HamburgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 5,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 8,
        width: 40,
        height: 40,
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            display: "block",
            height: 2,
            width: 24,
            background: "currentColor",
            borderRadius: 2,
            transition: "transform 0.2s, opacity 0.2s",
            ...(open && i === 0 ? { transform: "translateY(7px) rotate(30deg)" } : {}),
            ...(open && i === 1 ? { opacity: 0 } : {}),
            ...(open && i === 2 ? { transform: "translateY(-7px) rotate(-30deg)" } : {}),
          }}
        />
      ))}
    </button>
  );
}

// ─── Mobile drawer ────────────────────────────────────────────────────────────

function MobileDrawer({ open }: { open: boolean }) {
  return (
    <div
      aria-hidden={!open}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "min(320px, 90vw)",
        background: "#fff",
        boxShadow: open ? "rgba(0,0,0,0.12) -4px 0 32px" : "none",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease",
        zIndex: 999,
        overflowY: "auto",
        padding: "80px 32px 48px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        boxSizing: "border-box",
      }}
    >
      {/* Nav links */}
      <nav>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "rgb(0,0,0)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact info */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <a
          href="https://maps.app.goo.gl/mFzHrdjVoW5kQEgB6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, color: "rgb(0,0,0)", textDecoration: "none", lineHeight: 1.5 }}
        >
          27 Whitfield Yard, Shoreditch, London E2 7NX
        </a>
        <a
          href="tel:+442039991245"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 13, color: "rgb(0,0,0)", textDecoration: "none" }}
        >
          +44 20 3999 1245
        </a>
      </div>

      {/* Social links */}
      <div>
        <p style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 600, color: "rgb(0,0,0)" }}>Follow Us</p>
        <div style={{ display: "flex", gap: 16 }}>
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "rgb(0,0,0)", display: "flex", alignItems: "center" }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: 64,
          color: "#fff",
          mixBlendMode: "difference",
        }}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 32,
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger (mobile) */}
        <div className="mobile-menu-btn">
          <HamburgerButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileDrawer open={menuOpen} />

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "rgba(0,0,0,0.3)",
          }}
        />
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: flex; }
        }
      `}</style>
    </>
  );
}