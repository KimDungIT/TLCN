import React, { Component } from 'react';
import {Form, Input, Button} from "antd";
import {actFetchUserRequest} from './../actions/index';
import {connect} from 'react-redux';
import {actChangeInfoUserRequest} from './../actions/index';

class AccountPage extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if(!err){
            console.log("Received values of form: ", values);
        }
        this.props.onChangeInfoUser(values);
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {user} = this.props;

    if(user.email === null)
    {
      user.email="" ;
    }
   
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-fw fa-user" style={{ marginLeft: "5px" }} />
            Thông tin tài khoản
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
                {getFieldDecorator("name", { initialValue :`${user.name}`,
                  rules: [
                    {
                      required: true,
                      message: "Please input your name"
                    }
                  ]
                })(<Input placeholder="Nhập họ tên..." />)}
              </Form.Item>
              <Form.Item label="Số điện thoại:">
                {getFieldDecorator("phone", { initialValue : `${user.phone}`,
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
                {getFieldDecorator("email", { initialValue : `${user.email}`,
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    }
                  ]
                })(<Input placeholder="Vd: abc@gmail.com" />)}
              </Form.Item>
              <Form.Item label="Địa chỉ: ">
                {getFieldDecorator("address", { initialValue : `${user.address}`,
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
                  Lưu
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => {
            dispatch(actFetchUserRequest());
        },
        onChangeInfoUser: (infoUser) => {
            dispatch(actChangeInfoUserRequest(infoUser));
        }
    }
}

const AccountForm = Form.create({ name: "account" })(AccountPage);
export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);