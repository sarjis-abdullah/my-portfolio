import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sarjis Portfolio',
  description: 'Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}></body>
    </html>
  )
}
