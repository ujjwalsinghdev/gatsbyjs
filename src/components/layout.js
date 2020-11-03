import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.css"

const layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default layout
