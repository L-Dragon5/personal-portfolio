import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import certSiteBuilder from "../images/CertifiedDrupalBuilder.jpg"
import certDeveloper from '../images/CertifiedDrupalDeveloper.jpg';
import certDeveloperFES from '../images/CertifiedDrupalDeveloperFES.jpg';

const IntroSection = () => (
  <div id="intro" className="intro section">
    <div className="intro__heading">
      <h1>Welcome!</h1>
      <h1>My name is Joseph Oh</h1>
      <h3>I am a web developer</h3>

      <p>Scroll down to learn more about me</p>
    </div>
  </div>
)

const AboutSection = () => (
  <div id="about" className="about section">
    <div className="about__description">
      <div className="about__description__introduction">
        <p>I am a full-stack developer with a focus in back-end technologies.</p>
        <p>I have a broad range of experience in web architectures and can adapt quickly to unfamiliar workflows.</p>
      </div>

      <div className="about__description__split">
        <div className="about__description__split__block">
          <h4>Front-End</h4>
          <p>I produce high quality, responsive websites with an exceptional user experience.</p>
          <p>My usual toolset is HTML(5), CSS(3) [SASS], and JavaScript.</p>
          <p>Lately, a lot of my personal projects have been built using React.</p>
        </div>

        <div className="about__description__split__block">
          <h4>Back-End</h4>
          <p>I setup various CMSes, such as Drupal 8 and Wordpress, and model content and post types for use.</p>
          <p>PHP is one of my strongest languages and I can develop custom themes, modules, and plugins for use in any website.</p>
          <p>Outside of D8 and WP, I really enjoy using Laravel REST API for personal projects. This works really well with React FE builds.</p>
        </div>
      </div>

      <div className="about__description__certifications">
        <h3>Certifications</h3>
        <a href={ certSiteBuilder } target="_blank">Acquia Certified Site Builder - Drupal 8</a><br />
        <a href={ certDeveloper } target="_blank">Acquia Certified Developer - Drupal 8</a><br />
        <a href={ certDeveloperFES } target="_blank">Acquia Certified Front End Specialist - Drupal 8</a>
      </div>

      <h3>Let's make something special together</h3>
    </div>
  </div>
)

const WorkSection = () => {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
        edges {
          node {
            frontmatter {
              path
              title
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const workPaths = data.allMarkdownRemark.edges;

  return (
    <div id="work" className="work section">
      {workPaths.map(({ node }, i) => (
        <Link to={node.frontmatter.path} key={i} className="work__link">
          { node.frontmatter.coverImage !== null ? (
            <Img fluid={ node.frontmatter.coverImage.childImageSharp.fluid } className="work__link__image" />
          ) : null }

          <div className="work__link__title">
            { node.frontmatter.title }
          </div>
        </Link>
      ))}
    </div>
  )
}

const ContactSection = () => (
  <div id="contact" className="contact section">
    <div className="contact__text">
      <h1>Do you like what you see?</h1>
      <h2>Send me a message:</h2>
      <a href="mailto:me@joseph-oh.com">me@joseph-oh.com</a>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`, `portfolio`]} />
    <IntroSection />
    <AboutSection />
    <WorkSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
