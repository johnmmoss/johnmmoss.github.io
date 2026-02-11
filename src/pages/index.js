// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Homepage">
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
        <div className="col-12 col-md-3 mb-3">
          <h3 className="home">I Write About</h3>
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
        <div className="col-12 col-md-9 col-lg-7">
          <h3 className="home">Recent Articles</h3>
          {data.allMdx.nodes.map((node) => (
            <div className="mb-4" key={node.id}>
              <Link
                to={`/articles/${node.frontmatter.slug}`}
                className="blog-title-link"
              >
                <h5>{node.frontmatter.title}</h5>
              </Link>
              <p>
                {node.excerpt} &nbsp;
                <Link to={`/articles/${node.frontmatter.slug}`}>
                  read more ➝
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
          slug
        }
        id
        excerpt(pruneLength: 200)
      }
    }
  }
`;

// Step 3: Export your component
export default IndexPage;
