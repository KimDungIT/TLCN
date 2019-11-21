import React, { Component } from "react";

class ClassRegisterItem extends Component {
  render() {
    let { tutorRegisterClassItem } = this.props;
    //let {idTutor} = tutorRegisterClassItem.tutors;
    
    let colorStatus = 
      tutorRegisterClassItem.status === "Xem xét"
        ? '#d6d6d6'
        : tutorRegisterClassItem.status === "Đủ điều kiện"
        ? '#84B919'
        : '#9B0000';
    return (
      <tr>
        <td>{tutorRegisterClassItem.tutors.idTutor}</td>
        <td>{tutorRegisterClassItem.tutors.gender}</td>
        <td>{tutorRegisterClassItem.payments}</td>
        <td style={{ backgroundColor: `${colorStatus}`}}></td>
      </tr>
    );
  }
}

export default ClassRegisterItem;
