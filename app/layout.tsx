import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "banpuheart",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-W9SWXN52" />
    </html>
  )
}
