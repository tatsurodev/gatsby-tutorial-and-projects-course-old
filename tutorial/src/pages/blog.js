import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          modi, labore nostrum impedit eius expedita vel mollitia, explicabo
          rem, nam aliquid eos ad. Dicta, eos!
        </p>
      </div>
    </Layout>
  )
}

export default blog
