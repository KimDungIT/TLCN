import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { actDeleteClassRegisterRequest } from './../actions/index';

class StatusClassTutorRegisterItem extends Component {
  onDelete = (idClassRegister) => {
    this.props.onDeleteClassRegister(idClassRegister);
  }
  render() {
    var { tutorRegisterClassItem } = this.props;
    console.log("tutorRegisterClassItem: ", tutorRegisterClassItem);
    let colorStatus = 
    tutorRegisterClassItem.status === "Xem xét"
        ? '#d6d6d6'
        // : tutorRegisterClassItem.status === "Đủ điều kiện"
        // ? '#84b919'
        : tutorRegisterClassItem.status === "Đã nhận lớp"
        ? '#20adbd'
        : '#9b0000';
    
    return (
      <tr>
        <td>{tutorRegisterClassItem.idClassRegister}</td>
        <td>{tutorRegisterClassItem.classes.classTeach} - Môn { tutorRegisterClassItem.classes.subject}</td>
        <td>{tutorRegisterClassItem.classes.salary}</td>
        <td>{tutorRegisterClassItem.payments}</td>
        <td style={{ backgroundColor: `${colorStatus}`}}></td>
        <td>
          <Link to = {`/class/${tutorRegisterClassItem.classes.idClass}/register`} className="btn btn-primary mr-3">
            Chi tiết
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(tutorRegisterClassItem.idClassRegister)}
            disabled={tutorRegisterClassItem.status === "Xem xét" ? false : true}
          >
            Huỷ lớp
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onDeleteClassRegister: (idClassRegister) => {
      dispatch(actDeleteClassRegisterRequest(idClassRegister));
    }
  }
}
export default connect(null, mapDispatchToProps)(StatusClassTutorRegisterItem);
