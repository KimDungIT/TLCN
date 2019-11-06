import React, { Component } from "react";
import "./../style/signup.css";
import "antd/dist/antd.css";
import { Form, Input, Radio, Button, Select, Upload, Icon, Checkbox, Row,
    Col, } from "antd";
import {connect} from 'react-redux';
import {actAddTutorRequest} from './../actions/index';

const { Option } = Select;
const { TextArea } = Input;


class RegisterToMakeTutorPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    var {history} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
      // let data = new FormData();
      //       for (let i = 0; i < values.image.length; i++) {
      //           data.append('image', values.image[i]);
      //       }
      //       console.log(values.image);
      this.props.onAddTutor(values);

    });
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-address-book" style={{ marginLeft: "5px" }} />
            Đăng ký làm gia sư
          </div>
        </div>
        <div className="row" id="row-form">
          <div className="panel-body">
            <Form
              layout="vertical"
              className="formal-form"
              onSubmit={this.handleSubmit}
            >
              <Form.Item label="Giới tính: ">
                {getFieldDecorator("gender", {
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
              <Form.Item label="Ảnh thẻ">
                {getFieldDecorator("image", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  rules: [
                    {
                      required: true,
                      message: "Please input your image"
                    }
                  ]
                })(
                  <Upload name="image" listType="picture">
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
              <Form.Item label="Trường: ">
                {getFieldDecorator("college", {
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
                  rules: [
                    {
                      required: true,
                      message: "Please input your graduation year"
                    }
                  ]
                })(<Input placeholder="Nhập năm tốt nghiệp..." />)}
              </Form.Item>
              <Form.Item label="Môn dạy">
                {getFieldDecorator("subjects", {
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
                        <Checkbox value="Quận Bình Thạnh">Quận Bình Thạnh</Checkbox>
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
              <Form.Item label="Thông tin thêm" >
                {getFieldDecorator ("moreInfo"),
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }}/>
              }
              
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Cập nhật
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
      onAddTutor: (tutorInfo) =>{
        dispatch(actAddTutorRequest(tutorInfo));
      }
    }
}
const RegisterToMakeTutorForm = Form.create({ name: "maketutor-form" })(RegisterToMakeTutorPage);
export default connect (null, mapDispatchToProps)(RegisterToMakeTutorForm);
