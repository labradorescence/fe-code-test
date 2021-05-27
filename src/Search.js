import React from "react"
import SearchResults from "./SearchResults.jsx"


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  



  render() {

    return <div>

      <div className="above-result-container" id="above-result">
        <section className="above-result">
        
        <span className="search">
        Search: <input className="search-input" type="text" value={this.state.value} onChange={this.handleChange}/></span>
        </section>
      </div>



      <SearchResults term={this.state.value} />

    </div>
  }
}

export default Search
