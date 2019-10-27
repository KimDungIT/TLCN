import React, { Component } from 'react';

class SigupPage extends Component {
    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-9">
                <div className="row">
                    <div className="panel-heading">
                        <i className="fa fa-user-plus" style={{ marginLeft: '5px' }} />Đăng ký tài khoản
                    </div>
                </div>
                <div className="row" id="row-form">
                    <div className="panel-body">
                        <form>
                            <label htmlFor="gender">Chọn loại tài khoản đăng ký</label>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadioMale" name="customRadio" className="custom-control-input" required/>
                                <label className="custom-control-label">Gia sư</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadioFemale" name="customRadio" className="custom-control-input" />
                                <label className="custom-control-label">Phụ huynh</label>
                            </div>
                            <div className="form-group">
                                <label>Họ tên (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="ten" placeholder="Nhập họ tên..." required/>
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="sdt" placeholder="Nhập số điện thoại..." required/>
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="password" id="matkhau" placeholder="Nhập mật khẩu..." required/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" id="email" placeholder="VD: abc@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="diachi" placeholder="Nhập địa chỉ..." required/>
                            </div>

                            <button type="submit" className="btn btn-primary mb-2">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SigupPage;
