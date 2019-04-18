import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import certSiteBuilder from "../images/CertifiedDrupalBuilder.jpg"

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
        <p>I am primarily a back-end web developer, but I have the skills and knowledge to work on the front-end as well.</p>
        <p>I have a broad range of experience in web architectures and can adapt quickly to unfamiliar workflows.</p>
      </div>

      <div className="about__description__split">
        <div className="about__description__split__block">
          <h4>Front-End</h4>
          <p>I produce high quality, responsive websites with an exceptional user experience.</p>
          <p>My usual toolset is HTML(5), CSS(3) [SASS], and JavaScript (pre-ES6).</p>
          <p>I'm currently learning ES6+ and React to create more modern, decoupled web applications.</p>
        </div>

        <div className="about__description__split__block">
          <h4>Back-End</h4>
          <p>I setup various CMSes, such as Drupal 8 and Wordpress, and model content and post types for use.</p>
          <p>PHP is one of my strongest languages and I can develop custom themes, modules, and plugins for use in any website.</p>
          <p>Outside of D8 and WP, I really enjoy using Laravel for personal projects.</p>
        </div>
      </div>

      <div className="about__description__certifications">
        <h3>Certifications</h3>
        <a href={ certSiteBuilder } target="_blank" rel="noopener noreferrer">Acquia Certified Site Builder - Drupal 8</a>
      </div>

      <h3>Let's make something special together</h3>
    </div>
  </div>
)

const WorkSection = () => (
  <div id="work" className="work section">

  </div>
)

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
