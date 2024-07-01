import { titilliumWeb } from "../../fonts";
import Header from "./header/page";
import Footer from "./footer/page";
import "./styles/globals.css";

export const metadata = {
  icons: {
    icon: [
      {
        url: "/Express-favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    apple: {
      url: "/Express-favicon.svg",
      type: "image/svg+xml",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titilliumWeb.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
