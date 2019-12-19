import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        icon: 'fas fa-fw fa-tachometer-alt',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý lớp',
        icon: 'fas fa-fw fa-table',
        to: '/class-list',
        exact: false
    },
    {
        name: 'Quản lý user',
        icon: 'fas fa-user-circle fa-fw',
        to: '/user-list',
        exact: false
    },
    {
        name: 'Thống kê nhận lớp',
        icon: 'fas fa-fw fa-chart-area',
        to: '/user-list',
        exact: false
    }
];

const MenuLink = ({ lable, icon, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className="nav-item">
                        <Link className={"nav-link " + active} to={to}>
                            <i className={icon} />
                            <span>{lable}</span>
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <ul className="sidebar navbar-nav">
                {this.showMenus(menus)}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="classes" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-fw fa-folder" />
                        <span>Kiểm duyệt lớp</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                        <h6 className="dropdown-header">Duyệt lớp:</h6>
                        <a className="dropdown-item" href="/class-list-pending">Lớp mới chờ duyệt</a>
                        <a className="dropdown-item" href="/class-register-list">Lớp được đăng ký</a>
                    </div>
                </li>
                
            </ul>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        lable={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        icon={menu.icon}
                    />
                )
            })
        }
        return result;
    }
}

export default Menu;