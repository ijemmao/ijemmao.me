import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Home from './home';
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
