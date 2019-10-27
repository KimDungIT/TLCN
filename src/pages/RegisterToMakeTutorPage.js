import React, { Component } from 'react';

class RegisterToMakeTutorPage extends Component {
    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-9">
                <div className="row">
                    <div className="panel-heading">
                        <i className="fa fa-address-book" style={{ marginLeft: '5px' }} />Cập nhật hồ sơ
                    </div>
                </div>
                <div className="row" id="row-form">
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Giới tính (<span className="obligate">*</span>)</label>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadioMale" name="customRadio" className="custom-control-input" required/>
                                    <label className="custom-control-label">Nam</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadioFemale" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label">Nữ</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Ngày sinh (<span className="obligate">*</span>)</label>
                            </div>
                            <div className="form-group form-inline" id="ngaysinh">
                                <select className="form-control" id="date">
                                    <option value={0}>Ngày</option>
                                    <option value={1}>1</option>
                                </select> <span style={{ margin: '10px' }}>/</span>
                                <select className="form-control" id="month">
                                    <option value={0}>Tháng</option>
                                    <option value={1}>1</option>
                                </select><span style={{ margin: '10px' }}>/</span>
                                <select className="form-control" id="year">
                                    <option value={0}>Năm</option>
                                    <option value={1}>1970</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Ảnh thẻ (<span className="obligate">*</span>)</label>
                                <input type="file" name="anhthe" className="form-control" id="anhthe" required />
                            </div>
                            <div className="form-group">
                                <label>Trường (<span className="obligate">*</span>)</label>
                                <input type="text" className="form-control" id="truong" placeholder="ĐH sư phạm TPHCM" required />
                            </div>
                            <div className="form-group">
                                <label>Ngành học (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="nganhhoc" placeholder="Sư phạm toán" required />
                            </div>
                            <div className="form-group">
                                <label>Năm tốt nghiệp (<span className="obligate">*</span>)</label>
                                <input className="form-control" type="text" id="namtotnghiep" placeholder={2017} required/>
                            </div>
                            <div className="form-group">
                                <label>Môn dạy (<span className="obligate">*</span>)</label><br />
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="toan" required />
                                    <label className="custom-control-label">Toán</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="ly" />
                                    <label className="custom-control-label">Lý</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="hoa" />
                                    <label className="custom-control-label">Hóa</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="van" />
                                    <label className="custom-control-label">Văn</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="tienganh" />
                                    <label className="custom-control-label">Tiếng Anh</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="sinh" />
                                    <label className="custom-control-label">Sinh</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="su" />
                                    <label className="custom-control-label">Sử</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="dia" />
                                    <label className="custom-control-label">Địa</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="baobai" />
                                    <label className="custom-control-label">Báo bài</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="tiengviet" />
                                    <label className="custom-control-label">Tiếng Việt</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="tinhoc" />
                                    <label className="custom-control-label">Tin học</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="ve" />
                                    <label className="custom-control-label">Vẽ</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Lớp dạy (<span className="obligate">*</span>)</label><br />
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop1" required/>
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
                                <label htmlFor="exampleFormControlSelect1">Khu vực dạy (<span className="obligate">*</span>)</label><br />
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan1" required />
                                    <label className="custom-control-label">Quận 1</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="lop2" />
                                    <label className="custom-control-label">Quận 2</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan3" />
                                    <label className="custom-control-label">Quận 3</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan4" />
                                    <label className="custom-control-label">Quận 4</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan5" />
                                    <label className="custom-control-label">Quận 5</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan6" />
                                    <label className="custom-control-label">Quận 6</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan7" />
                                    <label className="custom-control-label">Quận 7</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan8" />
                                    <label className="custom-control-label">Quận 8</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan9" />
                                    <label className="custom-control-label">Quận 9</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan10" />
                                    <label className="custom-control-label">Quận 10</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan11" />
                                    <label className="custom-control-label">Quận 11</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quan12" />
                                    <label className="custom-control-label">Quận 12</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quanthuduc" />
                                    <label className="custom-control-label">Quận Thủ Đức</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quanbinhthanh" />
                                    <label className="custom-control-label">Quận Bình Thạnh</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quantanbinh" />
                                    <label className="custom-control-label">Quận Tân Bình</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="quangovap" />
                                    <label className="custom-control-label">Quận Gò Vấp</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Thông tin thêm </label>
                                <textarea className="form-control" id="thongtinthem" rows = {3} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Cập nhật hồ sơ</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default RegisterToMakeTutorPage;