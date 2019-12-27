import React, { Component } from 'react';
import { actGetClassRequest, actGetParentClassRequest, actUpdateClassRequest } from './../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ClassDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            idClass: null,
            classTeach: '',
            subject: '',
            timeTeach: '',
            address: '',
            district: '',
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
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.classEditing) {
            var { classEditing, parent } = nextProps;
            this.setState({
                idClass: classEditing.idClass,
                classTeach: classEditing.classTeach,
                subject: classEditing.subject,
                timeTeach: classEditing.timeTeach,
                address: classEditing.address,
                district: classEditing.district,
                salary: classEditing.salary,
                serviceFee: classEditing.serviceFee,
                genderRequirement: classEditing.genderRequirement,
                levelRequirement: classEditing.levelRequirement,
                status: classEditing.status,
                // parent
                name: parent.name,
                phone: parent.phone,
                addressParent: parent.address,
                email: parent.email
            });
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditClass(id);
            this.props.onGetParentClass(id);
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var dataClass = {
            idClass: this.state.idClass,
            classTeach: this.state.classTeach,
            subject: this.state.subject,
            timeTeach: this.state.timeTeach,
            address: this.state.address,
            district: this.state.district,
            salary: this.state.salary,
            serviceFee: this.state.serviceFee,
            genderRequirement: this.state.genderRequirement,
            levelRequirement: this.state.levelRequirement,
            status: this.state.status
        }
        if (dataClass.idClass) {
            this.props.onUpdateClass(dataClass, history);
            // history.goBack();
        }
    }
    render() {
        var { classTeach, subject, timeTeach, address, district, salary, serviceFee, genderRequirement, levelRequirement, status } = this.state;
        var { name, phone, addressParent, email } = this.state;
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Thông tin lớp chi tiết</li>
                    </ol>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="profile">
                                <h5><strong>Thông tin lớp</strong></h5>
                                <hr />
                                <form onSubmit={this.onSave}>
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
                                                        onChange={this.handleChange} />
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
                                                        onChange={this.handleChange} />
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
                                                onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Thời gian dạy</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="timeTeach"
                                                value={timeTeach}
                                                onChange={this.handleChange} />
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="form-group">
                                                    <label>Địa chỉ dạy</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="address"
                                                        value={address}
                                                        onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <label>Quận / Huyện</label>
                                                    <select
                                                        className="form-control"
                                                        name="district"
                                                        value={district}
                                                        onChange={this.handleChange}>
                                                        <option>Quận Thủ Đức</option>
                                                        <option>Quận Gò Vấp</option>
                                                        <option>Quận Tân Phú</option>
                                                        <option>Quận Bình Tân</option>
                                                        <option>Quận Phú Nhuận</option>
                                                        <option>Quận Bình Thạnh</option>
                                                        <option>Quận Tân Bình</option>
                                                        <option>Quận 1</option>
                                                        <option>Quận 2</option>
                                                        <option>Quận 3</option>
                                                        <option>Quận 4</option>
                                                        <option>Quận 5</option>
                                                        <option>Quận 6</option>
                                                        <option>Quận 7</option>
                                                        <option>Quận 8</option>
                                                        <option>Quận 9</option>
                                                        <option>Quận 10</option>
                                                        <option>Quận 11</option>
                                                        <option>Quận 12</option>
                                                        <option>Huyện Cần Giờ</option>
                                                        <option>Huyện Nhà Bè</option>
                                                        <option>Huyện Củ Chi</option>
                                                        <option>Huyện Bình Chánh</option>
                                                        <option>Huyện Hóc Môn</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Yêu cầu trình độ</label>
                                                    <select
                                                        className="form-control"
                                                        name="levelRequirement"
                                                        value={levelRequirement}
                                                        onChange={this.handleChange}>
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
                                                        onChange={this.handleChange}>
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
                                                        onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Trạng thái</label>
                                                    <select
                                                        className="form-control"
                                                        name="status"
                                                        value={status}
                                                        onChange={this.handleChange}>
                                                        <option>Lớp mới</option>
                                                        <option>Chờ duyệt</option>
                                                        <option>Không đạt</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/class-list" className="btn btn-secondary">
                                        HỦY
                                    </Link>
                                    <button type="submit" className="btn btn-primary" style={{ float: 'right' }}>LƯU</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="profile">
                                <h5><strong>Thông tin phụ huynh</strong></h5>
                                <div style={{ textAlign: 'left' }}>
                                    <hr />
                                    <form>
                                        <div className="form-group">
                                            <label>Họ tên</label>
                                            <input type="text" className="form-control" value={name} />
                                        </div>
                                        <div className="form-group">
                                            <label >Số điện thoại</label>
                                            <input type="number" className="form-control" value={phone} />
                                        </div>
                                        <div className="form-group">
                                            <label >Địa chỉ</label>
                                            <input type="text" className="form-control" value={addressParent} />
                                        </div>
                                        <div className="form-group">
                                            <label>Email (nếu có)</label>
                                            <input type="email" className="form-control" value={email} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditClass: (id) => {
            dispatch(actGetClassRequest(id));
        },
        onGetParentClass: (id) => {
            dispatch(actGetParentClassRequest(id));

        },
        onUpdateClass: (classs, history) => {
            dispatch(actUpdateClassRequest(classs, history));
        }
    }
}
const mapStateToProps = state => {
    return {
        classEditing: state.classEditing,
        parent: state.parent
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail);