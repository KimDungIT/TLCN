import React, { Component } from "react";
import {Form,Input, Radio, Select, Checkbox, Row, Col, notification } from "antd";
import "./../style/signup.css";
import { connect } from "react-redux";
import {actFetchUserRequest, actFetchTutorRequest, actChangeInfoUserRequest, actChangeInforTutorRequest} from "../actions";
import { Link } from "react-router-dom";
const { Option } = Select;
const { TextArea } = Input;

class AccountTutorEditPage extends Component {
 
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchTutor(this.props.auth.user.idUser);
  }

  handleSubmit = e => {
    e.preventDefault();
    var { history } = this.props;
    this.props.form.validateFields((err, values) => {
      console.log("e: ", err);
      if (!err) {
        console.log("Received values of form: ", values);
        let tutorInfo = {
          gender: values.gender,
          yearOfBirth: values.yearOfBirth,
          // image: imagedata.originFileObj.name,
          major: values.major,
          college: values.college,
          graduationYear: values.graduationYear,
          level: values.level,
          subjects: values.subjects.join(","),
          classes: values.classes.join(","),
          districtCanTeach: values.districts.join(","),
          moreInfo: values.moreInfo
        };
        //change info user
        this.props.onChangeInfoUser(values);
        //change info tutor
        let { idTutor } = this.props.tutor;
        this.props.onChangeInforTutor(tutorInfo, idTutor, history);
      } else {
        notification.error({
          message: "Error",
          description: "Error change information tutor"
        });
      }
    });
  };

  render() {
    let { user } = this.props;
    let { tutor } = this.props;
    console.log("render tutor ",tutor);

    if(tutor.classes !=null){
      var arrClasses = tutor.classes.split(',');
      console.log("arrClasses ", arrClasses);
    }
    if(tutor.subjects !=null){
      var arrSubject = tutor.subjects.split(',');
      console.log("render arrSubject ",arrSubject);
    }
    if(tutor.districtCanTeach !=null){
      var arrDistric = tutor.districtCanTeach.split(',');
      console.log("render arrDistric ",arrDistric);
    }
    const { getFieldDecorator } = this.props.form;
    if (user.email === null) {
      user.email = "";
    }
    if (tutor.moreInfo === null) {
      tutor.moreInfo = "";
    }

    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-address-book" style={{ marginLeft: "5px" }} />
            Cập nhật thông tin
          </div>
        </div>
        <div className="row" id="row-form">
          <div className="panel-body">
            <Form
              layout="vertical"
              className="formal-form"
              onSubmit={this.handleSubmit}
            >
              <Form.Item label="Họ tên: ">
                {getFieldDecorator("name", {
                  initialValue: `${user.name}`,
                  rules: [
                    {
                      required: true,
                      message: "Please input your name"
                    }
                  ]
                })(<Input placeholder="Nhập họ tên..." />)}
              </Form.Item>
              <Form.Item label="Số điện thoại:">
                {getFieldDecorator("phone", {
                  initialValue: `${user.phone}`,
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    },
                    {
                      pattern: /^\d{10,11}$/,
                      message:
                        "Phone is allowed only numbers. Min lenght is 10 numbers and Max lenght is 11 numbers!"
                    }
                  ]
                })(<Input placeholder="Nhập số điện thoại..." />)}
              </Form.Item>
              <Form.Item label="E-mail: ">
                {getFieldDecorator("email", {
                  initialValue: `${user.email}`,
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    }
                  ]
                })(<Input placeholder="Vd: abc@gmail.com" />)}
              </Form.Item>
              <Form.Item label="Địa chỉ: ">
                {getFieldDecorator("address", {
                  initialValue: `${user.address}`,
                  rules: [
                    {
                      required: true,
                      message: "Please input your address"
                    }
                  ]
                })(<Input placeholder="Nhập địa chỉ..." />)}
              </Form.Item>
              <Form.Item label="Giới tính: ">
                {getFieldDecorator("gender", {
                  initialValue: `${tutor.gender}`,
                  rules: [
                    {
                      required: true,
                      message: "Please choose your gender"
                    }
                  ]
                })(
                  <Radio.Group>
                    <Radio value="Nam">Nam</Radio>
                    <Radio value="Nữ">Nữ</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item label="Năm sinh" hasFeedback>
                {getFieldDecorator("yearOfBirth", {
                  initialValue: `${tutor.yearOfBirth}`,
                  rules: [
                    {
                      required: true,
                      message: "Please select your year of birth!"
                    }
                  ]
                })(
                  <Select placeholder="Chọn năm sinh...">
                    <Option value="2005">2005</Option>
                    <Option value="2004">2004</Option>
                    <Option value="2003">2003</Option>
                    <Option value="2002">2002</Option>
                    <Option value="2001">2001</Option>
                    <Option value="2000">2000</Option>
                    <Option value="1999">1999</Option>
                    <Option value="1998">1998</Option>
                    <Option value="1997">1997</Option>
                    <Option value="1996">1996</Option>
                    <Option value="1995">1995</Option>
                    <Option value="1994">1994</Option>
                    <Option value="1993">1993</Option>
                    <Option value="1992">1992</Option>
                    <Option value="1991">1991</Option>
                    <Option value="1990">1990</Option>
                    <Option value="1989">1989</Option>
                    <Option value="1988">1988</Option>
                    <Option value="1987">1987</Option>
                    <Option value="1986">1986</Option>
                    <Option value="1985">1985</Option>
                    <Option value="1984">1984</Option>
                    <Option value="1983">1983</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Trường đào tạo: ">
                {getFieldDecorator("college", {
                  initialValue: `${tutor.college}`,
                  rules: [
                    {
                      required: true,
                      message: "Please input your college"
                    }
                  ]
                })(<Input placeholder="Nhập tên trường..." />)}
              </Form.Item>
              <Form.Item label="Ngành học ">
                {getFieldDecorator("major", {
                  initialValue: `${tutor.major}`,
                  rules: [
                    {
                      required: true,
                      message: "Please input your major"
                    }
                  ]
                })(<Input placeholder="Nhập ngành học..." />)}
              </Form.Item>
              <Form.Item label="Năm tốt nghiệp ">
                {getFieldDecorator("graduationYear", {
                  initialValue: `${tutor.graduationYear}`,
                  rules: [
                    {
                      required: true,
                      message: "Please input your graduation year"
                    }
                  ]
                })(<Input placeholder="Nhập năm tốt nghiệp..." />)}
              </Form.Item>
              <Form.Item label="Hiện là" hasFeedback>
                {getFieldDecorator("level", {
                  initialValue: `${tutor.level}`,
                  rules: [
                    {
                      required: true,
                      message: "Please select your level!"
                    }
                  ]
                })(
                  <Select placeholder="Hiện là...">
                    <Option value="Sinh viên">Sinh viên</Option>
                    <Option value="Giáo viên">Giáo viên</Option>
                    <Option value="Cử nhân">Cử nhân</Option>
                    <Option value="Thạc sĩ">Thạc sĩ</Option>
                    <Option value="Tiến sĩ">Tiến sĩ</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Môn dạy">
                {getFieldDecorator("subjects", {
                  initialValue: arrSubject,
                  rules: [
                    {
                      required: true,
                      message: "Please input your subjects"
                    }
                  ]
                })(
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="Toán">Toán</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lý">Lý</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Hoá">Hoá</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Văn">Văn</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Tiếng Anh">Tiếng Anh</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Sinh">Sinh</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Sử">Sử</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Địa">Địa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Báo bài">Báo bài</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Tiếng Việt">Tiếng Việt</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Tin học">Tin học</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Vẽ">Vẽ</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                )}
              </Form.Item>
              <Form.Item label="Lớp dạy">
                {getFieldDecorator("classes", {
                   initialValue: arrClasses,
                  rules: [
                    {
                      required: true,
                      message: "Please input your classes"
                    }
                  ]
                })(
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="Lớp 1">Lớp 1</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 2">Lớp 2</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 3">Lớp 3</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 4">Lớp 4</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 5">Lớp 5</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 6">Lớp 6</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 7">Lớp 7</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 8">Lớp 8</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 9">Lớp 9</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 10">Lớp 10</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 11">Lớp 11</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Lớp 12">Lớp 12</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                )}
              </Form.Item>
              <Form.Item label="Khu vực dạy">
                {getFieldDecorator("districts", {
                  initialValue: arrDistric,
                  rules: [
                    {
                      required: true,
                      message: "Please input your districts"
                    }
                  ]
                })(
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="Quận 1">Quận 1</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 2">Quận 2</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 3">Quận 3</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 4">Quận 4</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 5">Quận 5</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 6">Quận 6</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 7">Quận 7</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 8">Quận 8</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 9">Quận 9</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 10">Quận 10</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 11">Quận 11</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận 12">Quận 12</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận Thủ Đức">Quận Thủ Đức</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận Bình Thạnh">
                          Quận Bình Thạnh
                        </Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận Tân Bình">Quận Tân Bình</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="Quận Gò Vấp">Quận Gò Vấp</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                )}
              </Form.Item>
              <Form.Item label="Thông tin thêm">
                {getFieldDecorator("moreInfo", {
                  initialValue: `${tutor.moreInfo}`
                })(<TextArea autoSize={{ minRows: 3, maxRows: 5 }} />)}
              </Form.Item>
              <Form.Item>
                {/* <Button type="primary" htmlType="submit">
                  Cập nhật
                </Button> */}
                <button  type="submit" className="btn btn-primary">
                  Lưu lại
                </button>
                <Link
                  to="/account-gs"
                  className="btn btn-danger mr-10 pull-right"
                >
                  Trở lại
                </Link>
              </Form.Item>
            </Form>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user,
    tutor: state.tutor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(actFetchUserRequest());
    },
    fetchTutor: idUser => {
      dispatch(actFetchTutorRequest(idUser));
    },
    onChangeInfoUser: infoUser => {
      dispatch(actChangeInfoUserRequest(infoUser));
    },
    onChangeInforTutor: (infoTutor, idTutor, history) => {
      dispatch(actChangeInforTutorRequest(infoTutor, idTutor, history));
    }
  };
};

const AccountTutorForm = Form.create({ name: "accountTutor-form" })(
  AccountTutorEditPage
);
export default connect(mapStateToProps, mapDispatchToProps)(AccountTutorForm);
