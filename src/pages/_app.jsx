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
      </Head>
      <div className={clsx(SaansFont.className, JetBrainsMonoFont.variable)}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
