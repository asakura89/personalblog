import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Index = () => (
    <Layout>
        <SEO title="Page Index" />
        <h1>Page Index</h1>
        <ul>
            <li><Link to="/2019-01-11">Enjoying Powershell</Link></li>
        </ul>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default Index;
export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
          html
          frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
        }
    }
`