import React, { Component } from "react";

class StatusClassTutorRegisterList extends Component {
  render() {
    var result = this.props.children;
    console.log("resultStatus: ", result);
    return (
      <div className="row">
        <div className="row status">
          <label className="statusGray"></label> Xem xét
          <label className="statusBlue"></label> Đã nhận lớp
          <label className="statusRed"></label> Không đạt
        </div>

        <table className="table table-hover table-bordered mt-2">
          <thead>
            <tr>
              <th>Mã lớp</th>
              <th>Lớp - Môn</th>
              <th>Lương/tháng</th>
              <th>Hình thức</th>
              <th>Trạng thái</th>
              <th>Tuỳ chọn</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatusClassTutorRegisterList;
