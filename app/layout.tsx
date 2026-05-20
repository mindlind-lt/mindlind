import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mondragon – Digital Creative Agency – Framer Template",
  description: "Framer Template for Digital Creative Agency with Future Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://framerusercontent.com/images/uGRAp8supPvhoUPaFg224ylEEs.png" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="https://framerusercontent.com/images/uGRAp8supPvhoUPaFg224ylEEs.png" rel="icon" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="https://framerusercontent.com/images/nwfgiEpIhbccJoygH0ZGot5ZhQ.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Module Preloads */}
        <link rel="modulepreload" href="https://framerusercontent.com/sites/2ywEUwmRDo33r8wOKdPnrz/react.CQg9dmOM.mjs" />
        <link rel="modulepreload" href="https://framerusercontent.com/sites/2ywEUwmRDo33r8wOKdPnrz/rolldown-runtime.DsXBSD_B.mjs" />
        <link rel="modulepreload" href="https://framerusercontent.com/sites/2ywEUwmRDo33r8wOKdPnrz/motion.VNkKVxJm.mjs" />
        <link rel="modulepreload" href="https://framerusercontent.com/sites/2ywEUwmRDo33r8wOKdPnrz/framer.CkI1Tnt1.mjs" />
      </head>
      <body>
        {children}
        
        {/* SVG Templates */}
        <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: 0, left: 0, width: 0, height: 0, zIndex: 0, contain: "strict" }} aria-hidden="true" dangerouslySetInnerHTML={{ __html: `
          <svg viewBox="0 0 8 4" overflow="visible" id="svg-712324052_315"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))"/></svg>
          <svg viewBox="0 0 8 4" overflow="visible" id="svg910750790_329"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" opacity="0.6"/></svg>
        `}} />

        {/* Framer Scripts */}
        <script async src="https://events.framer.com/script?v=2" data-fid="1b527c7cd5644ea8fd7654dc05eeb777e00234fbdbb6da7395f442114667f932" data-no-nt />
        <script type="module" async src="https://framerusercontent.com/sites/2ywEUwmRDo33r8wOKdPnrz/script_main.DJGiwIHr.mjs" />
      </body>
    </html>
  );
}
