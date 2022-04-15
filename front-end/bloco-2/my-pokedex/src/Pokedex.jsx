import React, { Component } from "react";
import Pokemon from "./Pokemon";
import Bnt from "./Button";
import data from "./mundoPkemon/dados";

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      proximoPokemon: 0,
      filterPokemon: data,

    };
    this.filterFire = this.filterFire.bind(this)
    this.filterPysychic = this.filterPysychic.bind(this)
  }
 filterPysychic() {
     
     this.setState(()=> ({
       proximoPokemon: 0,
        filterPokemon : data.filter((pokemon) => pokemon.type === 'Psychic')
     }))
 }

   filterFire() {
       this.setState(() => ({
        proximoPokemon: 0,
        filterPokemon: data.filter((pokemon)=> pokemon.type === 'Fire')
       }))
    
    
    }


  next() {
    if ( this.state.proximoPokemon < this.state.filterPokemon.length - 1) {
       
      this.setState((state) => ({
        proximoPokemon: state.proximoPokemon + 1,
      }));

    } else {
        this.setState(() => ({
            proximoPokemon: 0,
          }));
    }
  }
  render() {
   console.log('indice :', this.state.proximoPokemon)
    return (
      <>
        <Bnt
    
          functions={() => this.next()}
          text="Next"
        />
        <Bnt functions={ this.filterFire}  text="Fire" />
        <Bnt functions={this.filterPysychic} text="Pyschic" />
        <Pokemon dados={this.state.filterPokemon[this.state.proximoPokemon]}
         />
         
        {/* <ul> {<Pokemon dados={nextPokemon} />}</ul> */}
      </>
    );
  }
}
export default Pokedex;
