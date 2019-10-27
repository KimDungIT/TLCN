import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Đăng ký tìm gia sư',
        to: '/find-tutor',
        exact: false
    },
    {
        name: 'Đăng ký làm gia sư',
        to: '/make-tutor',
        exact: false
    },
    {
        name: 'Lớp dạy mới',
        to: '/class-list',
        exact: false
    },
    {
        name: 'Học phí gia sư',
        to: '/tutor-fee',
        exact: false
    },
    {
        name: 'Đăng ký',
        to: '/signup',
        exact: false
    },
    {
        name: 'Đăng nhập',
        to: '/login',
        exact: false
    }

];

const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
    return <Route
                path = {to}
                exact = {activeOnlyWhenExact}
                children = {({match}) => {
                    var active = match ? 'active' : '';
                    return (
                        <li className = {`nav-item ${active}`}>
                            <Link
                                className = "nav-link"
                                to = {to}>
                                {label} 
                            </Link>
                        </li>
                        );
                    }
                } />
}

class MenuMain extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar navbar-expand-lg navbarCustom ">
                    <button className="navbar-toggler" type="button" 
                        data-toggle="collapse" data-target="#navbarCustom" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-fw 	fa fa-navicon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCustom">
                        <ul className="navbar-nav mr-auto">
                            {this.showMenus(menus)}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key = {index}
                        label = {menu.name}
                        to = {menu.to}
                        activeOnlyWhenExact = {menu.exact}/>
                )
            })
        }

        return result;
    }
}

export default MenuMain;