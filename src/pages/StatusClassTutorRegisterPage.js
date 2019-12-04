import React, { Component } from "react";

import {connect} from "react-redux";
import { actFetchListClassTutorRegisterRequest } from "../actions";
import StatusClassTutorRegisterItem from "./../components/StatusClassTutorRegisterItem";
import StatusClassTutorRegisterList from "../components/StatusClassTutorRegisterList";

class StatusClassTutorRegisterPage extends Component {
  
  componentDidMount(){
    let {idUser} = this.props.auth.user;
    this.props.onFetchListClassTutorRegister(idUser);
  }
  render() {
    var {tutorRegisterClass} = this.props;
    console.log("tutorRegisterClass: ", tutorRegisterClass);
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-fw fa-user" style={{ marginLeft: "5px" }} />
            Danh sách lớp đã đăng ký
          </div>
        </div>
        <StatusClassTutorRegisterList>
          {this.showStatusClassTutorRegister(tutorRegisterClass)}
        </StatusClassTutorRegisterList>
      </div>
    );
  }
  showStatusClassTutorRegister(tutorRegisterClass){
    var result = null;
    if(tutorRegisterClass.length > 0){
      result = tutorRegisterClass.map((tutorRegisterClassItem, index) => {
        return (
          <StatusClassTutorRegisterItem 
          key = { index }
          tutorRegisterClassItem = { tutorRegisterClassItem }
          index = { index }
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    tutorRegisterClass: state.tutorRegisterClass
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchListClassTutorRegister: idUser => {
      dispatch(actFetchListClassTutorRegisterRequest(idUser));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusClassTutorRegisterPage);
