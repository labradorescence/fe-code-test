import React from "react"
import PropTypes from "prop-types"

const BottomResult = ({articles}) => 
{
    return (
      <div>
      
      {articles.length?(
        <div className="most-pop-container">
        <section className="most-pop-box">
        <div className="most-pop">MOST POPULAR</div>
        </section>
      </div>
      ):null}


    
    <div className = "bottom-result-container">

      <ul className ="bottom-result-section">
      {articles.map((article) => 
      <li key={article.nid} className="bottom-results">

          <a href={article.url}>
          {/* img */}
          {article.ledeImage ?  (
          <img src = {article.ledeImage.src} 
          alt={article.slug}
          className="bottom-img"/>)
          :
          (<img className = "bottom-img-default"src = "https://d2h1pu99sxkfvn.cloudfront.net/b0/14529008/556546919_FHZPJ4TrdB/P0.jpg" 
          alt="troll"
          height="20rem"/>)}


      
          {/* title link w url */}
          <span className = "bottom-title">{article.title}</span>

          {/* author name */}
          <span className = "bottom-author author">{article.authors.map((author) => author.name)}</span>
          </a>
      </li>
      )}
      </ul>
    </div>
    </div>
    )
  }
  
  BottomResult.propTypes = {
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
  

  export default BottomResult