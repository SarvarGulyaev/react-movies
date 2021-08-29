import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  // inputHandle(event) {
  //     this.setState({
  //         [event.target.name]: event.target.value
  //     })
  // }

  enterSearch(event) {
    if (event.key === "Enter") {
      this.props.find(this.state.search, this.state.type);
    }
  }

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.find(this.state.search, this.state.type);
      }
    );
  };

  render(props) {
    return (
      <div className="row search">
        <div className="col s12">
          <div className="input-field search">
            <input
              value={this.state.search}
              placeholder="Title film"
              id="email_inline"
              type="email"
              className="validate"
              onChange={(event) =>
                this.setState({
                  search: event.target.value,
                })
              }
              onKeyDown={this.enterSearch.bind(this)}
            />

            <a
              onClick={() =>
                this.props.find(this.state.search, this.state.type)
              }
              class="waves-effect waves-light btn-small"
            >
              Search
            </a>
          </div>
        </div>
        <div className="radios">
          <label>
            <input
              name="group1"
              type="radio"
              data-type="all"
              checked={this.state.type === "all"}
              onChange={this.handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="movie"
              checked={this.state.type === "movie"}
              onChange={this.handleFilter}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="series"
              checked={this.state.type === "series"}
              onChange={this.handleFilter}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
