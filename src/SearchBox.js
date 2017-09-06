import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <div id="brand">Lil' Twitter API</div>
        <form id="search-form">
          <input id="search" type="text" name="query" />
        </form>
        <i class="fa fa-search"></i>
      </div>
    )
  }
}

export default SearchBox;
