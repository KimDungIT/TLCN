import React, { Component } from "react";
import "antd/dist/antd.css";
import {Form, Input, Button, notification} from "antd";
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
            callApi(`api/users/signUp?type=PHUHUYNH`, 'POST', {
                name: values.name,
                phone: values.phone,
                address: values.address,
                email: values.email,
                password: values.password
            }).then(res => {
                console.log(res);
              if (res.data.status === 200){
                history.push('/login');
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
          callback("Hai mật khẩu không khớp!");
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
            Đăng ký tài khoản phụ huynh
          </div>
        </div>
        <div className="row">
          <div className="panel-body">
            <Form
              layout="vertical"
              className="formal-form"
              onSubmit={this.handleSubmit}
            >
              <Form.Item label="Họ tên: ">
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng nhập họ tên!"
                    }
                  ]
                })(<Input placeholder="Nhập họ tên..." />)}
              </Form.Item>
              <Form.Item label="Số điện thoại:">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại!"
                    },
                    {
                      pattern: /^\d{10,11}$/,
                      message: "Số điện thoại chỉ cho phép kiểu số. Yêu cầu 10 số hoặc 11 số!"
                    }
                    
                  ]
                })(<Input  placeholder="Nhập số điện thoại..." />)}
              </Form.Item>
              <Form.Item label="Mật khẩu: " hasFeedback>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu!"
                    },
                    {
                      validator: this.validateToNextPassword,
                    },
                    {
                      pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()]{6,}$",
                      message: "Mật khẩu ít nhất phải có 6 ký tự, bao gồm: chữ hoa, chữ thường và số!"
                    },
                  ]
                })(<Input.Password placeholder="Nhập mật khẩu..." autoComplete="off"/>)}
              </Form.Item>
              <Form.Item label="Nhập lại mật khẩu: " hasFeedback>
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng nhập lại mật khẩu!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input.Password
                    placeholder="Nhập lại mật khẩu..."
                    onBlur={this.handleConfirmBlur}
                    autoComplete="off"
                  />
                )}
              </Form.Item>
              <Form.Item label="E-mail: ">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "Không đúng định dạng email!"
                    }
                  ]
                })(<Input  placeholder="Vd: abc@gmail.com" />)}
              </Form.Item>
              <Form.Item label="Địa chỉ: ">
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng nhập địa chỉ"
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
