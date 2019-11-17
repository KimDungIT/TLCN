import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../actions/index';
import { Menu, Dropdown, Icon, Avatar } from 'antd';

const menuPH = (
    <Menu>
      <Menu.Item>
        <Link className = "nav-link" to="/find-tutor" >Đăng ký tìm gia sư</Link>
      </Menu.Item>
      <Menu.Item>
        <Link className = "nav-link" to="/tutor-fee" >Học phí gia sư</Link>
      </Menu.Item>
    </Menu>
  );

const menuGS = (
    <Menu>
      <Menu.Item>
        <Link className = "nav-link" to="/make-tutor" >Đăng ký làm gia sư</Link>
      </Menu.Item>
      <Menu.Item>
        <Link className = "nav-link" to="/class-list" >Lớp mới chưa giao</Link>
      </Menu.Item>
    </Menu>
  );

const menuTaiKhoan = (
    <Menu>
        <Menu.Item>
            <Link className = "nav-link" to="/account" >Tài khoản của tôi</Link>
        </Menu.Item>
        <Menu.Item>
            <Link className = "nav-link" to="/change-password" >Đổi mật khẩu</Link>
        </Menu.Item>
    </Menu>
);

class MenuMain extends Component {
    logout(e){
        e.preventDefault();
        this.props.logout();
    };
    render() {
        const menusGuest = (
            <ul className="navbar-nav mr-auto">
                <li><Link className = "nav-link" to="/" ><i className="fa fa-fw fa-home"></i>Trang chủ</Link></li>
                <li>
                    <Dropdown overlay={menuPH}>
                        <Link className="ant-dropdown-link nav-link" to="/find-tutor">
                            Dành cho phụ huynh <Icon type="down" />
                        </Link>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown overlay={menuGS}>
                        <Link className="ant-dropdown-link nav-link" to="/find-tutor">
                            Dành cho gia sư <Icon type="down" />
                        </Link>
                    </Dropdown>
                </li>
                <li><Link className = "nav-link" to="/tutor-fee" >Quy trình nhận lớp</Link></li>
                <li><Link className = "nav-link" to="/signup" >Gia sư tiêu biểu</Link></li>
                <li><Link className = "nav-link" to="/login" ><i className="fa fa-fw fa-user"></i>Đăng nhập</Link></li>
            </ul>
        );
        const menusPH = (
            <ul className="navbar-nav mr-auto" key="mnPH">
                <li className='nav-item'><Link className = "nav-link" to="/" ><i className="fa fa-fw fa-home"></i>Trang chủ</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/find-tutor" >Đăng ký tìm gia sư</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/find-tutor" >Gia sư tiêu biểu</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/class-list" >Lớp mới chưa giao</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/tutor-fee" >Học phí gia sư</Link></li>
                <li className='nav-item'><a href="" className = "nav-link" onClick={this.logout.bind(this)}>Đăng xuất</a></li>
                <Dropdown overlay={menuTaiKhoan}>
                    <Avatar icon="user"/>
                </Dropdown>
            </ul>
        );
        const menusGS = (
            <ul className="navbar-nav mr-auto" key="mnGS">
                <li className='nav-item'><Link className = "nav-link" to="/" ><i className="fa fa-fw fa-home"></i>Trang chủ</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/make-tutor" >Lớp gợi ý cho bạn</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/class-list" >Lớp mới chưa giao</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/tutor-fee" >Học phí gia sư</Link></li>
                <li className='nav-item'><Link className = "nav-link" to="/class-list" >Quy trình nhận lớp</Link></li>
                <li className='nav-item'><a href="" className = "nav-link" onClick={this.logout.bind(this)}>Đăng xuất</a></li>
                <Dropdown overlay={menuTaiKhoan}>
                    <Avatar icon="user"/>
                </Dropdown>
            </ul>
        );
        const { isAuthenticated } = this.props.auth;
        const { role } = this.props.auth.user;
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
                        {isAuthenticated && role === '[GIASU]' ? menusGS : isAuthenticated && role === '[PHUHUYNH]' ? menusPH : menusGuest}
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