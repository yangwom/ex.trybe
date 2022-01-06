import React, { Component } from "react";

class Button extends Component {
    
    render() {
        const { text, functions} = this.props
        return ( <button    onClick={functions}  className="bnt">{text}</button> )
    }
}

export default Button