import React, { useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import SEO from "../components/seo";
import OuterLink from "../components/OuterLink";
import SkillBar from "../components/SkillBar";

import certSiteBuilder from "../images/CertifiedDrupalBuilder.jpg";
import certDeveloper from "../images/CertifiedDrupalDeveloper.jpg";
import certDeveloperFES from "../images/CertifiedDrupalDeveloperFES.jpg";

const IndexPage = () => {
  // This is needed for Gatsby due to static nature.
  let AOS;

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
        edges {
          node {
            frontmatter {
              path
              title
              coverImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 1920)
                }
              }
            }
          }
        }
      }
      file(relativePath: { eq: "intro-bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const workPaths = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO
        title="Portfolio"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />

      <div className="intro section">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="intro background" />
        <div className="overlay" />
        <div className="intro__heading">
          <h1
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos="fade-zoom-in"
          >
            Welcome!
          </h1>
          <h1
            data-aos-delay="750"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            My name is Joseph Oh
          </h1>
          <h3
            data-aos-delay="1250"
            data-aos-duration="1000"
            data-aos="fade-left"
          >
            I am a full-stack web developer
          </h3>
        </div>

        <div className="intro__scroll">
          <p data-aos-delay="2000" data-aos-duration="2000" data-aos="zoom-in">
            Scroll down to learn more about me
          </p>
        </div>
      </div>

      <div className="about section">
        <div className="about__description">
          <div
            className="about__description__introduction"
            data-aos="fade-down"
          >
            <p>
              I am a full-stack web developer with a focus in back-end
              technologies. I produce high quality, responsive websites with a
              pleasant user experience. I am far from a designer, but I will
              still try to keep things looking satisfying.
            </p>
            <p>
              I have a broad range of experience in web architectures and can
              adapt quickly to unfamiliar workflows.
            </p>
          </div>

          <div className="about__description__bars">
            <div
              className="about__description__bars__section"
              data-aos="zoom-in-right"
              data-aos-duration="750"
            >
              <h3>Languages</h3>
              <SkillBar text="HTML" amount={95} />
              <SkillBar text="CSS" amount={95} />
              <SkillBar text="SASS" amount={80} />
              <SkillBar text="PHP" amount={93} />
              <SkillBar text="JavaScript ES5+" amount={90} />
              <SkillBar text="Typescript" amount={65} />
              <SkillBar text="GraphQL" amount={50} />
            </div>

            <div
              className="about__description__bars__section"
              data-aos="zoom-in-left"
              data-aos-duration="750"
            >
              <h3>Content Management Systems</h3>
              <SkillBar text="Drupal 8" amount={90} />
              <SkillBar text="Drupal 7" amount={60} />
              <SkillBar text="WordPress" amount={80} />
            </div>

            <div
              className="about__description__bars__section"
              data-aos="zoom-in-right"
              data-aos-duration="750"
            >
              <h3>Frameworks/Libraries</h3>
              <SkillBar text="React" amount={85} />
              <SkillBar text="Laravel" amount={85} />
              <SkillBar text="GatsbyJS" amount={65} />
              <SkillBar text="Angular" amount={35} />
              <SkillBar text="TailwindCSS" amount={75} />
            </div>

            <div
              className="about__description__bars__section about__description__certifications"
              data-aos="zoom-in-left"
              data-aos-duration="750"
            >
              <h3>Certifications</h3>
              <a
                href={certSiteBuilder}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acquia Certified Site Builder - Drupal 8
              </a>
              <br />
              <a href={certDeveloper} target="_blank" rel="noopener noreferrer">
                Acquia Certified Developer - Drupal 8
              </a>
              <br />
              <a
                href={certDeveloperFES}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acquia Certified Front End Specialist - Drupal 8
              </a>
            </div>
          </div>
        </div>
      </div>

      <h2
        style={{ textAlign: "center", marginBottom: "32px" }}
        data-aos="fade-up"
      >
        Featured Personal Projects
      </h2>
      <div className="work section">
        {workPaths.map(({ node }, i) => (
          <Link
            to={node.frontmatter.path}
            key={i}
            className="work__link"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-offset="200"
          >
            {node.frontmatter.coverImage !== null ? (
              <GatsbyImage 
                image={node.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                className="work__link__image"
              />
            ) : null}

            <div className="work__link__title">{node.frontmatter.title}</div>
          </Link>
        ))}
      </div>

      <div className="contact section">
        <div className="contact__text">
          <h1>Do you like what you see?</h1>
          <h2>Send me a message:</h2>
        </div>

        <div className="contact__links">
          <OuterLink to="mailto:me@joseph-oh.com">me@joseph-oh.com</OuterLink>
          <OuterLink to="https://docs.google.com/document/d/e/2PACX-1vQPK-Ejqjmp7Gg1XzSSxUseDzixvzCDLbvHhtiDZVwFAX-sgfC2dacpYRLu4z9rnBLtriB2IyllNPWw/pub">
            Resume
          </OuterLink>
          <OuterLink to="https://github.com/L-Dragon5">GitHub</OuterLink>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
