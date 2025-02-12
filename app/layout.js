import "./styles/globals.css";
import "./styles/layout.css";
import "animate.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata = {
  title: "iBukas Energy - Smart Solar Calculator for Your Home & Business",
  description:
    "Plan your solar setup with iBukas Energy's Calculator. Use our smart solar calculator to estimate the panels, batteries, and inverters needed based on your appliances and energy consumption.",
  keywords:
    "solar calculator, solar energy, solar estimation, solar power, renewable energy, solar panel calculator, solar system sizing, solar battery calculator, clean energy, iBukas Energy, gozkybrain, gee brain, izuka",
  author: "Gee Brain",
  robots: "index, follow",
  openGraph: {
    title: "iBukas Energy - Smart Solar System Calculator",
    description:
      "Accurately calculate your solar power needs with iBukas Energy. Get customized estimates for solar panels, inverters, and batteries based on your home's energy consumption.",
    url: "https://ibukas-energy.netlify.app",
    type: "website",
    site_name: "iBukas Energy",
    images: [
      {
        url: "https://ibukas-energy.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iBukas Energy - Solar Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://twitter.com/gozkybrain4u",
    creator: "https://twitter.com/gozkybrain4u",
    title: "iBukas Energy - Smart Solar Calculator",
    description:
      "Use iBukas Energy to estimate the solar panels, batteries, and inverters needed for your home or business. Get accurate solar setup recommendations now!",
    images: ["https://ibukas-energy.netlify.app/twitter-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
