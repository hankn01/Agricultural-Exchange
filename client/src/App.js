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
import axios from 'axios'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});



class App extends Component {

  state = {
    agric: ''
  }

  componentDidMount() {
    
    this.callApi()
      .then(res=>this.setState({agric: res}))
      .catch(err=>console.log(err))
  }

  callApi = async () => {
    console.log('called API');
    const response = await axios.get('http://localhost:5000/api/agris');
    console.log('response: ')
    console.log(response)
    return response.data
    //return fetch('/api/agirs')
  }
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
          
          {this.state.agric?this.state.agric.map(c => {
      return <Agris
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        price={c.price}
        gender={c.gender}
        origin={c.origin}
        certi={c.certi}
        />
      

    }) : "정보를 불러올 수 없습니다. 관리자에게 문의 바랍니다."}
        </TableBody>
      </Table>
      
    </Paper>
  );
  }
}
export default withStyles(styles)(App);
