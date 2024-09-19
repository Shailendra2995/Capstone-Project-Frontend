import React from 'react';

class ProductSearch extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state to hold the search term
    this.state = {
      searchTerm: '',
    };
  }

  // Update state with the value from the input field
  handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    // Trigger the onSearch function passed as a prop
    this.props.onSearch(e.target.value);
  };

  // Prevent default form submission and trigger the onSearch function
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <form className="d-flex employee-search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

    );
  }
}

export default ProductSearch;
