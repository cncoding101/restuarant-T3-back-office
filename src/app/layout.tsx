import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";

import "~/styles/globals.css";
import Layout from "~/components/templates/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Boothaus",
  icons: [{ rel: "icon", url: "/logo_head.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar: React.ComponentProps<typeof Layout>["navbar"] = {
    logo: {
      url: "logo.svg",
      width: 25,
      height: 25,
    },
    links: [
      {
        to: "/",
        label: "Dashboard",
      },
      {
        to: "/uploads",
        label: "Upload",
      },
      {
        to: "/vouchers",
        label: "Voucher",
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <Layout navbar={navbar}>{children}</Layout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
