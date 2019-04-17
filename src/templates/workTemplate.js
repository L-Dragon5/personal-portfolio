import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  
  return (
    <div className="work__container">
      <div className="work__heading">
        <Link to="/">&laquo; Go Back</Link>

        <h1>{ frontmatter.title }</h1>
      </div>
      <div className="work__content">
        <div className="work__content__body">
          <div dangerouslySetInnerHTML={{ __html: html }} className="work__content__body__description" />
          <div className="work__content__body__technologies"><span>Technologies Used:</span> { frontmatter.technologies }</div>

          { frontmatter.projectLink !== "" ? (
            <a href={ frontmatter.projectLink } target="_blank" rel="noopener noreferrer" className="work__content__body__project-link">Project Link</a>
          ) : null }
        </div>
        
        { frontmatter.coverImage !== null ? (
          <Img sizes={ frontmatter.coverImage.childImageSharp.sizes } className="work__content__image" />
        ) : null }
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        projectLink
        technologies
        coverImage {
          childImageSharp {
            sizes(maxWidth: 400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`