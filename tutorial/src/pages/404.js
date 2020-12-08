import React from "react"
import Layout from "../components/layout"

// filenameを404にしてcustom error page作成
export default function error() {
  return (
    <Layout>
      <h1>this is our error page</h1>
    </Layout>
  )
}
