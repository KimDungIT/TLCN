import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Dropdown, Icon, Avatar} from "antd";
import { actFetchClassesRequest } from "./../actions/index";
import { logout } from "./../actions/index";

const menuPH = (
  <Menu>
    <Menu.Item>
      <Link className="nav-link" to="/signup">
        Đăng ký tìm gia sư
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="nav-link" to="/tutor-fee">
        Học phí gia sư
      </Link>
    </Menu.Item>
  </Menu>
);


class MenuMain extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  handleOnClick = () => {
    this.props.fetchAllClasses(0);
}
  render() {
    const menuGS = (
      <Menu>
        <Menu.Item>
          <Link className="nav-link" to="/make-tutor">
            Đăng ký làm gia sư
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="nav-link" to="/class-list" onClick={this.handleOnClick}>
            Lớp mới chưa giao
          </Link>
        </Menu.Item>
      </Menu>
    );
    const menuTaiKhoanGS = (
      <Menu>
        <Menu.Item>
          <Link className="nav-link" to="/account-gs">
            Tài khoản của tôi
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="nav-link" to="/tutor-classes">
            Lớp đã đăng ký
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="nav-link" to="/change-password">
            Đổi mật khẩu
          </Link>
        </Menu.Item>
        <Menu.Item >
          <a
            href="/login"
            className="nav-link"
            onClick={this.logout.bind(this)}
          >
            Đăng xuất
          </a>
        </Menu.Item>

      </Menu>
    );
    const menuTaiKhoanPH = (
      <Menu>
        <Menu.Item>
          <Link className="nav-link" to="/account-ph">
            Tài khoản của tôi
          </Link>
        </Menu.Item>
        <Menu.Item >
          <a
            href="/login"
            className="nav-link"
            onClick={this.logout.bind(this)}
          >
            Đăng xuất
          </a>
        </Menu.Item>
      </Menu>
    );
    const menusGuest = (
      <ul className="navbar-nav mr-auto">
        <li>
          <Link className="nav-link" to="/">
            <i className="fa fa-fw fa-home"></i>Trang chủ
          </Link>
        </li>
        <li>
          <Dropdown overlay={menuPH}>
            <Link className="ant-dropdown-link nav-link" to="/find-tutor">
              <i className="fa fa-users"></i>Dành cho phụ huynh <Icon type="down" />
            </Link>
          </Dropdown>
        </li>
        <li>
          <Dropdown overlay={menuGS}>
            <Link className="ant-dropdown-link nav-link" to="/find-tutor">
              <i className="fa fa-graduation-cap"></i>Dành cho gia sư <Icon type="down" />
            </Link>
          </Dropdown>
        </li>
        <li>
          <Link className="nav-link" to="/register-process">
            Quy trình nhận lớp
          </Link>
        </li>
        {/* <li>
          <Link className="nav-link" to='/signup'>
            Đăng ký
          </Link>
        </li> */}
        <li>
          <Link className="nav-link" to="/login">
            <i className="fa fa-fw fa-user"></i>Đăng nhập
          </Link>
        </li>
        
      </ul>
    );
    const menusPH = (
      <ul className="navbar-nav mr-auto" key="mnPH">
        <li className="nav-item">
          <Link className="nav-link" to="/parent">
            <i className="fa fa-fw fa-home"></i>Trang chủ
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/find-tutor">
          <i className="fa fa-pencil-square-o"></i>Đăng ký tìm gia sư
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/parent-classes">
            Lớp đã đăng
          </Link>
        </li>
        
        {/* <li className="nav-item">
          <Link className="nav-link" to="/class-list">
            Phụ huynh lưu ý
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/tutor-fee">
            Học phí gia sư
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/change-password">
            Đổi mật khẩu
          </Link>
        </li>
        <Dropdown overlay={menuTaiKhoanPH}>
          <Avatar icon="user" />
        </Dropdown>
      </ul>
    );
    const menusGS = (
      <ul className="navbar-nav mr-auto" key="mnGS">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fa fa-fw fa-home"></i>Trang chủ
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/classes-suggest">
            Lớp gợi ý cho bạn
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/class-list" onClick={this.handleOnClick}>
            Lớp mới chưa giao
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tutor-fee">
            Học phí gia sư
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register-process">
            Quy trình nhận lớp
          </Link>
        </li>
        <Dropdown overlay={menuTaiKhoanGS}>
          <Avatar icon="user" />
        </Dropdown>
      </ul>
    );
    const { isAuthenticated } = this.props.auth;
    const { role } = this.props.auth.user;
    return (
      <div className="row">
        <nav className="navbar navbar-expand-lg navbarCustom ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCustom"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-fw 	fa fa-navicon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCustom">
            {isAuthenticated && role === "[GIASU]"
              ? menusGS
              : isAuthenticated && role === "[PHUHUYNH]"
              ? menusPH
              : menusGuest}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    classes: state.classes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllClasses: page => {
      dispatch(actFetchClassesRequest(page));
    },
    logout: () => {
      dispatch(logout());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MenuMain);
