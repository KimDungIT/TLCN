import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {actGetClassRequest, actUpdateClassRequest} from './../actions/index';
import {connect} from 'react-redux';

class ClassActionPageEdit extends Component {
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
            status: 'Lớp mới',
            statusParent: 'old'
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.classEditing){
            var {classEditing} = nextProps;
            this.setState({
                idClass: classEditing.idClass,
                classTeach: classEditing.classTeach,
                subject: classEditing.subject,
                timeTeach: classEditing.timeTeach,
                address: classEditing.address,
                salary: classEditing.salary,
                serviceFee: classEditing.serviceFee,
                genderRequirement: classEditing.genderRequirement,
                levelRequirement: classEditing.levelRequirement,
                status: classEditing.status
            });
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditClass(id);
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
            salary: this.state.salary,
            serviceFee: this.state.serviceFee,
            genderRequirement: this.state.genderRequirement,
            levelRequirement: this.state.levelRequirement,
            status: this.state.status
        }
        if (dataClass.idClass) {
            this.props.onUpdateClass(dataClass);
            history.goBack();
        }
    }

    render() {
        var { classTeach, subject, timeTeach, address, salary, serviceFee, genderRequirement, levelRequirement, status } = this.state;
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Sửa thông tin lớp</li>
                    </ol>
                    <div className="card mb-3">
                        <div className="card-body">
                            <form onSubmit={this.onSave}>
                                <div className="form-group">
                                    <h3>Sửa thông tin lớp</h3>
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
                                    <div className="form-group">
                                        <label>Địa chỉ dạy</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={address}
                                            onChange={this.handleChange} />
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
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Link to="/class-list" className="btn btn-secondary btn-block">
                                            HỦY
                                        </Link>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-success btn-block">LƯU LẠI</button>
                                    </div>
                                </div>
                            </form>
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
        onUpdateClass: (classs) => {
            dispatch(actUpdateClassRequest(classs));
        }
    }
}

const mapStateToProps = state => {
    return {
        classEditing: state.classEditing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassActionPageEdit);