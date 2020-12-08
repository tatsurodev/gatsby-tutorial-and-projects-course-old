import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      Hello people!
      <div>
        <Link to="/blog/">blog page</Link>
      </div>
      <a href="https://www.gatsbyjs.org">gatsby docs</a>
    </div>
  )
}
