import React, { Component } from "react";
import { Link } from "react-router-dom";

class StatusClassTutorRegisterItem extends Component {
  render() {
    var { tutorRegisterClassItem } = this.props;
    console.log("tutorRegisterClassItem: ", tutorRegisterClassItem);
    let colorStatus = 
    tutorRegisterClassItem.status === "Xem xét"
        ? '#d6d6d6'
        : tutorRegisterClassItem.status === "Đủ điều kiện"
        ? '#84b919'
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
          <Link to = {`/classs/${tutorRegisterClassItem.classes.idClass}/register`} className="btn btn-primary mr-3">
            Chi tiết
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete()}
          >
            Huỷ lớp
          </button>
        </td>
      </tr>
    );
  }
}

export default StatusClassTutorRegisterItem;
