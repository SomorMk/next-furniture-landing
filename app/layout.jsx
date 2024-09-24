import "./globals.css";
import { DM_Sans } from 'next/font/google'

export const metadata = {
  title: "Somor Furniture Next App",
  description: "Designed by Somor Mk",
};

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:description" content="Somor Furniture Next Landing Page" />
      </head>
      <body
        className={dmSans.className}
      >
        {children}
      </body>
    </html>
  );
}
