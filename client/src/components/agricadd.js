import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

class Agricadd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            name: '',
            price: '',
            gender: '',
            origin: '',
            certi: '',
            fileName: '',
            open: false
        }
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addagricf()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            name: '',
            price: '',
            gender: '',
            origin: '',
            certi: '',
            fileName: '',
            open: false
        })
        //window.location.reload();
        this.props.stateRefresh();
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value//하나의 파일만 업로드 가능
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    addagricf = () => {
        const url = 'http://localhost:5000/api/agris';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name',this.state.name);
        formData.append('price',this.state.price);
        formData.append('gender',this.state.gender);
        formData.append('origin',this.state.origin);
        formData.append('certi',this.state.certi);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState( {
            file: null,
            name: '',
            price: '',
            gender: '',
            origin: '',
            certi: '',
            fileName: '',
            open: false
        })
    }
    render() {
        const {classes}  = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    농산물 추가하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>농산물 추가</DialogTitle>
                    <DialogContent>
                    농산물 이미지: <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                <label htmlFor="raised-button-file">
                    <Button variant="contained" color="primary" component="span" name="file">
                        {this.state.fileName===""?"농산물 이미지 선택" : this.state.fileName}
                    </Button>
                </label>
                <br/>
                농산물 품명: <TextField type="text" name="name" value={this.state.name} onChange={this.handleValueChange}/><br/>
    
                가격: <TextField type="text" name="price" value={this.state.price} onChange={this.handleValueChange}/><br/>
        
                암수: <TextField type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                원산지: <TextField type="text" name="origin" value={this.state.origin} onChange={this.handleValueChange}/><br/>
                인증: <TextField type="text" name="certi" value={this.state.certi} onChange={this.handleValueChange}/><br/>
                

                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
            /*
            <form onSubmit={this.handleFormSubmit}>
                <h1>거래 농산물 추가</h1>
               <button type="submit">추가하기</button>
            </form>
            */
        )
    }

}

export default withStyles(styles)(Agricadd);