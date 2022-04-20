import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      numerosDeClick: 0,
    };
    this.color = this.color.bind(this);
  }

  color() {
    console.log(this);
    this.setState((estadoAnterior) => ({
      numerosDeClick: estadoAnterior.numerosDeClick + 1,
    }));
  }

  getColorButton(colorButton) {
    return colorButton % 2 === 0 ? "green" : "white";
  }

  render() {
    const { numerosDeClick } = this.state;
    return (
      <button
        style={{ backgroundColor: this.getColorButton(numerosDeClick) }}
        onClick={this.color}
      >
        {this.state.numerosDeClick} start
      </button>
    );
  }
}

export default Button;
