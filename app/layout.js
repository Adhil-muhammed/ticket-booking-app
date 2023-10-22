import "./globals.css";
import { NavBar } from "./(components)";
import { Inter } from "next/font/google";
import { TankstackProvider } from "@/app/(providers)";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../app/(assets)/common.scss";

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
        <TankstackProvider>
          <div className=" flex flex-col h-screen max-h-screen">
            <NavBar />
            <div className="flex-grow overflow-y-auto bg-[#cdd1e4] text-white ">
              {children}
            </div>
          </div>
        </TankstackProvider>
      </body>
    </html>
  );
}
