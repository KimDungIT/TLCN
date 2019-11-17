import React, { Component } from "react";

class ClassRegisterList extends Component {
  render() {
    var result = this.props.children
    console.log("result: ", result);
    return (
      <div className="row luu-y">
        <h4 className="nhanlop">Danh sách gia sư đã đăng ký</h4>
        <label className="statusGray"></label> Xem xét
        <label className="statusGreen"></label> Đủ điều kiện
        <label className="statusRed"></label> Không đạt
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Mã gia sư</th>
              <th>Họ và tên</th>
              <th>Hình thức thanh toán</th>
              <th>Trạng thái</th>
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

export default ClassRegisterList;
