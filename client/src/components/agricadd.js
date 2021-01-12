import React from 'react';
import { post } from 'axios';

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
            fileName: ''
        }
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addagricf()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            file: null,
            name: '',
            price: '',
            gender: '',
            origin: '',
            certi: '',
            fileName: ''
        })
        window.location.reload();
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
        formData.append('certi',formData.certi);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>거래 농산물 추가</h1>
                농산물 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                농산물 품명: <input type="text" name="name" value={this.state.name} onChange={this.handleValueChange}/><br/>
    
                가격: <input type="text" name="price" value={this.state.price} onChange={this.handleValueChange}/><br/>
        
                암수: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                원산지: <input type="text" name="origin" value={this.state.origin} onChange={this.handleValueChange}/><br/>
                인증: <input type="text" name="certi" value={this.state.certi} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }

}

export default Agricadd;