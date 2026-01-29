import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { Layout } from "@/components/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${sans.variable}`}>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </div>
  );
}
