import { Inter } from 'next/font/google';
import '../styles/theme/app.scss';
import '../styles/fonts/fontface.css';

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  themeColor: '#FF7A6B',
  viewport: 'width=device-width, initial-scale=1.0 maximum-scale=1.0',
}

export const metadata = {
  title: 'Playground',
  description: 'There is no limit to play around. ✨',
  manifest: '/site.webmanifest',
  icons: {
    favicon: '/favicon.svg',
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
