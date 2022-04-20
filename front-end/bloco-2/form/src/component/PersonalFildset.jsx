import React, { Component } from "react";

class PersonalFieldset extends Component {
  render() {
    const { nameValue, emailValue, ageValue, handleChange } = this.props;
    return (
      <>
        
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            value={nameValue}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={emailValue}
          />
        </label>
        <label htmlFor="age">
          Idade:
          <select id="age" name="age" onChange={handleChange} value={ageValue}>
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
        </label>
      </>
    );
  }
}
export default PersonalFieldset;
