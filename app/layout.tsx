import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AFORVICE - Professional Services at Your Doorstep",
  description:
    "Your trusted platform connecting you with verified professionals for all your home and business service needs. Quality, reliability, and peace of mind guaranteed.",
  keywords: "home services, professional services, electrician, plumber, cleaner, mechanic, carpenter, painter",
  authors: [{ name: "AFORVICE" }],
  creator: "AFORVICE",
  publisher: "AFORVICE",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aforvice.com",
    title: "AFORVICE - Professional Services at Your Doorstep",
    description:
      "Your trusted platform connecting you with verified professionals for all your home and business service needs.",
    siteName: "AFORVICE",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "AFORVICE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFORVICE - Professional Services at Your Doorstep",
    description:
      "Your trusted platform connecting you with verified professionals for all your home and business service needs.",
    images: ["/favicon.png"],
    creator: "@aforvice",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
