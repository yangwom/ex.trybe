import React, { Component } from "react";
import DataFieldset from "./DataFieldset";
import PersonalFieldset from "./PersonalFildset";
import PropTypes from 'prop-types'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      age: "",
      anecdote: "",
      terms: false,
    };


  }
  
  handleChange(event) {
    const { name } = event.target;
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { name , email, age, anecdote , terms } = this.state;

    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
        <PersonalFieldset
              nameValue={ name }
              emailValue={ email }
              ageValue={ age }
              handleChange={ this.handleChange }
            />
          
          <label htmlFor="terms">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                onChange={ this.handleChange }
                value={ terms }
              />
              Concordo com termos e acordos
            </label>

          
          <DataFieldset anecdoteValue={ anecdote } handleChange={ this.handleChange } />
        
        </form>
      </div>
    );
  }
}
PersonalFieldset.propTypes = {
    handleChange: PropTypes.func.isRequired,
    nameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    ageValue: PropTypes.string.isRequired,
  };

export default Form;
