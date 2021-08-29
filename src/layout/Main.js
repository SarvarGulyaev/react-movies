import React, { Component } from "react";
import { Cards } from "../components/Cards";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
        })
      );
  }

  getFilmsInInput = (title, type = "all") => {
    this.setState({
      loading: true,
    });
    if (!title) {
      return;
    }
    return fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        return this.setState({
          movies: data.Search,
          loading: false,
        });
      });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <h2 style={{ textAlign: "center" }}>SarvarGulyaev React-App-Films</h2>
        <Search find={this.getFilmsInInput} />
        {loading ? <Preloader /> : <Cards data={this.state.movies} />}
      </main>
    );
  }
}

export { Main };
