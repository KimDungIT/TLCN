import React, { Component } from "react";
import "./../style/signup.css";
import "antd/dist/antd.css";
import { Form, Input, Button, notification } from "antd";
import callApi from "../utils/apiCaller";

class ChangePasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    var { history } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //send request change password
        callApi(`api/users/changePassword`, "PATCH", {
          oldPassword: values.oldPassword,
          newPassword: values.newPassword
        })
          .then(res => {
            console.log(res);
            if (res.data.status === 200) {
              history.push("/login");
              notification.success({
                message: "Success",
                description: "Đổi mật khẩu thành công!"
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
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
            <i className="fa fa-fw fa-user" style={{ marginLeft: "5px" }} />
            Đổi mật khẩu
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
                {getFieldDecorator("oldPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your old password!"
                    },
                    {
                      pattern:
                        "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()]{6,}$",
                      message:
                        "Password must have at least 6 character, require: uppercase, lowercase and number!"
                    }
                  ]
                })(<Input.Password placeholder="Nhập mật khẩu cũ..." />)}
              </Form.Item>
              <Form.Item hasFeedback>
                {getFieldDecorator("newPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your new password"
                    },
                    {
                      validator: this.validateToNextPassword
                    },
                    {
                      pattern:
                        "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()]{6,}$",
                      message:
                        "Password must have at least 6 character, require: uppercase, lowercase and number!"
                    }
                  ]
                })(<Input.Password placeholder="Nhập mật khẩu mới..." />)}
              </Form.Item>
              <Form.Item hasFeedback>
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
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Đổi mật khẩu
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
const ChangePasswordForm = Form.create({ name: "change-password" })(
  ChangePasswordPage
);
export default ChangePasswordForm;
