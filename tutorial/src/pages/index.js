import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      {/* inline cssは、global cssより優先順位が高い */}
      <h1 style={{ color: "green", textTransform: "uppercase" }}>
        hello from gatsby
      </h1>
      <h1>hello world</h1>
      <h1>hello people</h1>
    </Layout>
  )
}
