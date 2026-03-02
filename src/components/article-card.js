import * as React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

const ArticleCard = ({ id, date, title, excerpt, slug, tags }) => {
  return (
    <div>
      <div className="card border-0 shadow p-2 mb-3">
        <div className="card-body">
          <h5 className="card-title fs-5">
            <Link to={`/articles/${slug}`} className="blog-title-link">
              {title}
            </Link>
          </h5>
          <span className="card-text">
            <div>
              <div className="blog-article-date">{date}</div>
              <div className="blog-article-content">
                {excerpt}
                &nbsp;
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
              <div className="d-flex flex-wrap justify-content-around">
                {tags?.map((tag, i) => (
                  <Link
                    to={`/tags/${kebabCase(tag)}/`}
                    className="badge border text-secondary text-decoration-none me-1 mb-1 tag-badge"
                    key={i}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <div className="mt-2 mt-md-0">
                <Link
                  to={`/articles/${slug}`}
                  className="btn btn-secondary w-100 text-nowrap"
                >
                  read more
                </Link>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
