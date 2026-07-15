import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flordeaco.com.br"),

  title: "Flor de Aço | Engenharia e Construção",

  description:
    "Projetos e obras residenciais de alto padrão em São José do Rio Preto e região.",

  openGraph: {
    title: "Flor de Aço | Engenharia e Construção",
    description:
      "Projetos e obras residenciais de alto padrão em São José do Rio Preto e região.",
    url: "https://flordeaco.com.br",
    siteName: "Flor de Aço",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flor de Aço Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Flor de Aço | Engenharia e Construção",
    description:
      "Projetos e obras residenciais de alto padrão em São José do Rio Preto e região.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} font-body bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}