import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, alias?
          Placeat, perferendis animi! Et nihil ex atque expedita, inventore
          tenetur harum ullam doloremque reiciendis dolores.
        </p>
      </div>
    </Layout>
  )
}

export default blog
