import React, { Component } from 'react';
class Button extends Component {
    render() {
    return(
        <button type="button" className="Button" onClick={this.props.onfetchHits} >
            Load more
        </button>
    )}
};
export default Button;