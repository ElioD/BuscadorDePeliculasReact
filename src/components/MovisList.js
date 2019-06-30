import React, { Component } from "react";
import { Movie } from "./Movis";
import PropTypes from "prop-types";

export class MovisList extends Component {
  static propTypes = {
    movies: PropTypes.array
  };

  render() {
    const { movies } = this.props;

    return (
      <div className="MoviesList">
        {movies.map(movie => {
          return (
            <div key={movie.imdbID} className="MoviesList-item">
              <Movie
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
