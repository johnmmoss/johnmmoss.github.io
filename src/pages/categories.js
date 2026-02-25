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
      <div className="container-min">
        {sortedTags.map((tag) => (
          <li key={tag.fieldValue} className="mt-1 mb-1">
            <Link
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              className="btn btn-secondary btn-sm"
            >
              {tag.fieldValue}
              <span className="badge badge-secondary">{tag.totalCount}</span>
            </Link>
          </li>
        ))}
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
