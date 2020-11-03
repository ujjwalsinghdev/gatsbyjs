import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-2.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%" alt="" />
      </article>
      <article className="single-image">
        <h3>Fixed Image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}></Image>
      </article>
      <article className="single-image">
        <h3>Fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}></Image>
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid}></Image>
        </div>
      </article>
    </section>
  )
}

export default Images
