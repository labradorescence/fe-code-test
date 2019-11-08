import PropTypes from "prop-types";
import React from "react";

export const TitlesOnlyListContainer = ({articles}) => {
  return <div>
    {articles.map((article) => <li key={article.nid}><a href={article.url}>{article.title}</a></li>)}
  </div>
}

TitlesOnlyListContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    nid: PropTypes.number,
    title: PropTypes.string,
    slug: PropTypes.string,
    publishedAt: PropTypes.string,
    url: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    })),
    ledeImage: PropTypes.shape({
      src: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  })),
}
