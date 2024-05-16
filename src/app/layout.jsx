import "./styles/globals.css";
import { titilliumWeb } from "../../fonts";
import Header from "./header/page";
import Footer from "./footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}