import React, { Component } from 'react';
import { actGetClassRegisterRequest, actUpdateClassRegisterRequest } from './../actions/index';
import { connect } from 'react-redux';
import callApi from './../utils/apiCaller';
import { Link } from 'react-router-dom';

class ClassRegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            idClassRegister: null,
            // class
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

            // tutor
            idTutor: null,
            gender: '',
            yearOfBirth: '',
            major: '',
            college: '',
            graduationYear: '',
            level: '',
            subjectsCanTeach: '',
            classesCanTeach: '',
            districtCanTeach: '',
            moreInfo: '',

            name: '',
            phone: '',
            addressTutor: ''
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onClassRegisterDetail(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.classRegisterItem) {
            var { classRegisterItem } = nextProps;

            callApi(`tutors/getTutor/getUser?idTutor=${classRegisterItem.tutors.idTutor}`,
                'GET', null
            ).then(res => {
                this.setState({
                    name: res.data.result.name,
                    phone: res.data.result.phone,
                    addressTutor: res.data.result.address
                });
            });

            this.setState({
                idClassRegister: classRegisterItem.idClassRegister,
                idClass: classRegisterItem.classes.idClass,
                classTeach: classRegisterItem.classes.classTeach,
                subject: classRegisterItem.classes.subject,
                timeTeach: classRegisterItem.classes.timeTeach,
                address: classRegisterItem.classes.address,
                district: classRegisterItem.classes.district,
                salary: classRegisterItem.classes.salary,
                serviceFee: classRegisterItem.classes.serviceFee,
                genderRequirement: classRegisterItem.classes.genderRequirement,
                levelRequirement: classRegisterItem.classes.levelRequirement,
                status: classRegisterItem.classes.status,

                // tutor
                idTutor: classRegisterItem.tutors.idTutor,
                gender: classRegisterItem.tutors.gender,
                yearOfBirth: classRegisterItem.tutors.yearOfBirth,
                major: classRegisterItem.tutors.major,
                college: classRegisterItem.tutors.college,
                graduationYear: classRegisterItem.tutors.graduationYear,
                level: classRegisterItem.tutors.level,
                subjectsCanTeach: classRegisterItem.tutors.subjects,
                classesCanTeach: classRegisterItem.tutors.classes,
                districtCanTeach: classRegisterItem.tutors.districtCanTeach,
                moreInfo: classRegisterItem.tutors.moreInfo
            });
        }
    }

    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        //console.log("props: "+ this.props.classRegisterItem);
        
        var idClassRegister = this.props.classRegisterItem.idClassRegister;
        console.log("idClassRegister:" + idClassRegister);
        
        this.props.onUpdateClassRegister(idClassRegister);
        history.goBack();
    }
    render() {
        let { classTeach, subject, timeTeach, address, salary, serviceFee, genderRequirement, levelRequirement, status } = this.state;
        let { idTutor, gender, yearOfBirth, major, college, graduationYear,
            level, subjectsCanTeach, classesCanTeach, districtCanTeach, moreInfo } = this.state;
        let { name, phone, addressTutor } = this.state;
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
                            {/* CLASS */}
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
                                <button type="button" onClick={this.onSave}  className="btn btn-primary btn-block" >DUYỆT</button>
                                <Link to="/class-register-list" className="btn btn-secondary btn-block">
                                    HỦY
                                </Link>
                            </div>
                            {/* TUTOR */}
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
                                                        <input type="text" className="form-control" value={idTutor} />
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label htmlFor="phonenumber">Họ tên</label>
                                                        <input type="text" className="form-control" value={name} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Số điện thoại</label>
                                                            <input type="text" className="form-control" value={phone} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="form-group">
                                                            <label htmlFor="phonenumber">Địa chỉ</label>
                                                            <input type="text" className="form-control" value={addressTutor} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="phonenumber">Giới tính</label>
                                                        <input type="text" className="form-control" value={gender} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Năm sinh</label>
                                                        <input type="text" className="form-control" value={yearOfBirth} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Hiện là</label>
                                                        <input type="text" className="form-control" value={level} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="address">Trường</label>
                                                <input type="text" className="form-control" value={college} />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label htmlFor="phonenumber">Chuyên ngành</label>
                                                        <input type="text" className="form-control" value={major} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Năm tốt nghiệp</label>
                                                        <input type="text" className="form-control" value={graduationYear} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="address">Lớp có thể dạy</label>
                                                        <input type="text" className="form-control" value={classesCanTeach} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="address">Môn có thể dạy</label>
                                                        <input type="text" className="form-control" value={subjectsCanTeach} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="address">Quận có thể dạy</label>
                                                <input type="text" className="form-control" value={districtCanTeach} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Thông tin thêm</label>
                                                <textarea className="form-control" id="description" rows={3} value={moreInfo} />
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClassRegisterDetail: (id) => {
            dispatch(actGetClassRegisterRequest(id));
        },
        onUpdateClassRegister: (id) => {
            dispatch(actUpdateClassRegisterRequest(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        classRegisterItem: state.classRegisterItem
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClassRegisterPage);