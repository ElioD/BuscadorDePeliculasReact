import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BontonRegresarHome extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Regresas al inicio</button>
        </Link>
      </div>
    );
  }
}
