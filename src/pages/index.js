import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ArticleCard from "../components/article-card";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="unstacked.net">
      <div className="row mt-md-3">
        <div className="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
          <StaticImage
            src="../images/me-medium.jpg"
            alt="avatar"
            className="rounded-circle"
          ></StaticImage>
        </div>
        <div className="col-12 col-sm-8 col-md-9 col-lg-10 d-flex flex-column justify-content-center">
          <p className="lead">
            Hi, my name is John, I’m a professional Software Developer based in
            Leeds, UK.
          </p>
          <p>
            I commonly work with small to medium size businesses based in the
            North of England using predominantly C# and ASP.NET to write a
            mixture of frontend and backend applications.
          </p>
        </div>
      </div>
      <div className="row mt-1">
        <div className="d-none d-lg-block col-lg-2">&nbsp;</div>
        <div className="col-12 col-md-9 col-lg-8">
          <h3 className="home">Recent Articles</h3>
          {data.allMdx.nodes.map((node) => (
            <ArticleCard
              id={node.id}
              key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              slug={node.frontmatter.slug}
              tags={node.frontmatter.tags}
            ></ArticleCard>
          ))}
        </div>
        <div className="col-12 col-md-3 col-lg-2 mb-3">
          <h3 className="home">Topics</h3>
          <ul>
            <li>
              <Link to="/tags/asp-net-core">ASP.NET Core</Link>
            </li>
            <li>
              <Link to="/tags/c">C#</Link>
            </li>
            <li>
              <Link to="/tags/bootstrap">Bootstrap</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 6) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
          slug
        }
        id
        excerpt(pruneLength: 260)
      }
    }
  }
`;

// Step 3: Export your component
export default IndexPage;
