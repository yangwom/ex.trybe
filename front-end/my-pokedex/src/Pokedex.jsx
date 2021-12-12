import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from './mundoPkemon/dados'

class Pokedex extends Component {
    render() {
        return (
            
            <ul>{data.map((pokemon) => <Pokemon dados={pokemon}/>)}</ul> )
         
    }
}

export default Pokedex