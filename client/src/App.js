import React, { Component } from 'react';
import './App.css';
import Agricadd from './components/agricadd'
import Paper from '@material-ui/core/Paper'
import Agris from './components/agris'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles} from '@material-ui/core/styles'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white,0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white,0.25),

    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },

  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },

});



class App extends Component {

  //state = {
    //agric: '',
    //completed: 0
  //}
  constructor(props) {
    super(props);
    this.state = {
      agric: '',
      completed: 0
    }
  }

  stateRefresh = () => {
      this.setState({
        agric: '',
        completed: 0
      });
      this.callApi()
        .then(res=>this.setState({agric:res}))
        .catch(err =>console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
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

  progress = () => {
    const { completed } = this.state;
    this.setState({completed: completed>=100?0:completed+1});
  }
render() {
  const {classes} = this.props;

  return (
    <div  className={classes.root}>
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      프프 우리농산물 직거래 플랫폼
    </Typography>
    
  </Toolbar>
</AppBar>
    <Paper>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              
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
      

    }) :
    <TableRow>
      <TableCell colSpan="6" align="center">
        <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>

      </TableCell>
    </TableRow> 
    }
     
        </TableBody>
      </Table>
      
    </Paper>
    
    <Agricadd stateRefresh={this.stateRefresh}/>
    
    </div>
    
  );
  }
}
export default withStyles(styles)(App);
