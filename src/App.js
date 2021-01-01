import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Agris from './components/agris'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles} from '@material-ui/core/styles'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const agric = [{
  'id':1,
  'image': 'https://placeimg.com/480/360/1',
  'name': '양파',
  'price': '3000',
  'gender': '수',
  'origin': '대한민국',
  'certi': '해당 없음'
},
{
  'id':2,
  'image': 'https://placeimg.com/480/360/2',
  'name': '배추',
  'price': '1500',
  'gender': '해당 없음',
  'origin': '대한민국',
  'certi': '해당 없음'
},
{
  'id':3,
  'image': 'https://placeimg.com/480/360/3',
  'name': '무',
  'price': '1500',
  'gender': '해당 없음',
  'origin': '대한민국',
  'certi': '해당 없음'
}
]

class App extends Component {
render() {
  const {classes} = this.props;
  return (
    
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <h1>프프 우리농산물 직거래</h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agric.map(c => {
      return (
        <Agris
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        price={c.price}
        gender={c.gender}
        origin={c.origin}
        certi={c.certi}
        />
      );

    })}
        </TableBody>
      </Table>
      
    </Paper>
  );
  }
}
export default withStyles(styles)(App);
