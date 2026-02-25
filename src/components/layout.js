import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>{pageTitle} - unstacked.net</title>
      </Helmet>
      <div className="site">
        <header>
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Link to="/" className="navbar-brand" activeClassName="active">
                unstacked.net
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <Nav.Item as="li">
                    <Link to="/" className="nav-link" activeClassName="active">
                      Home
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      to="/articles"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Articles
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      to="/categories"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Categories
                    </Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Link
                      to="/about"
                      className="nav-link"
                      activeClassName="active"
                    >
                      About
                    </Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="hero-main">
            <h1>{pageTitle}</h1>
          </div>
        </header>
        <main className="site-content">
          <div className="container-xxl">{children}</div>
        </main>
        <footer className="bg-light mt-4">
          <div className="pt-2 pb-2">
            Made with <a href="https://www.gatsbyjs.com/">Gatsby</a> and{" "}
            <span role="img" aria-label="Coffee emoji">
              ☕
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
