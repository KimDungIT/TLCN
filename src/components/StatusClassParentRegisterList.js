import React, { Component } from "react";

class StatusClassParentRegisterList extends Component {
  render() {
    var result = this.props.children;
    console.log("resultStatus: ", result);
    return (
      <div className="row">
        <div className="row status">
          <label className="statusGray"></label> Chờ duyệt
          <label className="statusGreen"></label> Lớp mới
          <label className="statusBlue"></label> Đã giao
          <label className="statusRed"></label> Không đạt
        </div>

        <table className="table table-hover table-bordered mt-2">
          <thead>
            <tr>
              <th>Mã lớp</th>
              <th>Lớp - Môn</th>
              <th>Lương/tháng</th>
              <th>Thời gian dạy</th>
              <th>Yêu cầu trình độ</th>
              <th>Yêu cầu giới tính</th>
              <th>Trạng thái</th>
              <th>Tuỳ chọn</th>
            </tr>
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}

export default StatusClassParentRegisterList;
