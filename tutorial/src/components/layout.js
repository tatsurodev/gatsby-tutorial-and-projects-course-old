import React from "react"
import Nabvar from "./Navbar"
import Footer from "./Footer"

const layout = ({ children }) => {
  return (
    <>
      <Nabvar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
