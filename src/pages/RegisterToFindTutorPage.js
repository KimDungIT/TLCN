import React, { Component } from 'react';
import "./../style/signup.css";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, notification} from "antd";
import {connect} from 'react-redux';
import {actAddClassRequest} from './../actions/index';

const { Option } = Select;

class RegisterToFindTutorPage extends Component {
    handleSubmit = e => {
        e.preventDefault();
        var {history} = this.props;
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log("Received values of form: ", values);
            //send request add class
            this.props.onAddClass(values, history);
          } else {
            notification.error({
              message: "Error",
              description: "Error add class"
            });
          }
           
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="col-lg-9 col-md-9 col-sm-9">
                <div className="row">
                    <div className="panel-heading">
                        <i className="fa fa-pencil-square" style={{ marginLeft: '5px' }} />Đăng ký tìm gia sư
                    </div>
                </div>
                <div className="row" id="row-form">
                    <div className="panel-body">
                       
                        <Form
                        layout="vertical"
                        className="formal-form"
                        onSubmit={this.handleSubmit}
                        >
                            <Form.Item label="Địa chỉ: ">
                                {getFieldDecorator("address", {
                                rules: [
                                    {
                                    required: true,
                                    message: "Please input your address"
                                    }
                                ]
                                })(<Input placeholder="Nhập địa chỉ..." />)}
                            </Form.Item>
                             <Form.Item label="Lớp" hasFeedback>
                                {getFieldDecorator("classTeach", {
                                rules: [
                                    {
                                    required: true,
                                    message: "Please select your grade!"
                                    }
                                ]
                                })(
                                <Select placeholder="Chọn lớp...">
                                    <Option value="Lớp 1">Lớp 1</Option>
                                    <Option value="Lớp 2">Lớp 2</Option>
                                    <Option value="Lớp 3">Lớp 3</Option>
                                    <Option value="Lớp 4">Lớp 4</Option>
                                    <Option value="Lớp 5">Lớp 5</Option>
                                    <Option value="Lớp 6">Lớp 6</Option>
                                    <Option value="Lớp 7">Lớp 7</Option>
                                    <Option value="Lớp 8">Lớp 8</Option>
                                    <Option value="Lớp 9">Lớp 9</Option>
                                    <Option value="Lớp 10">Lớp 10</Option>
                                    <Option value="Lớp 11">Lớp 11</Option>
                                    <Option value="Lớp 12">Lớp 12</Option>
                                </Select>
                                )}
                            </Form.Item>
                            <Form.Item label="Môn học: ">
                                {getFieldDecorator("subjects", {
                                rules: [
                                    {
                                    required: true,
                                    message: "Please input your subjects"
                                    }
                                ]
                                })(<Input placeholder="Nhập môn học cần đăng ký, VD: toán, lý,..." />)}
                            </Form.Item>
                            <Form.Item label="Thời gian học: ">
                                {getFieldDecorator("time", {
                                rules: [
                                    {
                                    required: true,
                                    message: "Please input your time"
                                    }
                                ]
                                })(<Input placeholder="VD: T2-T4-T6, 17h-19h" />)}
                            </Form.Item>
                            <Form.Item label="Yêu cầu cấp bậc" hasFeedback>
                                {getFieldDecorator("requireLevel", {
                                rules: [
                                    {
                                    required: true,
                                    message: "Please select your require!"
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
                            <Form.Item label="Yêu cầu giới tính" hasFeedback>
                                {getFieldDecorator("requireGender", {
                                rules: [
                                    {
                                    required: true,
                                    message: "Please select your require!"
                                    }
                                ]
                                })(
                                <Select placeholder="Giới tính là...">
                                    <Option value="Nam">Nam</Option>
                                    <Option value="Nữ">Nữ</Option>
                                    <Option value="Không yêu cầu">Không yêu cầu</Option>
                                </Select>
                                )}
                            </Form.Item>
                            <Form.Item label="Lương (đồng/tháng): ">
                                {getFieldDecorator("salary", {
                                rules: [
                                    {
                                    required: true,
                                    message: "Please input your salary"
                                    }
                                ]
                                })(<Input placeholder="VD: 1500000" />)}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Đăng ký
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddClass: (classInfo, history) =>{
        dispatch(actAddClassRequest(classInfo, history));
      }
    }
}
const RegisterToFindTutorForm = Form.create({name: "findtutor-form"})(RegisterToFindTutorPage);
export default connect(null, mapDispatchToProps)(RegisterToFindTutorForm);