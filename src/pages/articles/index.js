import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import ArticleCard from "../../components/article-card";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <div className="container-min">
        {data.allMdx.nodes.map((node) => (
          <ArticleCard
            id={node.id}
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            slug={node.slug}
            tags={node.frontmatter.tags}
          ></ArticleCard>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
        }
        id
        slug
        excerpt(pruneLength: 260)
      }
    }
  }
`;

export default BlogPage;
