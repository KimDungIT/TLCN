import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Radio,
  Button, 
  notification
} from "antd";

import "./../style/signup.css";
import callApi from './../utils/apiCaller';

class SigupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        var {history} = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
            var typeAccount = values.radiogroup;
            callApi(`api/users/signUp?type=${typeAccount}`, 'POST', {
                name: values.name,
                phone: values.phone,
                address: values.address,
                email: values.email,
                password: values.password
            }).then(res => {
                console.log(res);
              if (res.data.status === 200){
                if(typeAccount === "PHUHUYNH"){
                  history.push('/login');
                }
                else{
                  history.push('/make-tutor');
                }
                notification.success({
                  message: 'Success',
                  description: 'Signup successfully!'
                })
              }
            }).catch(error => {
              notification.error({
                  message: 'Error signup',
                  description: error.message
              });   
          });
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue("password")) {
            callback("Two passwords that you enter is inconsistent!");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;

        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };  
    

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-user-plus" style={{ marginLeft: "5px" }} />
            Đăng ký tài khoản
          </div>
        </div>
        <div className="row">
          <div className="panel-body">
            <Form
              layout="vertical"
              className="formal-form"
              onSubmit={this.handleSubmit}
            >
              <Form.Item label="Chọn loại tài khoản đăng ký: ">
                {getFieldDecorator("radiogroup", {
                  rules: [
                    {
                      required: true,
                      message: "Please choose your type account"
                    }
                  ]
                })(
                  <Radio.Group>
                    <Radio value="GIASU">Gia sư</Radio>
                    <Radio value="PHUHUYNH">Phụ huynh</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item label="Họ tên: ">
                {getFieldDecorator("name", {
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
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    },
                    {
                      pattern: /^\d{10,11}$/,
                      message: "Phone is allowed only numbers. Min lenght is 10 numbers and Max lenght is 11 numbers!"
                    }
                    
                  ]
                })(<Input  placeholder="Nhập số điện thoại..." />)}
              </Form.Item>
              <Form.Item label="Mật khẩu: " hasFeedback>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password"
                    },
                    {
                      validator: this.validateToNextPassword,
                    },
                    {
                      pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()]{6,}$",
                      message: "Password must have at least 6 character, require: uppercase, lowercase and number!"
                    },
                  ]
                })(<Input.Password placeholder="Nhập mật khẩu..." />)}
              </Form.Item>
              <Form.Item label="Nhập lại mật khẩu: " hasFeedback>
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Please confirm your password!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input.Password
                    placeholder="Nhập lại mật khẩu..."
                    onBlur={this.handleConfirmBlur}
                  />
                )}
              </Form.Item>
              <Form.Item label="E-mail: ">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    }
                  ]
                })(<Input  placeholder="Vd: abc@gmail.com" />)}
              </Form.Item>
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

const SigupForm = Form.create({ name: "sigup-form" })(SigupPage);

export default SigupForm;
