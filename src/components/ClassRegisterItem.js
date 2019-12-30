import React, { Component } from "react";

class ClassRegisterItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInfo: ''
    };
  }
  
  render() {
    let { tutorRegisterClassItem } = this.props;
    console.log("tutor: ", tutorRegisterClassItem);
    let colorStatus = 
      tutorRegisterClassItem.status === "Xem xét"
        ? '#d6d6d6'
        : '#9B0000';
    return (
      <tr>
        <td>{tutorRegisterClassItem.tutors.idTutor}</td>
        <td>{tutorRegisterClassItem.tutors.level}</td>
        <td>{tutorRegisterClassItem.payments}</td>
        <td style={{ backgroundColor: `${colorStatus}`}}></td>
      </tr>
    );
  }
}

export default ClassRegisterItem;
