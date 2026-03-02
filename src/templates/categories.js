import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import ArticleCard from "../components/article-card";
import { Badge } from "react-bootstrap";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} article${totalCount === 1 ? "" : "s"} in`;
  return (
    <Layout pageTitle="Categories">
      <div className="container-min">
        <div className="d-flex justify-content-center mb-3 mt-2">
          <h5>
            {tagHeader} <Badge bg="secondary">{tag}</Badge>
          </h5>
        </div>
        {edges.map(({ node }, i) => {
          return (
            <ArticleCard
              key={node.id}
              id={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              excerpt={node.excerpt}
              slug={node.frontmatter.slug}
            ></ArticleCard>
          );
        })}
        <div className="d-flex justify-content-center mt-3 mb-4">
          <Link to="/categories" className="btn btn-primary btn-block">
            View All tags
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            tags
            slug
          }
          id
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
