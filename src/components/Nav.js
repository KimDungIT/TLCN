import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';
import * as Types from './../constants/ActionTypes';
import { connect } from 'react-redux';

class Nav extends Component {

    render() {
        var idUser = cookie.get('idUser');
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                    <a className="navbar-brand mr-1" href="index.html">Gia sư Ánh Dương</a>
                    <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                        <i className="fas fa-bars" />
                    </button>
                    <ul className="navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user-circle fa-fw"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <Link to={`/user-edit/${idUser}`} className="dropdown-item" >
                                    User profile
                                </Link>
                                
                                <div className="dropdown-divider" />
                                <Link to="/" className="dropdown-item" onClick={this.handleLogout} data-toggle="modal" data-target="#logoutModal">Logout</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

    handleLogout = (e) => {
        e.preventDefault()
        console.log("Logout");
        cookie.remove('token');
        cookie.remove('idUser');
        this.props.logout();
    }
    
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({type: Types.SET_LOGOUT})
    };
}

export default connect(null, mapDispatchToProps)(Nav);