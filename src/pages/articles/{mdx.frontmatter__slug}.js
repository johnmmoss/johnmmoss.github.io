import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { date } from "./article.css";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={`${data.mdx.frontmatter.title}`}>
      <div className="container-min ">
        <div className="d-flex flex-column justify-content-center align-items-center mt-2">
          <div className="mt-2 fst-italic fs-5 mb-3">
            {data.mdx.frontmatter.date}
          </div>
          <div className="d-flex flex-wrap justify-content-center mb-4">
            {data.mdx.frontmatter.tags?.map((tag, i) => (
              <Link
                to={`/tags/${tag}/`}
                className="badge border text-secondary text-decoration-none me-1 mb-1 tag-badge"
                key={i}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Link to="/articles" className="btn btn-outline-secondary">
          back
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
      body
    }
  }
`;

export default BlogPost;
