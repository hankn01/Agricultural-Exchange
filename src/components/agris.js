import React from 'react';
class Agris extends React.Component {
    render() {
        return(
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.price}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.origin}</p>
            <p>{this.props.certi}</p>
        </div>
        )
    }
}

export default Agris;