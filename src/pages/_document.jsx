import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-slate-50">
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
