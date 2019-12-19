import React, { Component } from "react";

import StatusClassParentRegisterItem from "./../components/StatusClassParentRegisterItem";
import StatusClassParentRegisterList from "../components/StatusClassParentRegisterList";
import { connect } from "react-redux";
import { actFetchListClassParentRegisterRequest } from "../actions/index";

class StatusClassParentRegisterPage extends Component {
  componentDidMount() {
    let idUser = this.props.auth.user.idUser
    this.props.onFetchListClassParentRegister(idUser);
  }
  render() {
    var {classParent} = this.props;
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-fw fa-user" style={{ marginLeft: "5px" }} />
            Danh sách lớp tìm gia sư
          </div>
        </div>
        <StatusClassParentRegisterList>
          {this.showStatusClassParentRegister(classParent)}
        </StatusClassParentRegisterList>
      </div>
    );
  }
  showStatusClassParentRegister(parentRegisterClass) {
    var result = null;
    if (parentRegisterClass.length > 0) {
      result = parentRegisterClass.map((parentRegisterClassItem, index) => {
        return (
          <StatusClassParentRegisterItem
            key={index}
            parentRegisterClassItem={parentRegisterClassItem}
            index={index}
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
    classParent: state.classParent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchListClassParentRegister: (idUser) => {
      dispatch(actFetchListClassParentRegisterRequest(idUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusClassParentRegisterPage);
