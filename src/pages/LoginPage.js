import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-9">
                <div className="row">
                    <div className="panel-heading">
                        <i className="fa fa-fw fa-user" style={{ marginLeft: '5px' }} />Đăng nhập
                    </div>
                </div>
                <div className="row" id="row-form">
                    <div className="panel-body">
                        <form>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadioMale" name="customRadio" className="custom-control-input" required/>
                                <label className="custom-control-label">Gia sư</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadioFemale" name="customRadio" className="custom-control-input" />
                                <label className="custom-control-label">Phụ huynh</label>
                            </div>
                            <p>Bạn vui lòng đăng nhập bằng số điện thoại đã đăng ký với Trung Tâm Ánh Dương. Nếu bạn chưa có tài khoản vui lòng đăng ký <a href="#">Tại đây</a></p>
                            <div className="form-group">
                                <input className="form-control" type="text" id="sdt" placeholder="Nhập số điện thoại..." required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" id="matkhau" placeholder="Nhập mật khẩu..." required/>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                <label className="custom-control-label">Lưu mật khẩu</label>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;