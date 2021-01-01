import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Agris extends React.Component {
    render() {
        return(
        <div>
            <TableRow>
                <TableCell>{this.props.name}</TableCell>
                <TableCell><img src={this.props.image} alt="농산물 이미지"></img></TableCell>
            </TableRow>
            <TableRow>
                <TableCell>일련번호: {this.props.id}</TableCell>
                <TableCell>가격(판매가): {this.props.price}</TableCell>
           
            </TableRow>
           
               
            <TableRow>
                <TableCell>
                암/수 구별: {this.props.gender}
                </TableCell>
                <TableCell>
                원산지: {this.props.origin}
                </TableCell>
            </TableRow>
            
            <TableRow>
                <TableCell>
                친환경 인증사항: {this.props.certi}
                </TableCell>
                <TableCell>
                판매자 정보: 
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                판매자가 말한다:
                </TableCell>
            </TableRow>
            
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