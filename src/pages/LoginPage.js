import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../style/signup.css";
import "antd/dist/antd.css";
import { Form, Input, Radio, Button, Icon, Checkbox } from "antd";
import {connect} from 'react-redux';
import {actLoginRequest} from './../actions/index';

class LoginPage extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = ({
  //     isDisable: false
  //   })
  // }
  handleSubmit = e => {
    e.preventDefault();
    var {history} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      this.props.onLogin(values, values.radioTypeAccount, history);
    });

   
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-fw fa-user" style={{ marginLeft: "5px" }} />
            Đăng nhập
          </div>
        </div>
        <div className="row" id="row-form">
          <div className="panel-body">
            <Form
              layout="vertical"
              className="formal-form"
              onSubmit={this.handleSubmit}
            >
              <Form.Item>
                {getFieldDecorator("radioTypeAccount", {
                  rules: [
                    {
                      required: true,
                      message: "Please choose your type account"
                    }
                  ]
                })(
                  <Radio.Group >
                    <Radio value="GIASU">Gia sư</Radio>
                    <Radio value="PHUHUYNH">Phụ huynh</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <p>
                Bạn vui lòng đăng nhập bằng số điện thoại đã đăng ký với Trung
                Tâm Ánh Dương. Nếu bạn chưa có tài khoản vui lòng đăng ký
                <Link to="/signup"> Tại đây</Link>
              </p>
              <Form.Item>
                {getFieldDecorator("username", {
                rules: [
                    { required: true, message: "Please input your username!" },
                    {
                      min: 10,
                      max: 11
                    }
                ]
                })(
                <Input
                    prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Nhập số điện thoại..."
                    name = 'username'
                />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' },
                  {min: 6}],

                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Nhập password..."
                    name = 'password'
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                })(
                  <Checkbox name = 'chkbRememberMe'>
                     Lưu mật khẩu
                  </Checkbox>,
                )},
                <a className="login-form-forgot" href="">
                    Quên mật khẩu
                </a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Đăng nhập
                </Button>
            </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin : (usersInfo, typeAccount, history) => {
        dispatch(actLoginRequest(usersInfo, typeAccount, history));
    }
  }
}
const LoginForm = Form.create({ name: "login-form" })(LoginPage);

export default connect (null, mapDispatchToProps)(LoginForm);
