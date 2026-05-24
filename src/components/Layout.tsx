import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileCallButton from './MobileCallButton'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  )
}

export default Layout
