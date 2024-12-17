import clsx from "clsx";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

const SaansFont = localFont({
  src: "./saans-font.woff2",
  display: "swap",
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: "swap",
  variable: "--font-monospace",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Syarif Dairani - Software Engineer</title>
        <meta
          name="description"
          content="Syarif Dairani is a software engineer based in Bali, passionate about developing user interfaces for web and mobile."
        />
        <meta
          property="og:title"
          content="Syarif Dairani - Software Engineer"
        />
        <meta
          name="og:description"
          content="Syarif Dairani is a software engineer based in Bali, passionate about developing user interfaces for web and mobile."
        />
        <meta
          property="og:site_name"
          content="Syarif Dairani - Software Engineer"
        />
        <meta property="og:image" content="https://syarifd.com/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Syarif Dairani - Software Engineer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@sh4reef_py_old" />
        <meta
          name="twitter:title"
          content="Syarif Dairani - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Syarif Dairani is a software engineer based in Bali, passionate about developing user interfaces for web and mobile."
        />
        <meta name="twitter:image" content="https://syarifd.com/og.png" />
      </Head>
      <div className={clsx(SaansFont.className, JetBrainsMonoFont.variable)}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
