import React from 'react';
class Agris extends React.Component {
    render() {
        return(
        <div>
            <h2>{this.props.name}</h2>
            <p>일련번호: {this.props.id}</p>
            <img src={this.props.image}></img>
            <p>가격(판매가): {this.props.price}</p>
            <p>암/수 구별: {this.props.gender}</p>
            <p>원산지: {this.props.origin}</p>
            <p>친환경 인증사항: {this.props.certi}</p>
            <p>판매자 정보: </p>
            <p>판매자가 말한다: </p>
        </div>
        )
    }
}
class AgrisProfile extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt="농산물 이미지"/>
                <h2>{this.props.id}</h2>
            </div>
        )
    }
}


export default Agris;