import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ClientProvider from "@/ClientProvider";
import UserContext from "@/context/UserContext";

const roboto = Roboto({
  weight: ["400", "700"], // Specify desired weights
  subsets: ["latin"], // Specify required subsets
  display: "swap", // Ensures text is visible while font loads
});

export const metadata: Metadata = {
  title: "My First Full stack project using next js",
  description: "This is my my first Project of Ultimate Backend Course",
};

export default function RootLayout({
  children,
  team,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {/*<div className="mt-30">
          Parallel route @ and default file.tsx ke saath chalta hai, group
          route(), dynamic route[...slug], loading, navigation sikh li, use
          router button ke liye use hota hai fonts opitmization bhi dekh li
          google be search karke roboto fonts in next.js be change kar liye in
          layout.tsx file, Image tag sikh liya, Navigation add karna sikh liya,
          links ko active rakhne ke liye usepathname hook hoti hai, @ src se ko
          target karta hai agar koi link lagana hai eg like assets folder ke
          under se image leni ho, Three types ke rendering hoti hai SSR: Server
          side rendering:user, profile, dashboard then next hai SSG: Static side
          generation render: blogs, landing page, ISR: Incrmental static
          generation: Ecommerce, news. Yeh 3 methods works only server router
          inside app router, agar page use client ho ga, then its not work, use
          client ke liye CSR means client side rendering work karta hai.
          ab next js portfolio complete ho gaya hai.
        </div>*/}
        <ClientProvider>
          <UserContext>{children}</UserContext>
        </ClientProvider>
        {/* {team}
         <Nav />
        */}
      </body>
    </html>
  );
}
