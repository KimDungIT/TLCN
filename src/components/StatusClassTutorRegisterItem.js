import React, { Component } from "react";
import { Link } from "react-router-dom";

class StatusClassTutorRegisterItem extends Component {
  render() {
    var { tutorRegisterClassItem } = this.props;
    console.log("tutorRegisterClassItem: ", tutorRegisterClassItem);
    return (
      <tr>
        <td>{tutorRegisterClassItem.idClassRegister}</td>
        <td>{tutorRegisterClassItem.classes.classTeach} - Môn { tutorRegisterClassItem.classes.subject}</td>
        <td>{tutorRegisterClassItem.classes.salary}</td>
        <td>{tutorRegisterClassItem.payments}</td>
        <td>{tutorRegisterClassItem.status}</td>
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
