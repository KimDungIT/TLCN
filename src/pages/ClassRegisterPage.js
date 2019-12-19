import React, { Component } from 'react';

class ClassRegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            idClass: null,
            classTeach: '',
            subject: '',
            timeTeach: '',
            address: '',
            salary: null,
            serviceFee: 0.25,
            genderRequirement: 'Không yêu cầu',
            levelRequirement: 'Không yêu cầu',
            status: '',
            // parent
            name: '',
            phone: '',
            addressParent: '',
            email: ''
        }
    }
    render() {
        var { classTeach, subject, timeTeach, address, salary, serviceFee, genderRequirement, levelRequirement, status } = this.state;
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item ">Kiểm duyệt lớp</li>
                        <li className="breadcrumb-item">Lớp được đăng ký</li>
                        <li className="breadcrumb-item active">Xem chi tiết</li>
                    </ol>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-header">
                                        <i className="fas fa-table" />
                                        <span>THÔNG TIN LỚP</span>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label>Lớp dạy</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="classTeach"
                                                                value={classTeach}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label>Lương (VNĐ)</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="salary"
                                                                value={salary}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Môn dạy</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="subject"
                                                        value={subject}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Thời gian dạy</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="timeTeach"
                                                        value={timeTeach}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Địa chỉ dạy</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="address"
                                                        value={address}
                                                    />
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label>Yêu cầu trình độ</label>
                                                            <select
                                                                className="form-control"
                                                                name="levelRequirement"
                                                                value={levelRequirement}
                                                            >
                                                                <option>Không yêu cầu</option>
                                                                <option>Sinh viên</option>
                                                                <option>Giáo viên</option>
                                                                <option>Cử nhân sư phạm</option>
                                                                <option>Thạc sỹ/Tiến sỹ</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label>Yêu cầu giới tính</label>
                                                            <select
                                                                className="form-control"
                                                                name="genderRequirement"
                                                                value={genderRequirement}
                                                            >
                                                                <option>Không yêu cầu</option>
                                                                <option>Nam</option>
                                                                <option>Nữ</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label>Phí dịch vụ</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="serviceFee"
                                                                value={serviceFee}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label>Trạng thái</label>
                                                            <select
                                                                className="form-control"
                                                                name="status"
                                                                value={status}
                                                            >
                                                                <option>Lớp mới</option>
                                                                <option>Chờ duyệt</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="card">
                                    <div className="card-header">
                                        <i className="fas fa-user-circle fa-fw" />
                                        <span>THÔNG TIN GIA SƯ</span>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Mã gia sư</label>
                                                        <input type="text" className="form-control" id="name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label htmlFor="phonenumber">Họ tên</label>
                                                        <input type="text" className="form-control" id="phonenumber" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Số điện thoại</label>
                                                            <input type="text" className="form-control" id="name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="form-group">
                                                            <label htmlFor="phonenumber">Địa chỉ</label>
                                                            <input type="text" className="form-control" id="phonenumber" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="phonenumber">Giới tính</label>
                                                        <input type="number" className="form-control" id="phonenumber" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Năm sinh</label>
                                                        <input type="text" className="form-control" id="password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Hiện là</label>
                                                        <input type="password" className="form-control" id="password" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="address">Trường</label>
                                                <input type="email" className="form-control" id="address" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label htmlFor="phonenumber">Chuyên ngành</label>
                                                        <input type="number" className="form-control" id="phonenumber" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Năm tốt nghiệp</label>
                                                        <input type="text" className="form-control" id="password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="address">Lớp có thể dạy</label>
                                                        <input type="text" className="form-control" id="address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="address">Môn có thể dạy</label>
                                                        <input type="text" className="form-control" id="address" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="address">Quận có thể dạy</label>
                                                <input type="text" className="form-control" id="address" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Thông tin thêm</label>
                                                <textarea className="form-control" id="description" rows={5} defaultValue={""} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ClassRegisterPage;