import React, { Component } from "react";

class H5 extends Component {
    render() {
        const {descricao} = this.props
        const [ nome, tipo, peso, unidade ] = descricao
        return ( 
            <>
            <h5>{nome}</h5>
            <h5>{tipo}</h5>
            <h5>{peso} {unidade}</h5>
            </>

        )
    }
    
}
export default H5