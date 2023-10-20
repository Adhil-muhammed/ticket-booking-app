import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./(components)";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ticket-Booking",
  description: "Created by adhil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex flex-col h-screen max-h-screen">
          <NavBar />
          <div className="flex-grow overflow-y-auto bg-[#2b3441] text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
