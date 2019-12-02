import React, { Component } from "react";
import { Form, Button, Upload, Icon, notification } from "antd";
import callApi from "../utils/apiCaller";
import { actChangeImageRequest } from "../actions";
import { connect } from "react-redux";

class InfoAccountTutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
      imageInfo: this.props.imageInfo,
    };
  }

  // componentDidMount(){
  //   this.setState({
  //     imageInfo: this.props.imageInfo,
  //   })
  // }
  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  onHandle() {
    this.setState({
      check: false
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let formData = new FormData();
        let imageData = values.file[0];
        formData.append("file", imageData.originFileObj);
        this.props.onChangeImage(formData);
        callApi(
          `api/tutors/readImage?idUser=${this.props.userInfo.idUser}`,
          "GET",
          null
        )
          .then(res => {
            if (res.status === 200) {
              this.setState({
                imageInfo: res.data.result
              });
              notification.success({
                message: "Success",
                description: "Get image successfully!"
              });
            }
          })
          .catch(error => {
            notification.error({
              message: "Error get image",
              description: error.message
            });
          });
      }
    });
  };
  render() {
    let { userInfo } = this.props;
    let { tutorInfo } = this.props;
    let { imageInfo } = this.props;
    //let {imageInfo} = this.state;
    const { getFieldDecorator } = this.props.form;
    let { check } = this.state;

    return (
      <div className="row giasu-tieubieu">
        <div className="col-lg-4 col-md-4 col-sm-4">
          <img
            alt="anh-gs"
            // src="images/man.jpg"
            src={`data:image/jpg;base64,${imageInfo}`}
            className="imageTutor"
            style={{
              width: 230,
              height: 270,
              marginTop: 15,
              boxShadow: "1px 2px 2px 1px #e8e4e3"
            }}
          />
          <Form
            style={{ marginTop: 15 }}
            layout="vertical"
            className="formal-form"
            onSubmit={this.handleSubmit}
          >
            <Form.Item>
              {getFieldDecorator("file", {
                valuePropName: "fileList",
                getValueFromEvent: this.normFile,
                rules: [
                  {
                    required: true,
                    message: "Please choose your image"
                  }
                ]
              })(
                <Upload name="file" listType="picture">
                  <Button onClick={() => this.onHandle()}>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>
              )}
            </Form.Item>
            <Form.Item>
              <Button hidden={check} type="primary" htmlType="submit">
                Cập nhật ảnh
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <p className="maso">
            <strong>Mã số: </strong>
            {tutorInfo.idTutor}
          </p>
          <p>
            <strong>Tên gia sư: </strong>
            {userInfo.name}
          </p>
          <p>
            <strong>Năm sinh: </strong>
            {tutorInfo.yearOfBirth}
          </p>
          <p>
            <strong>Hiện là: </strong>
            {tutorInfo.level}
          </p>
          <p>
            <strong>Trường: </strong>
            {tutorInfo.college}
          </p>
          <p>
            <strong>Chuyên ngành: </strong>
            {tutorInfo.major}
          </p>
          <p>
            <strong>Năm tốt nghiệp: </strong>
            {tutorInfo.graduationYear}
          </p>
          <p>
            <strong>Nhận dạy: </strong> {tutorInfo.classes}
          </p>
          <p>
            <strong>Các môn: </strong> {tutorInfo.subjects}
          </p>
          <p>
            <strong>Khu vực: </strong> {tutorInfo.districtCanTeach}
          </p>
          <p>
            <strong>Thông tin khác: </strong>
            {tutorInfo.moreInfo}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tutor: state.tutor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeImage: formData => {
      dispatch(actChangeImageRequest(formData));
    }
  };
};

const AccountTutor = Form.create({ name: "accountTutor" })(InfoAccountTutor);
export default connect(mapStateToProps, mapDispatchToProps)(AccountTutor);
