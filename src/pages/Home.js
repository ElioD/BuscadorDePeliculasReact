import React, { Component } from "react";
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MovisList } from "../components/MovisList";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      usedResult: false
    };
  }

  resultados = result => {
    this.setState({
      result,
      usedResult: true
    });
  };

  evaluacion() {
    return this.state.result.length === 0 ? (
      <p>Sin resultaodos :/</p>
    ) : (
      <MovisList movies={this.state.result} />
    );
  }
  render() {
    return (
      <div>
        <Title>Buscador de peliculas</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this.resultados} />
        </div>
        {this.state.usedResult ? (
          this.evaluacion()
        ) : (
          <small>Busca tus peliculas..!!!</small>
        )}
      </div>
    );
  }
}
