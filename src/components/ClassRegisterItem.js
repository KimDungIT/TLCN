import React, { Component } from "react";

class ClassRegisterItem extends Component {
  render() {
    var { tutorRegisterClassItem } = this.props;
    var colorStatus =
      tutorRegisterClassItem.status === "Xem xét"
        ? '#d6d6d6'
        : tutorRegisterClassItem.status === "Đủ điều kiện"
        ? '#84B919'
        : '#9B0000';
    return (
      <tr>
        <td></td>
        <td>Nguyen Van A</td>
        <td>{tutorRegisterClassItem.payments}</td>
        <td style={{ backgroundColor: `${colorStatus}`}}></td>
      </tr>
    );
  }
}

export default ClassRegisterItem;
