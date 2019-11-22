import React, { Component } from "react";
import InforAccountTutor from "./../components/InfoAccountTutor";
import { actFetchUserRequest, actFetchTutorRequest, } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import callApi from './../utils/apiCaller';
import { notification } from "antd";

class AccountTutorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInfo : '',
    }
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchTutor(this.props.auth.user.idUser);
    //send request read image
    callApi(`api/tutors/readImage?idUser=${this.props.auth.user.idUser}`, 'GET', null).then(res => 
      {
        if(res.status === 200){
          this.setState({
            imageInfo: res.data.result
          })
          notification.success({
            message: "Success",
            description: "Get image successfully!"
          });
        }
      }).catch(error => {
        notification.error({
          message: "Error get image",
          description: error.message
        });
      });
  }
  render() {
    let {user} = this.props;
    let {tutor} = this.props;
    let {imageInfo} = this.state;
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-fw fa-user" style={{ marginLeft: "5px" }} />
            Thông tin tài khoản
          </div>
        </div>
        <InforAccountTutor userInfo = {user} tutorInfo = {tutor} imageInfo = {imageInfo}/>
        <div className="row" style={{ marginTop: 15 }}>
          <Link to={`account/${tutor.idTutor}/edit`} className="btn btn-primary pull-right chitiet">
          Chỉnh sửa thông tin
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    auth: state.auth,
    tutor: state.tutor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(actFetchUserRequest());
    },
     fetchTutor: (idUser) =>{
        dispatch(actFetchTutorRequest(idUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountTutorPage);
