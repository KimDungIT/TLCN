import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteClassRequest } from './../actions/index';

class StatusClassParentRegisterItem extends Component {
  onDelete = (idClass) => {
    if(confirm('Bạn chắc chắn muốn xóa?')){ //eslint-disable-line
      this.props.onDeleteClass(idClass);
    }
  }
  render() {
    var { parentRegisterClassItem } = this.props;
    let colorStatus = 
    parentRegisterClassItem.status === "Chờ duyệt"
        ? '#d6d6d6'
        : parentRegisterClassItem.status === "Lớp mới"
        ? '#84b919'
        : parentRegisterClassItem.status === "Đã giao"
        ? '#20adbd'
        : '#9b0000';
    console.log("parentRegisterClassItem: ", parentRegisterClassItem);
    return (
      <tr>
        <td>{parentRegisterClassItem.idClass}</td>
        <td>
          {parentRegisterClassItem.classTeach} - Môn{" "}
          {parentRegisterClassItem.subject}
        </td>
        <td>{parentRegisterClassItem.salary}</td>
        <td>{parentRegisterClassItem.timeTeach}</td>
        <td>{parentRegisterClassItem.levelRequirement}</td>
        <td>{parentRegisterClassItem.genderRequirement}</td>
        <td style={{ backgroundColor: `${colorStatus}`}}></td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => this.onDelete(parentRegisterClassItem.idClass)}
            disabled = {parentRegisterClassItem.status === "Chờ duyệt" ? false : true}
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
    onDeleteClass: (idClass) => {
      dispatch(actDeleteClassRequest(idClass));
    }
  }
}
export default connect(null, mapDispatchToProps)(StatusClassParentRegisterItem);
