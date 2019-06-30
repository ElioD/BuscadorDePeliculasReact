import React, { Component } from "react";
import { BontonRegresarHome } from "../components/BontonRegresarHome";
export class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="title">404!</h1>
        <p className="subtitle">No existe esta pagina</p>
        <BontonRegresarHome />
      </div>
    );
  }
}
