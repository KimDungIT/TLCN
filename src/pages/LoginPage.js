import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import {connect} from 'react-redux';
import * as Types from './../constants/ActionTypes';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
    }
    
    render() {
        let error = this.state.errors;
        
        return (
            <div className="container-fluid bg-dark">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            { error.message ? (<p className="err-message">{error.message}</p>) : ""}
                            { error.error_description ? (<p className="err-message">{error.error_description}</p>) : ""}
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input 
                                        type="number" 
                                        id="inputPhone" 
                                        className="form-control" 
                                        placeholder="Số điện thoại"
                                        name="username"
                                        value={this.username}
                                        onChange={this.onChange} />
                                    <label htmlFor="inputPhone">Phone address</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input 
                                        type="password" 
                                        id="inputPassword" 
                                        className="form-control" 
                                        placeholder="Mật khẩu"
                                        name="password"
                                        value={this.password}
                                        onChange={this.onChange} />
                                    <label htmlFor="inputPassword">Mật khẩu</label>
                                </div>
                            </div>

                            <button className="btn btn-primary btn-block">Login</button>
                        </form>
                        <div className="text-center">
                            <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            username : this.state.username,
            password : this.state.password
        }

        axios.post(`http://localhost:8081/oauth/token?username=${data.username}&password=${data.password}&grant_type=password&client_id=client&client_secret=ttgs123`, data)
        .then(res => {
            cookie.set('token', res.data.access_token);
            cookie.set('idUser', res.data.idUser);
            this.props.setLogIn(res.data.idUser);
            this.props.history.push('/');
        }).catch(e => this.setState({
            errors: e.response.data
        }));

        
    }
    onChange = (e) => {
        e.preventDefault();
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLogIn: (idUser) => dispatch ({type:Types.SET_LOGIN, payload: idUser})
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);