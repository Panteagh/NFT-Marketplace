import React from 'react'
import Navbar from '/src/components/Navbar/Navbar'
import Footer from '/src/components/Footer/Footer'

function Layout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
