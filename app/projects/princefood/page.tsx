import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import ImageParticles from "@/components/image-particles/image-particles";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";
import type { Metadata } from "next";
import { breadcrumbSchema, caseStudySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Prince Food",
  description:
    "Digitaler Auftritt für ein Produktionsunternehmen: Vertrauen schaffen, Prozesse sichtbar machen, industrielle Stärke verständlich kommunizieren.",
  alternates: { canonical: "/projects/princefood" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/princefood",
    siteName: "Mindlind Werbeagentur",
    title: "Prince Food | Mindlind Werbeagentur",
    description:
      "Digitaler Auftritt für ein Produktionsunternehmen: Vertrauen schaffen, Prozesse sichtbar machen, industrielle Stärke verständlich kommunizieren.",
    images: [
      {
        url: "/images/case-prince-food-2.webp",
        alt: "Prince Food — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Food | Mindlind Werbeagentur",
    description:
      "Digitaler Auftritt für ein Produktionsunternehmen: Vertrauen schaffen, Prozesse sichtbar machen, industrielle Stärke verständlich kommunizieren.",
    images: [
      {
        url: "/images/case-prince-food-2.webp",
        alt: "Prince Food — Mindlind Werbeagentur",
      },
    ],
  },
};


export default function PageCasePrince() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Projekte", path: "/projects" },
              { name: "Prince Food", path: "/projects/princefood" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            caseStudySchema({ path: "/projects/princefood", name: "Prince Food" }),
          ),
        }}
      />

      {/* Hero */}
      <ImageParticles
        src="/images/case-prince-food-1.webp"
        alt=""
        style={{ aspectRatio: "21/9", minHeight: "70svh" }}
      />

      {/* Original parallax hero, kept for reference
      <ParallaxImage
        src="/images/case-prince-food-1.webp"
        alt=""
        height="clamp(340px, 60vh, 750px)"
        strength={80}
        preload
        className="w-full"
      />
      */}

      <div className="container mx-auto px-5 py-10 lg:py-15">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl tracking-tight font-bold -mt-1 uppercase">Prince Food</h1>
          </div>
          <div>
            <div className="pills flex-wrap lg:justify-end">
              <div className="pills-item">WEBSITE</div>
              <div className="pills-item">FOOD PRODUCTION</div>
              <div className="pills-item">B2B</div>
              <div className="pills-item">Frozen Food</div>
              <div className="pills-item">Brand Presentation</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-10 lg:my-15" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:justify-between lg:gap-10">
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">CLIENT</div>
            <div className="text-base font-medium">PRINCE FOOD</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">NICHE</div>
            <div className="text-base font-medium">Food Production / Frozen Food</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">YEAR</div>
            <div className="text-base font-medium">2025</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">CLIENT LOCATION</div>
            <div className="text-base font-medium">GERMANY / INTERNATIONAL</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">TIMELINE</div>
            <div className="text-base font-medium">1 Monat</div>
          </div>
        </div>

        <div className="mt-10 lg:mt-15">
          <DoorButton className="w-full" href="https://prince-food.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>


      <div className="container mx-auto px-5">

        <div className="text-lg sm:text-xl lg:text-2xl font-medium space-y-3 max-w-250 my-8 lg:my-12">
          <p>Prince Food ist ein großer Lebensmittelproduzent, spezialisiert auf die Herstellung, Verarbeitung und Tiefkühlung von Lebensmitteln für den professionellen B2B-Markt. Das Unternehmen arbeitet mit modernen Produktionsanlagen, großen Förder- und Verarbeitungssystemen sowie klar strukturierten Prozessen für gleichbleibende Qualität.</p>
          <p>Als zuverlässiger Partner beliefert Prince Food unterschiedliche Unternehmen mit tiefgekühlten Produkten und Produktionslösungen. Im Mittelpunkt stehen Effizienz, Hygiene, Produktionssicherheit und die Fähigkeit, auch größere Mengen zuverlässig und konstant bereitzustellen.</p>
        </div>

        <div className="bg-white rounded-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-25 my-10 lg:my-15 p-6 lg:pl-15 lg:pr-30 lg:py-10">
          <div className="w-full lg:flex-1">
            <div className="flex items-center justify-center py-6 px-5 min-h-40 lg:py-10 lg:min-h-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="154" height="50" viewBox="0 0 154 50" fill="none"><g clipPath="url(#clip0_282_594)"><path d="M68.7818 35.4576V39.1004H64.5973V49.5778H60.638V39.1004H57.5851V35.4576H60.638C60.638 31.4758 63.3812 29.3867 68.7818 29.3867V32.5831C66.0112 32.5831 64.5973 33.5147 64.5973 35.4633L68.7818 35.4576Z" fill="black"/><path d="M79.1293 35.0342C84.1585 35.0342 87.8161 38.0559 87.8161 42.5458C87.8161 46.9511 84.1688 50.0014 79.1293 50.0014C74.1813 50.0014 70.478 46.805 70.478 42.5458C70.478 38.2249 74.1539 35.0342 79.1293 35.0342ZM79.1293 46.3358C81.9571 46.3358 83.851 44.7547 83.851 42.5515C83.851 40.2923 81.9571 38.6827 79.1293 38.6827C76.4159 38.6827 74.4362 40.2923 74.4362 42.5515C74.4362 44.7502 76.4433 46.3301 79.1293 46.3301V46.3358Z" fill="black"/><path d="M98.3282 35.0342C103.357 35.0342 107.008 38.0559 107.008 42.5458C107.008 46.9511 103.361 50.0014 98.3282 50.0014C93.3802 50.0014 89.6758 46.805 89.6758 42.5458C89.6758 38.2249 93.3516 35.0342 98.3282 35.0342ZM98.3282 46.3358C101.155 46.3358 103.05 44.7547 103.05 42.5515C103.05 40.2923 101.155 38.6827 98.3282 38.6827C95.6136 38.6827 93.634 40.2923 93.634 42.5515C93.634 44.7502 95.6422 46.3301 98.3282 46.3301V46.3358Z" fill="black"/><path d="M123.405 49.5776L123.011 47.718C121.569 49.1587 119.504 50.0012 117.102 50.0012C112.407 50.0012 108.872 46.8047 108.872 42.5455C108.872 38.2246 112.379 35.0339 117.102 35.0339C119.448 35.0339 121.513 35.8524 122.954 37.2646V33.7633C122.954 33.2441 123.056 32.7299 123.255 32.2502C123.454 31.7705 123.746 31.3347 124.114 30.9675C124.481 30.6004 124.918 30.3093 125.398 30.1107C125.878 29.9121 126.393 29.8099 126.913 29.8101V49.5776H123.405ZM117.949 46.4954C120.946 46.4954 122.953 44.8857 122.953 42.5421C122.953 40.1699 120.917 38.5043 117.949 38.5043C114.98 38.5043 112.832 40.1984 112.832 42.5421C112.833 44.8332 114.981 46.4988 117.95 46.4988L117.949 46.4954Z" fill="black"/><path d="M61.1194 7.38462L61.4874 9.19174C62.9288 7.77961 64.9987 6.96338 67.3681 6.96338C72.0613 6.96338 75.5977 10.1541 75.5977 14.4179C75.5977 18.7388 72.0921 21.9306 67.3681 21.9306C65.0216 21.9306 62.9859 21.1395 61.5389 19.7274V23.2012C61.5389 24.2497 61.1219 25.2552 60.3795 25.9966C59.6372 26.738 58.6305 27.1545 57.5807 27.1545V7.38462H61.1194ZM66.52 10.4349C63.5483 10.4349 61.5435 12.0719 61.5435 14.4156C61.5435 16.7878 63.5505 18.426 66.52 18.426C69.5455 18.426 71.6372 16.7319 71.6372 14.4156C71.6372 12.0993 69.4884 10.4349 66.52 10.4349Z" fill="black"/><path d="M89.0012 11.1404C84.7881 11.1404 82.3284 13.5377 82.3284 17.4944V21.5037H78.3713V7.38462H81.9066L82.3307 11.0559C83.6291 8.54218 85.9722 6.96338 89.0012 6.96338V11.1404Z" fill="black"/><path d="M95.5849 7.38477H91.6267V21.505H95.5849V7.38477Z" fill="black"/><path d="M103.219 21.5037H99.261V7.38462H102.795L103.191 9.70317C104.435 8.00906 106.301 6.96338 108.507 6.96338C112.747 6.96338 115.717 10.2112 115.717 14.927V21.5059H111.758V14.9247C111.758 12.3825 109.949 10.6039 107.432 10.6039C104.915 10.6039 103.219 12.3825 103.219 14.9247V21.5037Z" fill="black"/><path d="M127.054 18.3134C129.203 18.3134 130.787 17.4664 131.437 15.9983H135.537C134.801 19.584 131.437 21.9345 127.054 21.9345C122.106 21.9345 118.402 18.7381 118.402 14.4789C118.402 10.158 122.078 6.96729 127.054 6.96729C131.409 6.96729 134.745 9.25044 135.512 12.8692H131.406C130.756 11.4286 129.173 10.553 127.051 10.553C124.338 10.553 122.358 12.1911 122.358 14.4789C122.361 16.7323 124.368 18.3134 127.054 18.3134Z" fill="black"/><path d="M141.107 15.4331C141.531 17.4662 143.34 18.8213 145.715 18.8213C147.413 18.8213 148.769 18.2003 149.504 17.1843H153.52C152.445 20.0645 149.42 21.9287 145.546 21.9287C140.683 21.9287 137.036 18.7322 137.036 14.473C137.036 10.1521 140.654 6.96143 145.546 6.96143C150.381 6.96143 154.004 9.98319 154.004 14.473C154.014 14.7941 153.995 15.1153 153.948 15.4331H141.107ZM149.928 13.4559C149.533 11.4513 147.864 10.1521 145.546 10.1521C143.26 10.1521 141.531 11.4798 141.107 13.4559H149.928Z" fill="black"/><path d="M96.5095 0C96.5095 0 96.5095 2.20781 95.0236 3.65305C94.3001 4.35512 93.2257 4.87682 91.6278 4.87682C91.6278 4.87682 91.6278 3.34711 92.4862 2.00005C93.1594 0.944088 94.363 0 96.5095 0Z" fill="black"/><path d="M21.9752 0.228516C9.83888 0.228516 0 10.3566 0 22.8489C0 31.832 5.08746 39.5913 12.4586 43.2421V39.1141C8.63419 36.8828 5.71808 33.3783 4.22141 29.2148C2.72473 25.0513 2.74299 20.4946 4.27297 16.3432C5.80296 12.1918 8.74705 8.71072 12.5892 6.51003C16.4314 4.30933 20.9265 3.52945 25.2867 4.3071C29.6469 5.08474 33.594 7.37028 36.4361 10.7631C39.2782 14.156 40.834 18.4396 40.8308 22.8633C40.8276 27.287 39.2657 31.5684 36.4187 34.9572C33.5718 38.346 29.6214 40.6259 25.2601 41.3973V30.1539H30.3442C30.5133 30.1539 30.6814 30.1539 30.8471 30.139H35.7677C36.2752 29.1863 36.6813 28.1831 36.9792 27.1458H36.9678C36.9678 27.1389 36.9781 27.1344 36.9827 27.1264H25.2761V23.6674H37.5907C37.5907 23.6149 37.5907 23.3352 37.5907 23.1149V23.0966C37.5907 23.0338 37.5907 22.9688 37.5907 22.9025C37.5907 22.9197 37.5907 22.9379 37.5907 22.9551V22.8489C37.5907 22.7987 37.5907 22.7484 37.5907 22.6982C37.5907 22.6822 37.5907 22.6674 37.5907 22.6514V22.6035C37.5907 22.584 37.5907 22.5669 37.5907 22.5498C37.5907 22.487 37.5907 22.4254 37.5907 22.3626C37.5901 22.3577 37.5901 22.3527 37.5907 22.3477C37.5913 22.3432 37.5913 22.3386 37.5907 22.334V22.3272C37.5907 22.3146 37.5907 22.3021 37.5907 22.2895C37.5907 22.277 37.5907 22.2747 37.5907 22.2667C37.5907 22.2587 37.5907 22.2518 37.5907 22.2439C37.5907 22.2359 37.5907 22.2245 37.5907 22.2142C37.5907 22.2039 37.5907 22.1776 37.5907 22.1594C37.5702 21.6628 37.5279 21.1696 37.4604 20.6856C37.4502 20.6103 37.4387 20.5349 37.4273 20.4573C37.4159 20.3797 37.4079 20.3431 37.3987 20.2781C37.3782 20.1525 37.3553 20.0281 37.3313 19.9025C37.3233 19.8591 37.3153 19.818 37.3061 19.7746C37.2639 19.5611 37.217 19.3477 37.1644 19.1365C37.1518 19.0828 37.1381 19.0292 37.1244 18.9755C37.105 18.9002 37.0844 18.8225 37.0638 18.7472C37.0478 18.689 37.033 18.633 37.0147 18.5725C36.985 18.4698 36.9552 18.3682 36.9232 18.2655C36.9118 18.2255 36.8992 18.1855 36.8867 18.1513C36.863 18.0752 36.8379 17.9991 36.8112 17.923C36.7941 17.8682 36.7747 17.8157 36.7564 17.762L36.6901 17.5748C36.6695 17.5189 36.6501 17.4606 36.6295 17.4058C36.6089 17.351 36.5781 17.2711 36.5506 17.2049C36.5232 17.1387 36.5026 17.0805 36.4786 17.02C36.4546 16.9595 36.4398 16.9241 36.4192 16.8773L36.3712 16.7631L36.322 16.649C36.2957 16.5919 36.2706 16.5348 36.2443 16.4755C36.218 16.4161 36.1906 16.3613 36.162 16.2974L36.1449 16.2597L36.0626 16.0885L35.9803 15.9184C35.9631 15.8818 35.9448 15.8453 35.9266 15.8042L35.8957 15.7437C35.866 15.6878 35.8363 15.6296 35.8077 15.5759C35.7791 15.5222 35.7654 15.496 35.7448 15.4617C35.7418 15.4558 35.7384 15.4501 35.7345 15.4446C35.7242 15.4252 35.714 15.4058 35.7025 15.3864L35.6728 15.3339C35.6522 15.2951 35.6317 15.2574 35.6099 15.2197C35.5882 15.1821 35.5882 15.1798 35.5768 15.1604C35.5654 15.141 35.5368 15.0896 35.5151 15.0542L35.4191 14.8898C35.3893 14.8396 35.3596 14.7893 35.3288 14.7391L35.2305 14.5793L35.1493 14.4514C35.1162 14.3989 35.0807 14.3464 35.0464 14.2939C35.0122 14.2414 34.9607 14.1626 34.9161 14.0976C34.8716 14.0325 34.8293 13.9697 34.7847 13.9069C34.7401 13.8441 34.6978 13.7836 34.6533 13.722C34.5138 13.5264 34.3698 13.3361 34.2212 13.1512C34.1241 13.029 34.0258 12.908 33.9252 12.7882L33.772 12.6101C33.7206 12.5507 33.668 12.4959 33.6166 12.4343C33.5651 12.3726 33.5114 12.3201 33.4588 12.2608C33.3628 12.1557 33.2657 12.053 33.1662 11.9525C33.1354 11.9183 33.1022 11.8863 33.0702 11.8532L32.9719 11.7539C32.909 11.6923 32.8462 11.6306 32.7822 11.5701C32.7182 11.5096 32.6839 11.4753 32.6336 11.4308C32.5593 11.3589 32.4816 11.2893 32.405 11.2196C32.3673 11.1842 32.3261 11.15 32.2907 11.1146L32.1135 10.9616L31.8975 10.7801L31.7512 10.666C31.6815 10.6077 31.6083 10.5518 31.5352 10.4959L31.3946 10.3886C31.3626 10.3635 31.3306 10.3395 31.2974 10.3166C31.2643 10.2938 31.2151 10.255 31.1728 10.2242L30.982 10.0872L30.8117 9.97303C30.7606 9.9365 30.708 9.90111 30.6539 9.86686C30.6082 9.8349 30.5613 9.80408 30.5145 9.77325L30.3739 9.68307C30.3202 9.64768 30.2665 9.61572 30.2116 9.58147C30.1293 9.5301 30.047 9.47987 29.9624 9.42964L29.8344 9.3543C29.7384 9.29836 29.6424 9.24014 29.5441 9.18991C29.5029 9.16593 29.4606 9.14425 29.4195 9.12142C29.3978 9.10886 29.3772 9.09744 29.3555 9.08716C29.3086 9.06205 29.2618 9.03694 29.2138 9.01296C29.1657 8.98899 29.1143 8.96045 29.0652 8.93534C29.016 8.91022 28.9589 8.88168 28.9063 8.85657C28.8766 8.84059 28.8457 8.82574 28.816 8.81205C28.7863 8.79835 28.7406 8.77438 28.7017 8.75725C28.6003 8.70854 28.4975 8.6606 28.3931 8.61341L28.2685 8.55861C28.1725 8.51637 28.0765 8.47528 27.9793 8.43533L27.8376 8.3771L27.6776 8.31432C27.6307 8.29491 27.5827 8.27778 27.5358 8.25952C27.489 8.24125 27.4215 8.21614 27.3621 8.19559L27.1415 8.11569L26.9518 8.05176L26.8226 8.00266C26.7575 7.98211 26.6935 7.96043 26.6283 7.94216C26.5632 7.9239 26.522 7.90792 26.4671 7.89308L26.2385 7.82686C26.1677 7.80631 26.0957 7.78691 26.0237 7.76864L25.8305 7.71841L25.6019 7.66248L25.4259 7.62252C25.2491 7.58219 25.0696 7.54413 24.8875 7.50836C24.8087 7.49352 24.7286 7.47868 24.6475 7.46613L24.4841 7.43872C24.1412 7.38393 23.7834 7.33941 23.4268 7.30859L23.1788 7.28918C23.0987 7.28233 23.0176 7.27777 22.9376 7.2732C22.765 7.26293 22.5947 7.25608 22.4175 7.25265C22.3375 7.25265 22.2575 7.25265 22.1775 7.25265C22.0975 7.25265 22.0438 7.25265 21.9763 7.25265C21.878 7.25265 21.7809 7.25265 21.6837 7.25265H21.6391C21.5786 7.25265 21.5191 7.25265 21.4585 7.25265C21.1511 7.26179 20.8448 7.28119 20.5442 7.30859L20.4047 7.32229L20.3098 7.33141L20.1841 7.34512L20.0698 7.35768L19.9555 7.37252L19.8161 7.39192L19.6926 7.40905C19.5703 7.42731 19.4503 7.44558 19.3303 7.46613C19.2785 7.47374 19.2282 7.48287 19.1794 7.49352C19.1223 7.50266 19.0651 7.51407 19.008 7.52434L18.8811 7.5506L18.8262 7.56087C18.7268 7.58028 18.6296 7.60198 18.5313 7.62367L18.2159 7.69786L18.0593 7.73782C17.9541 7.76408 17.8501 7.79262 17.7472 7.8223L17.4386 7.91134L17.3323 7.94445L17.202 7.98554L17.0569 8.03235L16.9357 8.07344L16.8294 8.10997C16.7791 8.1271 16.7277 8.14422 16.6786 8.16363C16.6294 8.18304 16.578 8.19902 16.5288 8.21842L16.3791 8.27436L16.2328 8.3303C16.1836 8.35084 16.1322 8.37026 16.0831 8.39195L15.9356 8.45245C15.5942 8.59628 15.2586 8.75116 14.9286 8.91707L14.788 8.98899C14.6463 9.06205 14.508 9.13625 14.3708 9.2173C14.324 9.24356 14.2783 9.26753 14.2337 9.29493C14.1423 9.3463 14.0497 9.39996 13.9605 9.45475L13.8268 9.53581C13.6816 9.62371 13.5376 9.71504 13.397 9.80636L13.205 9.9365L13.0255 10.0598C12.9432 10.1169 12.8621 10.174 12.7821 10.2333C12.7021 10.2927 12.6209 10.3475 12.5421 10.4114L12.5306 10.4205C12.4541 10.4776 12.3786 10.5347 12.302 10.594L12.278 10.6135C12.2083 10.6682 12.1386 10.7276 12.07 10.7813C12.0014 10.8349 11.9157 10.908 11.8414 10.9731L11.6345 11.1523L11.4276 11.3384L11.3305 11.4285C11.2059 11.5427 11.0836 11.6569 10.9636 11.7813C10.9053 11.8395 10.8493 11.8954 10.7899 11.9571L10.719 12.0302C10.6733 12.077 10.6275 12.1249 10.583 12.1729C10.4938 12.2676 10.4058 12.3624 10.3212 12.4594C10.2766 12.5085 10.2321 12.5587 10.1898 12.6078L10.1349 12.6717C10.0881 12.7254 10.0423 12.779 9.9989 12.8327C9.97604 12.8578 9.95432 12.8852 9.93146 12.9115L9.8286 13.0382C9.79888 13.0736 9.76802 13.1112 9.7383 13.1523C9.70858 13.1934 9.65486 13.2585 9.61371 13.3133C9.59085 13.3407 9.56914 13.3692 9.54628 13.3989C9.43198 13.5462 9.32339 13.6957 9.21595 13.8487C9.17023 13.9126 9.12565 13.9754 9.08108 14.0405L9.04336 14.0976C8.9965 14.1649 8.95192 14.2334 8.90734 14.3008L8.86505 14.3647L8.73589 14.5645C8.73359 14.5708 8.7301 14.5766 8.72561 14.5816C8.67417 14.6661 8.6216 14.7494 8.5713 14.8339C8.52444 14.9126 8.47643 14.9914 8.43071 15.0713L8.40214 15.1216C8.35985 15.1958 8.3187 15.27 8.27755 15.3499C8.27099 15.3593 8.26526 15.3692 8.26041 15.3795C8.21583 15.4606 8.1724 15.5428 8.13011 15.6238C8.12295 15.6356 8.11647 15.6478 8.11068 15.6604C8.11068 15.6695 8.10153 15.6798 8.09696 15.6878C8.05353 15.7711 8.01124 15.8556 7.96895 15.9401C7.96676 15.946 7.96408 15.9517 7.96094 15.9572C7.92094 16.0394 7.88093 16.1204 7.84664 16.2038C7.81236 16.2871 7.76549 16.3773 7.72549 16.464C7.71749 16.48 7.71063 16.496 7.70263 16.5131L7.61576 16.7129C7.61436 16.718 7.61245 16.723 7.61005 16.7278C7.57233 16.8157 7.53575 16.9036 7.49575 16.9926L7.46146 17.0782L7.38602 17.27C7.31439 17.4587 7.24581 17.649 7.18028 17.8408C7.14599 17.9424 7.11284 18.044 7.08084 18.1445C7.01569 18.3488 6.95625 18.5543 6.8991 18.7609C6.09256 21.745 6.19028 24.9009 7.17989 27.8295C8.1695 30.7581 10.0065 33.3277 12.4586 35.2133V30.4313C10.5186 27.9948 9.58809 24.908 9.8587 21.8068C10.1293 18.7056 11.5804 15.8261 13.9132 13.7615C16.2459 11.697 19.2826 10.6045 22.3977 10.7093C25.5128 10.8141 28.469 12.1081 30.6574 14.3247C30.5282 14.319 30.4002 14.3156 30.2699 14.3156H17.1072C17.0549 14.3154 17.0026 14.318 16.9506 14.3236H15.3618V33.0455C15.3626 33.0461 15.3631 33.0469 15.3635 33.0478C15.3639 33.0487 15.3641 33.0496 15.3641 33.0506C15.3641 33.0516 15.3639 33.0525 15.3635 33.0534C15.3631 33.0543 15.3626 33.0551 15.3618 33.0558V36.9759C15.371 36.9816 15.3515 36.9862 15.3618 36.9908V40.4874C15.3618 40.4874 15.3618 40.4874 15.3618 40.4943V44.4202V49.773C15.7802 49.773 16.1946 49.6907 16.5811 49.5307C16.9677 49.3708 17.3189 49.1363 17.6147 48.8408C17.9105 48.5452 18.1452 48.1943 18.3052 47.8082C18.4652 47.4221 18.5475 47.0082 18.5473 46.5903V17.2837H26.7586V17.2757H32.7982C33.3522 18.3467 33.7425 19.4946 33.956 20.681H23.6965C23.6439 20.6804 23.5912 20.6827 23.5388 20.6879H22.0895V46.6017C22.0889 47.018 22.1704 47.4302 22.3295 47.815C22.4886 48.1997 22.722 48.5494 23.0165 48.8439C23.311 49.1384 23.6607 49.3721 24.0457 49.5315C24.4307 49.691 24.8434 49.773 25.2601 49.773V45.217C35.8374 43.5857 43.9492 34.1916 43.9492 22.8489C43.9492 10.3566 34.1115 0.228516 21.9752 0.228516ZM37.5005 21.2142C37.5011 21.224 37.5011 21.234 37.5005 21.2438L37.4902 21.1457C37.4959 21.1685 37.4982 21.1913 37.5005 21.2142Z" fill="black"/></g><defs><clipPath id="clip0_282_594"><rect width="154" height="50" fill="black"/></clipPath></defs></svg>
            </div>
          </div>
          <div className="w-full lg:flex-2">
            <p className="text-lg">Ein Produktionsunternehmen braucht einen digitalen Auftritt, der Vertrauen schafft, Prozesse sichtbar macht und industrielle Stärke verständlich kommuniziert.</p>
          </div>
        </div>

      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">Prince Food verfügte bereits über eine starke operative Grundlage: große Produktionsflächen, moderne Technik, eingespielte Abläufe und Erfahrung in der Herstellung tiefgekühlter Lebensmittel. Die Herausforderung bestand darin, diese industrielle Kompetenz digital so darzustellen, dass sie für Geschäftspartner, Kunden und potenzielle Auftraggeber sofort verständlich wird.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, die Marke nicht als gewöhnlichen Lebensmittelanbieter zu betrachten, sondern als professionellen Produktionspartner. Die Website sollte zeigen, dass Prince Food nicht nur Produkte liefert, sondern komplette Produktionsprozesse beherrscht — von der Verarbeitung über die Tiefkühlung bis zur zuverlässigen Bereitstellung für größere Abnehmer.</div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <Image
          src="/images/case-prince-food-2.webp"
          width={1000}
          height={600}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Process */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Process</h2>
        <div className="text-base space-y-3 flex-2">Die zentrale Aufgabe lag darin, ein eher technisches und industrielles Thema hochwertig, klar und visuell attraktiv zu präsentieren. Lebensmittelproduktion muss Vertrauen erzeugen: Sauberkeit, Struktur, Qualitätssicherung und professionelle Abläufe sind entscheidend. Genau diese Werte mussten auf der Website sichtbar werden.</div>
        <div className="text-base space-y-3 flex-2">Wir entwickelten einen digitalen Auftritt, der die Produktionswelt von Prince Food verständlich und modern inszeniert. Große Produktionsräume, sterile Arbeitsbereiche, Förderbänder, Verpackungsprozesse und tiefgekühlte Produkte wurden als zentrale visuelle Elemente gedacht. Dadurch entsteht ein Auftritt, der sowohl industrielle Stärke als auch Lebensmittelqualität transportiert.</div>
      </div>


      <div className="px-5 py-10 lg:px-8 lg:py-15">
        <div className="flex flex-col lg:flex-row gap-5">
          <Image
            src="/images/case-prince-food-3.webp"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
          <Image
            src="/images/case-prince-food-4.webp"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <div className="text-lg lg:text-xl space-y-3 max-w-235">
          <p>Die visuelle Sprache wurde bewusst hochwertig und technisch präzise aufgebaut. Statt einer klassischen Food-Website entstand eine moderne B2B-Präsentation, die Produktionskapazität, Hygiene und Zuverlässigkeit in den Mittelpunkt stellt.</p>
          <p>Kühle Farben, klare Strukturen und starke Produktdetails unterstützen den Eindruck eines Unternehmens, das professionell, skalierbar und prozesssicher arbeitet.</p>
        </div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <Image
          src="/images/case-prince-food-5.webp"
          width={1000}
          height={600}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <div className="text-lg lg:text-xl space-y-3 max-w-235">
          <p>Ein besonderer Fokus lag auf der Darstellung der Produktionsprozesse. Prince Food verarbeitet und friert Lebensmittel nicht nur ein, sondern organisiert komplette Abläufe für größere Mengen und professionelle Anforderungen.</p>
          <p>Die Website erklärt diese Prozesse verständlich und macht sichtbar, warum das Unternehmen für B2B-Kunden, Gastronomie, Handel und größere Marken ein relevanter Produktionspartner ist.</p>
        </div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">Das Ergebnis ist ein klarer und professioneller digitaler Auftritt, der Prince Food als starken Produktionspartner im Bereich tiefgekühlter Lebensmittel positioniert. Die Website vermittelt Vertrauen, zeigt industrielle Kompetenz und macht die Produktionsqualität des Unternehmens sichtbar.</div>
        <div className="text-base space-y-3 flex-2">Prince Food wird dadurch nicht nur als Lieferant einzelner Produkte wahrgenommen, sondern als zuverlässiger Partner für skalierbare Lebensmittelproduktion. Der digitale Auftritt stärkt die Marke, erklärt das Leistungsangebot verständlich und schafft eine professionelle Grundlage für neue Geschäftsanfragen.</div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Credits</h2>
        <div className="flex-1">
          <div className="border-b border-gray-200 flex gap-6 lg:gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Creative Direction</div>
            <div className="flex-1">Georgy</div>
          </div>
          <div className="border-b border-gray-200 flex gap-6 lg:gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Web Design</div>
            <div className="flex-1">Max</div>
          </div>
          <div className="border-b border-gray-200 flex gap-6 lg:gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">UX / UI</div>
            <div className="flex-1">Almaz</div>
          </div>
          <div className="border-b border-gray-200 flex gap-6 lg:gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Development</div>
            <div className="flex-1">Jan</div>
          </div>
          <div className="border-b border-gray-200 flex gap-6 lg:gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Brand Presentation</div>
            <div className="flex-1">Jan</div>
          </div>
          <div className="border-b border-gray-200 flex gap-6 lg:gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Visual Concept</div>
            <div className="flex-1">Almaz</div>
          </div>
        </div>
      </div>


    </>
  )
}

