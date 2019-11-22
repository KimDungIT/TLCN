import React, { Component } from "react";
import ClassDetail from "./../components/ClassDetail";
import {
  actGetClassRequest,
  actTutorRegisterClassRequest,
  actFetchTutorRegisterClassRequest
} from "./../actions/index";
import { connect } from "react-redux";
import { DatePicker } from "antd";
import { Form, Input, Button, Select } from "antd";
import ClassRegisterList from "./../components/ClassRegisterList";
import ClassRegisterItem from "./../components/ClassRegisterItem";

const { Option } = Select;
const { TextArea } = Input;

class RegisterClassPage extends Component {
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onRegisterClass(id);
      this.props.onFetchTutorRegisterClass(id);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const fieldsValue = {
        ...values,
        dateReceive: values["dateReceive"].format("YYYY-MM-DD")
      };
      console.log("Received values of form: ", fieldsValue);
      let idClass = this.props.classRegister.idClass;
      console.log("idClass: ", idClass);
      this.props.onTutorRegisterClass(fieldsValue, idClass);
    });
  };

  render() {
    let { classRegister } = this.props;
    let { tutorRegisterClass } = this.props;
    console.log("class register: ", classRegister);
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-fw fa-user" style={{ marginLeft: "5px" }} />
            Lớp đang cần gia sư
          </div>
        </div>
        <div className="row">
          <ClassDetail classRegister={classRegister}></ClassDetail>
          <div className="col-sm-4 đk-nhan-lop">
            <h4 className="nhanlop">ĐĂNG KÝ NHẬN LỚP</h4>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator("dateReceive", {
                  rules: [
                    {
                      required: true,
                      message: "Nhập ngày nhận lớp"
                    }
                  ]
                })(<DatePicker placeholder="Ngày nhận lớp..." />)}
              </Form.Item>
              <Form.Item hasFeedback>
                {getFieldDecorator("payments", {
                  rules: [
                    {
                      required: true,
                      message: "Nhập hình thức thanh toán!"
                    }
                  ]
                })(
                  <Select placeholder="Hình thức thanh toán...">
                    <Option value="Chuyển khoản">Chuyển khoản</Option>
                    <Option value="Đến trung tâm">Đến trung tâm</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {
                  (getFieldDecorator("moreRequire"),
                  (
                    <TextArea
                      placeholder="Yêu cầu thêm nếu có"
                      autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                  ))
                }
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        {tutorRegisterClass.length <= 0 ? (
          <div className="row luu-y">
            {" "}
            <strong>Hiện tại chưa có gia sư nào đăng ký nhận lớp này</strong>
          </div>
        ) : (
          <ClassRegisterList>
            {this.showClassRegisterList(tutorRegisterClass)}
          </ClassRegisterList>
        )}
        <div className="row luu-y">
          <p style={{ fontStyle: "italic" }}>
            <strong style={{ color: "red" }}>(*)</strong>Cho phép tối đa 5 người
            đăng ký. Chỉ giao lớp cho 1 người đủ điều kiện đóng lệ phí trước.
          </p>
          <br />
          <br />
          <p>
            <strong style={{ color: "red" }}>Lưu ý</strong>: Trung tâm{" "}
            <span style={{ fontWeight: "bold" }}>Gia sư Ánh Dương</span> ưu tiên
            người đủ điều kiện, đóng lệ phí sớm. Trước khi chuyển khoản hoặc tới
            trung tâm theo giờ bạn đã hẹn hãy gọi số{" "}
            <span style={{ fontWeight: "bold" }}>
              0902684422 hoặc 0902504900
            </span>{" "}
            để kiểm tra trạng thái lớp chính xác.
          </p>
        </div>
      </div>
    );
  }
  showClassRegisterList(tutorRegisterClass) {
    var result = null;
    if (tutorRegisterClass.length > 0) {
      result = tutorRegisterClass.map((tutorRegisterClassItem, index) => {
        return (
          <ClassRegisterItem
            key={index}
            tutorRegisterClassItem={tutorRegisterClassItem}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    classRegister: state.classRegister,
    tutorRegisterClass: state.tutorRegisterClass
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTutorRegisterClass: idClass => {
      dispatch(actFetchTutorRegisterClassRequest(idClass));
    },
    onRegisterClass: id => {
      dispatch(actGetClassRequest(id));
    },
    onTutorRegisterClass: (classRegisterInfo, idClass) => {
      dispatch(actTutorRegisterClassRequest(classRegisterInfo, idClass));
    }
  };
};

const RegisterForm = Form.create({ name: "register-form" })(RegisterClassPage);
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
