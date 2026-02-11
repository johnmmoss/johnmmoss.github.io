import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { date } from "./article.css";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <div className="container-min ">
        <div className="d-flex flex-column justify-content-center align-items-center my-4">
          <h2 className={date}>{data.mdx.frontmatter.title}</h2>
          <div className="mt-2 fst-italic">{data.mdx.frontmatter.date}</div>
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
      }
      body
    }
  }
`;

export default BlogPost;
