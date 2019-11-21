import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../style/signup.css";
import "antd/dist/antd.css";
import { Form, Input, Radio, Button, Icon, Checkbox, Modal, notification } from "antd";
import { connect } from "react-redux";
import { actLoginRequest } from "./../actions/index";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      valueRadio: 'PHUHUYNH',
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    var { history } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        //send request login
        this.props.onLogin(values, history);
      }else {
        notification.error({
          message: "Error",
          description: "Error login"
        });
      }
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
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
                  <Radio.Group>
                    <Radio value="GIASU">Gia sư</Radio>
                    <Radio value="PHUHUYNH">Phụ huynh</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <p>
                Bạn vui lòng đăng nhập bằng số điện thoại đã đăng ký với Trung
                Tâm Ánh Dương.
                <br />
                Nếu bạn chưa có tài khoản vui lòng đăng ký
                <Button style={{ marginLeft: 5 }} onClick={this.showModal}>
                  Tại đây
                </Button>
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
                    name="username"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" },
                    { min: 6 }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Nhập password..."
                    name="password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("remember", {
                  valuePropName: "checked"
                })(<Checkbox name="chkbRememberMe">Lưu mật khẩu</Checkbox>)}
                <Link to="/">Quên mật khẩu</Link>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
            <Modal
              title="Chọn loại tài khoản đăng ký"
              visible={this.state.visible}
              width={300}
              onCancel={this.handleCancel}
            >
              <Link to='/make-tutor'>Gia sư</Link><br/><br/>
              <Link to='/signup'>Phụ huynh</Link>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (usersInfo, history) => {
      dispatch(actLoginRequest(usersInfo, history));
    }
  };
};
const LoginForm = Form.create({ name: "login-form" })(LoginPage);
export default connect(null, mapDispatchToProps)(LoginForm);