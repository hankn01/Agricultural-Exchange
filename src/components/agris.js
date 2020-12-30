import React from 'react';
class Agris extends React.Component {
    render() {
        return(
        <div>
            <h2>{this.props.name}</h2>
            <p>가격(판매가): {this.props.price}</p>
            <p>암/수 구별: {this.props.gender}</p>
            <p>원산지: {this.props.origin}</p>
            <p>친환경 인증사항: {this.props.certi}</p>
        </div>
        )
    }
}

export default Agris;