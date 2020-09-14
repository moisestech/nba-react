import * as React from "react";
import { Link } from "react-router-dom";
import slug from "slug";

export default function ArticleList({ articles, path }) {
  return (
    <>
      <h2 className="header">Articles</h2>
      <ul className="articles">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`${path}/articles/${slug(article.title)}`}>
              <h4 className="article-title">{article.title}</h4>
              <div className="article-date">
                {new Date(article.date).toLocaleDateString()}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
