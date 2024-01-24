import { Inter } from 'next/font/google';
import '../styles/scss/project/app.scss';
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

// @TODO
// import CommandMenu from '@/components/Additional/CommandMenu/CommandMenu';
// <CommandMenu />
// <body className={`dark-command ${inter.className}`}>