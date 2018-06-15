import React, { Component } from 'react';
//--lecture 14
//exporting model
//classes
//states

//MAKE COMPONENT to produce HTML
/*functional component
const SearchBar = () =>{
  return <input />;
}*/
//es6 class components
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  render () {
    return (
      <div className="search-bar">
        <input //controlled component
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
