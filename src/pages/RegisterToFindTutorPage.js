import React, { Component } from 'react';

class RegisterToFindTutorPage extends Component {
    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-9">
                <div className="row">
                    <div className="panel-heading">
                        <i className="fa fa-pencil-square" style={{ marginLeft: '5px' }} />Đăng ký tìm gia sư
                    </div>
                </div>
                <div className="row" id="row-form">
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Địa chỉ (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="diachi" placeholder="Nhập địa chỉ..." required/>
                            </div>
                            <div className="form-group">
                                <label>Lớp (<span className="obligate">*</span>)</label><br />
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop1" required />
                                    <label className="custom-control-label">Lớp 1</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop2" />
                                    <label className="custom-control-label">Lớp 2</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop3" />
                                    <label className="custom-control-label">Lớp 3</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop4" />
                                    <label className="custom-control-label">Lớp 4</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop5" />
                                    <label className="custom-control-label">Lớp 5</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop6" />
                                    <label className="custom-control-label">Lớp 6</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop7" />
                                    <label className="custom-control-label">Lớp 7</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop8" />
                                    <label className="custom-control-label">Lớp 8</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop9" />
                                    <label className="custom-control-label">Lớp 9</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop10" />
                                    <label className="custom-control-label">Lớp 10</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop11" />
                                    <label className="custom-control-label">Lớp 11</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop12" />
                                    <label className="custom-control-label">Lớp 12</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="monhoc">Môn học (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="monhoc" placeholder="Nhập môn học cần đăng ký VD: toán, lý,..." required />
                            </div>
                            <div className="form-group">
                                <label>Thời gian học (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="thoigianhoc" placeholder="VD: T2-T4-T6,  17h-19h" required/>
                            </div>
                            <div className="form-group">
                                <label>Yêu cầu (<span className="obligate">*</span>)</label>
                            </div>
                            <div className="form-group form-inline" id="yeucau">
                                <select className="form-control" id="yccapbac">
                                    <option value={0}>Hiện là</option>
                                    <option value={1}>Sinh viên</option>
                                    <option value={2}>Giáo viên</option>
                                    <option value={3}>Cử nhân</option>
                                    <option value={4}>Thạc sỹ</option>
                                    <option value={5}>Tiến sỹ</option>
                                </select> <span style={{ marginRight: '10px' }} />
                                <select className="form-control" id="ycgioitinh">
                                    <option value={0}>Giới tính</option>
                                    <option value={1}>Nam</option>
                                    <option value={2}>Nữ</option>
                                    <option value={3}>Không yêu cầu</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Lương (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="luong" placeholder="VD: 1,500,000 đồng/tháng" required/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterToFindTutorPage;