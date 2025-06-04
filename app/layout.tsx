import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Bold.ttf",
      weight: "700", // Bold weight
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

const futura = localFont({
  src: [
    {
      path: "./fonts/FuturaStdLight.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"), // Add http://
  keywords: ["Skillvity"],
  title: {
    default: "Skillvity Website",
    template: `%s | Skillvity Website`,
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    description: "Test the Metatags in Next.js",
    images: [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gilroy.variable} ${futura.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
