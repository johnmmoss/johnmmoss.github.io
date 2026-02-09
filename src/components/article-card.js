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
                &nbsp; <Link to={`/articles/${slug}`}>read more ➝</Link>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              {tags?.map((tag, i) => (
                <Link
                  to={`/tags/${kebabCase(tag)}/`}
                  className="btn btn-outline-secondary btn-sm mr-5"
                  style={{ marginRight: "3%", marginBottom: "2px" }}
                  key={i}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
