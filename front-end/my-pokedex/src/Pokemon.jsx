import React, { Component } from "react";
import TagH5 from './H5'
class Pokemon extends Component {
    render() {
     const { dados } = this.props;
     const { averageWeight: {value, measurementUnit}} = dados
     const arry = [dados.name, dados.type, value, measurementUnit]
        return (
            <li key={dados.id} className="card">
                <img src={dados.image} alt="" />
                 <TagH5  descricao={arry} />
             </li>
        )
    }
}

export default Pokemon