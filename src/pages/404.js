import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="p404">
      <div class="p404__text">
        <h1>Woops</h1>
        <h2>This doesn't look right.</h2>
        <p>I couldn't find the page you were looking for</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
