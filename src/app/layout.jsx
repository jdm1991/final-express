// app/layout.js
import { titilliumWeb } from "../../fonts";
import Header from "./header/page";
import Footer from "./footer/page";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titilliumWeb.variable} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}