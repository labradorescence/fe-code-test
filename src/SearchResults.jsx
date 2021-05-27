import React from "react"
import TopResult from "./TopResult"
import BottomResult from "./BottomResult.jsx"
import PropTypes from "prop-types"

class SearchResults extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        articles: [],
      }
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.term !== prevProps.term || this.props.limit !== prevProps.limit) {
        this.fetchArticles()
      }
    }
  
    componentDidMount() {
      this.fetchArticles()
    }
  
    articleSearch(term, limit = 20, offset = 0) {
      // eslint-disable-next-line max-len
      return fetch(`https://newrepublic.com/api/articles?q=${term}&filters[status]=PUBLISHED&fields[0]=id&fields[1]=nid&fields[2]=slug&fields[3]=title&fields[4]=authors.name,slug&fields[6]=publishedAt&fields[7]=status&fields[8]=ledeImage&fields[9]=ledeAltImage&fields[10]=url&fields[11]=urlFull&fields[12]=sponsor&fields[13]=deck&limit=${limit}&offset=${offset}`)
    }
  
    fetchArticles() {
      this.articleSearch(this.props.term, this.props.limit).then((response) => {
        response.json().then((results) => {
          // console.log(results);
          this.setState({articles: results.data.articles})
        });
      })
    }
  
    render() {
      return (
      <div> 
        <TopResult terms={this.props.term}
        articles={this.state.articles.slice(0,3)}/>

        <BottomResult articles={this.state.articles.slice(3)}/>
      </div>
      )
    }
  }
  
  SearchResults.propTypes = {
    term: PropTypes.string,
    limit: PropTypes.number,
  }
  

export default SearchResults