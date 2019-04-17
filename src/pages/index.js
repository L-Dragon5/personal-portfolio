import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IntroSection = () => (
  <section id="intro">
    <h1>Welcome</h1>
    <h2>My name is Joseph Oh</h2>
    <h4>I'm a full-stack web developer (with an expertise in back-end)</h4>
  </section>
)

const AboutSection = () => (
  <section id="about">
    <div className="about__description">
      <div className="about__description__split">
        <p>On the front-end, I help produce high quality, responsive websites with an exceptional user experience.</p>
        <p>On the back-end, I model data and setup various CMSes such as Drupal 8 and Wordpress.</p>
      </div>
      
      <p>I have a broad range of experience in web architectures and can adapt quickly to unfamiliar workflows.</p>
    </div>

    <div className="about__skills"></div>

    <h3>Let's make something special together</h3>
  </section>
)

const WorkSection = () => (
  <section id="work">
  
  </section>
)

const ContactSection = () => (
  <section id="contact">
  
  </section>
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
