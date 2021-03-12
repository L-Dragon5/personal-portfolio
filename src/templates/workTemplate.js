import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="single-work__container">
      <div className="single-work__heading">
        <Link to="/">&laquo; Go Back</Link>

        <h1>{frontmatter.title}</h1>
      </div>
      <div className="single-work__content">
        <div className="single-work__content__body">
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="single-work__content__body__description"
          />
        </div>

        {frontmatter.coverImage !== null ? (
          <GatsbyImage
            image={frontmatter.coverImage.childImageSharp.gatsbyImageData}
            className="single-work__content__image" 
          />
        ) : null}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        coverImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 960)
          }
        }
      }
    }
  }
`;
