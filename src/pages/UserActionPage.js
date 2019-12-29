import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddUserRequest, actAddTutorRequest } from '../actions/index';
import CheckBox from '../components/Checkbox';
import callApi from '../utils/apiCaller';

class UserActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idUser: null,
            name: '',
            phone: '',
            address: '',
            email: '',
            password: '',
            role: 'ADMIN',
            errPhone: '',
            errAddress: '',
            errEmail: '',
            errPassword: '',

            // tutor
            gender: 'Nam',
            yearOfBirth: '1998',
            major: '',
            college: '',
            graduationYear: '',
            level: 'Sinh viên',
            subjects: [],
            classes: '',
            districtCanTeach: '',

            // subjects
            subjectCanTeach: [
                { value: "Toán", isChecked: false },
                { value: "Văn", isChecked: false },
                { value: "Anh văn", isChecked: false },
                { value: "Hóa", isChecked: false },
                { value: "Lý", isChecked: false },
                { value: "Tiếng Việt", isChecked: false },
                { value: "Địa lý", isChecked: false },
                { value: "Lịch sử", isChecked: false },
                { value: "Sinh", isChecked: false },
                { value: "Báo bài", isChecked: false },
                { value: "Vẽ", isChecked: false },
                { value: "Âm nhạc", isChecked: false }
            ],
            classCanTeach: [
                { value: "Lớp 1", isChecked: false },
                { value: "Lớp 2", isChecked: false },
                { value: "Lớp 3", isChecked: false },
                { value: "Lớp 4", isChecked: false },
                { value: "Lớp 5", isChecked: false },
                { value: "Lớp 6", isChecked: false },
                { value: "Lớp 7", isChecked: false },
                { value: "Lớp 8", isChecked: false },
                { value: "Lớp 9", isChecked: false },
                { value: "Lớp 10", isChecked: false },
                { value: "Lớp 11", isChecked: false },
                { value: "Lớp 12", isChecked: false }
            ],
            districts: [
                { value: "Quận 1", isChecked: false },
                { value: "Quận 2", isChecked: false },
                { value: "Quận 3", isChecked: false },
                { value: "Quận 4", isChecked: false },
                { value: "Quận 5", isChecked: false },
                { value: "Quận 6", isChecked: false },
                { value: "Quận 7", isChecked: false },
                { value: "Quận 8", isChecked: false },
                { value: "Quận 9", isChecked: false },
                { value: "Quận 10", isChecked: false },
                { value: "Quận 11", isChecked: false },
                { value: "Quận 12", isChecked: false },
                { value: "Quận Thủ Đức", isChecked: false },
                { value: "Quận Bình Thạnh", isChecked: false },
                { value: "Quận Gò Vấp", isChecked: false },
                { value: "Quận Tân Bình", isChecked: false }
            ]

        }
    }

    validatePassword = () =>{
        let isErr = false;
        let errors = {};
        // password
        const regexPass = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()]{6,}$/;
        if (regexPass.exec(this.state.password) !== null) {
            isErr = false;
            errors.errPassword = ''
        }
        else {
            isErr = false;
            errors.errPassword = 'Mật khẩu phải bao gồm chữ hoa, chữ thường, số và có ít nhất 6 ký tự'
        }

        this.setState({
            ...this.state,
            ...errors
        })
        return isErr;
    }
    validatePhone = () =>{
        let isErr = false;
        let errors = {};
        const regexPhone = /^\d{10,11}$/;
        if (regexPhone.exec(this.state.phone) !== null) {
            isErr = false;
            errors.errPhone = ''
        }
        else {
            isErr = false;
            errors.errPhone = 'Số điện thoại phải 10 - 11 ký tự'
        }
        this.setState({
            ...this.state,
            ...errors
        })
        return isErr;

    }
    validateEmail = () => {
        let isErr = false;
        let errors = {};
        const regexpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (regexpEmail.exec(this.state.email) !== null) {
            isErr = false;
            errors.errEmail = ''
        }
        else {
            isErr = false;
            errors.errEmail = 'Email không hợp lệ'
        }
        this.setState({
            ...this.state,
            ...errors
        })
        return isErr;
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
        var role = this.state.role;

        var dataUser = {
            idUser: this.state.idUser,
            name: this.state.name,
            phone: this.state.phone,
            address: this.state.address,
            email: this.state.email,
            password: this.state.password
        }

        if (role !== 'GIASU') {
            this.props.onAddUser(dataUser, role, history);
        } else if (role === 'GIASU') {
            var dataTutor = {
                gender: this.state.gender,
                yearOfBirth: this.state.yearOfBirth,
                major: this.state.major,
                college: this.state.college,
                graduationYear: this.state.graduationYear,
                level: this.state.level,
                subjects: this.state.subjects.join(','),
                classes: this.state.classes.join(','),
                districtCanTeach: this.state.districtCanTeach.join(',')
            }
            // create tutor
            callApi(`users/signUp?type=${role}`, "POST", dataUser).then(res => {
                console.log(res.data);
                if (res.data.status === 200) {
                    let idUser = res.data.result.idUser;
                    this.props.onAddTutor(idUser, dataTutor, history);
                }
            })
        }

    }
    render() {
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Thêm user</li>
                    </ol>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3>Thêm thông tin user</h3>
                            <form onSubmit={this.onSave}>
                                <div className="form-group">
                                    <label>Họ và tên</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                                                      
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        onBlur={this.validatePhone}
                                    />
                                    {(this.state.errPhone.length > 0) ? <p className="form-warning">{this.state.errPhone}</p> : ''}
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <input
                                        className="form-control"
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onBlur={this.validateEmail}
                                        onChange={this.handleChange}
                                    />
                                    {(this.state.errEmail.length > 0) ? <p className="form-warning">{this.state.errEmail}</p> : ''}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        onBlur={this.validatePassword}
                                    />
                                    {/* {(this.state.errPassword.length > 0) ? <p className="form-warning">{this.state.errPassword}</p> : ''} */}
                                </div>

                                {/* phân quyền */}
                                <p className="form-check-inline">Phân quyền: </p>
                                <div className="form-check-inline">
                                    <label className="form-check-label" htmlFor="radio1">
                                        <input type="radio"
                                            className="form-check-input"
                                            id="radio1" name="role"
                                            value="ADMIN" defaultChecked
                                            onChange={this.handleChange}
                                        />ADMIN
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label" htmlFor="radio2">
                                        <input type="radio"
                                            className="form-check-input"
                                            id="radio2" name="role"
                                            value="PHUHUYNH"
                                            onChange={this.handleChange}
                                        />PHỤ HUYNH
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label" htmlFor="radio3">
                                        <input type="radio"
                                            className="form-check-input"
                                            id="radio3" name="role"
                                            value="GIASU"
                                            onChange={this.handleChange}
                                        />GIA SƯ
                                    </label>
                                </div>
                                {this.displayFormTutor()}
                                {/* form gia sư */}
                                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                <div className="row">
                                    <div className="col-6">
                                        <Link to="/user-list" className="btn btn-secondary btn-block">
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
    displayFormTutor() {
        if (this.state.role === 'GIASU') {
            return this.renderTutor();
        }
        return null;
    }
    renderTutor() {
        return (
            <div>
                <hr />
                <h3>Tạo hồ sơ gia sư</h3>
                <div className="row">
                    <div className="col-4">
                        <p >Giới tính: </p>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio"
                                    className="form-check-input"
                                    name="gender" defaultChecked
                                    onChange={this.handleChange}
                                    value="Nam"
                                />Nam
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    onChange={this.handleChange}
                                    value="Nữ"
                                />Nữ
                            </label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group-inline">
                            <label>Năm sinh</label>
                            <select className="form-control" onChange={this.handleChange} value={this.state.yearOfBirth} required>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Hiện là</label>
                            <select class="form-control" onChange={this.handleChange} value={this.state.level} required>
                                <option value="Sinh viên">Sinh viên</option>
                                <option value="Giáo viên">Giáo viên</option>
                                <option value="Cử nhân">Cử nhân</option>
                                <option value="Thạc sĩ">Thạc sĩ</option>
                                <option value="Tiến sĩ">Tiến sĩ</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Trường</label>
                    <input type="text"
                        className="form-control"
                        onChange={this.handleChange}
                        name="college"
                        value={this.state.college}
                        required
                    />

                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label htmlFor="phonenumber">Chuyên ngành</label>
                            <input type="text"
                                className="form-control"
                                name="major"
                                onChange={this.handleChange}
                                value={this.state.major}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="password">Năm tốt nghiệp</label>
                            <input type="text"
                                className="form-control"
                                name="graduationYear"
                                onChange={this.handleChange}
                                value={this.state.graduationYear}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Môn có thể dạy</label>
                        {
                            this.state.subjectCanTeach.map((subject) => {
                                return (<CheckBox handleCheckChieldElement={this.handleCheckSubject}  {...subject} />)
                            })
                        }
                    </div>
                    <div className="col-md-4">
                        <label>Lớp có thể dạy</label>
                        {
                            this.state.classCanTeach.map((classs) => {
                                return (<CheckBox handleCheckChieldElement={this.handleCheckClass}  {...classs} />)
                            })
                        }
                    </div>
                    <div className="col-md-4">
                        <label>Khu vực dạy</label>
                        {
                            this.state.districts.map((district) => {
                                return (<CheckBox handleCheckChieldElement={this.handleCheckDistrict}  {...district} />)
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }

    handleCheckSubject = (event) => {
        let subjects = [];
        let subjectCanTeach = this.state.subjectCanTeach;
        subjectCanTeach.forEach(subject => {
            if (subject.value === event.target.value)
                subject.isChecked = event.target.checked
            if (subject.isChecked === true) {
                subjects.push(subject.value)
            }
        })
        this.setState({
            subjects: subjects
        })
    }
    handleCheckClass = (event) => {
        let classes = [];
        let classCanTeach = this.state.classCanTeach;
        classCanTeach.forEach(classs => {
            if (classs.value === event.target.value)
                classs.isChecked = event.target.checked
            if (classs.isChecked === true) {
                classes.push(classs.value)
            }
        })
        this.setState({
            classes: classes
        })
    }
    handleCheckDistrict = (event) => {
        let districtCanTeach = [];
        let districts = this.state.districts;
        districts.forEach(district => {
            if (district.value === event.target.value)
                district.isChecked = event.target.checked
            if (district.isChecked === true) {
                districtCanTeach.push(district.value)
            }
        })
        this.setState({
            districtCanTeach: districtCanTeach
        })
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: (user, role, history) => {
            dispatch(actAddUserRequest(user, role, history));
        },
        onAddTutor: (idUser, dataTutor, history) => {
            dispatch(actAddTutorRequest(idUser, dataTutor, history));
        }

    }
}

export default connect(null, mapDispatchToProps)(UserActionPage);