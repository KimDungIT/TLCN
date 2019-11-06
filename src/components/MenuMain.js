import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../actions/index';

// const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
//     return <Route
//                 path = {to}
//                 exact = {activeOnlyWhenExact}
//                 children = {({match}) => {
//                     var active = match ? 'active' : '';
//                     return (
//                         <li className = {`nav-item ${active}`}>
//                             <Link
//                                 className = "nav-link"
//                                 to = {to}>
//                                 {label} 
//                             </Link>
//                         </li>
//                         );
//                     }
//                 } />
// }

class MenuMain extends Component {
    logout(e){
        e.preventDefault();
        this.props.logout();
    };
    render() {
        const menusGuest = (
            <ul className="navbar-nav mr-auto">
                <li><Link className = "nav-link" to="/" ><i className="fa fa-fw fa-home"></i>Trang chủ</Link></li>
                <li><Link className = "nav-link" to="/find-tutor" >Đăng ký tìm gia sư</Link></li>
                <li><Link className = "nav-link" to="/make-tutor" >Đăng ký làm gia sư</Link></li>
                <li><Link className = "nav-link" to="/class-list" >Lớp dạy mới</Link></li>
                <li><Link className = "nav-link" to="/tutor-fee" >Học phí gia sư</Link></li>
                <li><Link className = "nav-link" to="/signup" ><i className="fa fa-fw fa fa-user-plus"></i>Đăng ký</Link></li>
                <li><Link className = "nav-link" to="/login" ><i className="fa fa-fw fa-user"></i>Đăng nhập</Link></li>
            </ul>
        );
        const menusUser = (
            <ul className="navbar-nav mr-auto" key="munu">
                <li className='nav-item'><Link className = "nav-link" to="/" ><i className="fa fa-fw fa-home"></i>Trang chủ</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/find-tutor" >Đăng ký tìm gia sư</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/make-tutor" >Đăng ký làm gia sư</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/class-list" >Lớp dạy mới</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/tutor-fee" >Học phí gia sư</Link></li>
                <li className='nav-item'><a href="#" className = "nav-link" onClick={this.logout.bind(this)}>Đăng xuất</a></li>
                
            </ul>
        );
        const { isAuthenticated } = this.props.auth;
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
                        {isAuthenticated ? menusUser : menusGuest}
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
   return {
    auth: state.auth
   } 
}

export default connect(mapStateToProps, {logout})(MenuMain);