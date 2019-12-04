import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchListClassParentRegisterRequest } from "../actions/index";
import StatusClassParentRegisterItem from "./../components/StatusClassParentRegisterItem";
import StatusClassParentRegisterList from "../components/StatusClassParentRegisterList";

class StatusClassParentRegisterPage extends Component {
  componentDidMount() {
    
    this.props.onFetchListClassParentRegister();
  }
  render() {
    var {classes} = this.props;
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-fw fa-user" style={{ marginLeft: "5px" }} />
            Danh sách lớp tìm gia sư
          </div>
        </div>
        <StatusClassParentRegisterList>
          {this.showStatusClassParentRegister(classes)}
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
    classes: state.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchListClassParentRegister: () => {
      dispatch(actFetchListClassParentRegisterRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusClassParentRegisterPage);
