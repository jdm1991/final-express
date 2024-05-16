// fonts.js
import { Titillium_Web } from "@next/font/google";

export const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-titillium-web",
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
});
