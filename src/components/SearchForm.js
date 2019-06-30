import React, { Component } from "react";
import axios from "axios";
const API_KEY = "7e946c5a";

export class SearchForm extends Component {
  state = {
    inputMovie: ""
  };

  datosdePelicula = e => {
    this.setState({
      inputMovie: e.target.value
    });
  };

  enviarDatos = e => {
    e.preventDefault();
    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(r => {
        const { Search = [], totalResults = "0" } = r; // valor po defecto a search es [] por que si no viene nada no de error
        console.log({ Search });
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this.enviarDatos}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this.datosdePelicula}
              type="text"
              placeholder="Busca tus pelicula"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
