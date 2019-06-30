import React, { Component } from "react";
import PropTypes from "prop-types";
import { BontonRegresarHome } from "../components/BontonRegresarHome";

const API_KEY = "7e946c5a";

export class Detalles extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  };

  state = {
    movie: {}
  };

  componentDidMount() {
    console.log(this.props);

    const { id } = this.props.match.params;

    this.buscarPelocula(id);
  }

  buscarPelocula(id) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(r => {
        this.setState({
          movie: r
        });
      });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <BontonRegresarHome />
        <h1>{Title}</h1>
        <img src={Poster} alt={Poster} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
