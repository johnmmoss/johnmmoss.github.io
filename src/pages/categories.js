import React from "react";
import kebabCase from "lodash/kebabCase";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const CategoriesPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const sortedTags = [...group].sort((a, b) => b.totalCount - a.totalCount);

  return (
    <Layout pageTitle="Categories">
      <div className="container-min mt-5 ps-1">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {sortedTags.map((tag) => (
            <Link
              key={tag.fieldValue}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              className="btn btn-secondary"
            >
              {tag.fieldValue}
              <span className="badge bg-secondary ms-2">{tag.totalCount}</span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
