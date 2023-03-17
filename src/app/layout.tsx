"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Component/Footer'
import Header from './Component/Header'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
        <Header/>
        {children}
        <Footer/>
        </ChakraProvider>
        </body>
    </html>
  )
}
