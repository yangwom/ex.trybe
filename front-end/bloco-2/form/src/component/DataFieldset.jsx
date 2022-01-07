import React, { Component } from "react";

class DataFieldset extends Component {
    render() {
        const { anecdoteValue, handleChange } = this.props;
        console.log(anecdoteValue, handleChange)
        return(
        <label htmlFor="anecdote">
        Anedota:
        <textarea id="anecdote" name="anecdote" onChange={handleChange} value={anecdoteValue} />
        <input type='file' />
      </label> )
    }
}

export default DataFieldset;