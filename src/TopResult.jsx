import React from "react"
import PropTypes from "prop-types"

const TopResult = ({terms, articles}) => {
    return (
      <div>
      {articles.length?(
        <div className="above-result-container">
        <section className="above-result">
        <div className="yourresult">YOUR RESULTS:
        <span className="urinput">{terms}</span></div>
        </section>
      </div>
      ):null}
    
    <div className = "top-result-container">
    <section className = "top-result-section">
      {articles.map((article) => 
      <article key={article.nid} className = "top-result-articles">

          <a href={article.url}>
          {/* img */}
          {article.ledeImage ?  (
          <img src = {article.ledeImage.src} 
          alt={article.slug}
          className="article-img" />)
          :
          (<img src = "https://d2h1pu99sxkfvn.cloudfront.net/b0/14529008/556546919_FHZPJ4TrdB/P0.jpg" 
          alt="troll"
          className="default-img"/>)}

          {/* year */}
          <div className = "year">{article.publishedAt.slice(0,4)}</div>

          {/* title link w url */}
          <h1><a className = "title" href={article.url}>{article.title}</a></h1>
          
          {/* subtitle */}
          <p className = "subtitle">{article.deck}</p>

          {/* author name */}
          <h3 className = "author">{article.authors.map((author) => author.name)}</h3></a>
        
      </article>
      )}
    </section>
    </div>
    </div>
    )}
  
  TopResult.propTypes = {
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
  

  export default TopResult