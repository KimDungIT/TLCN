import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeParentPage extends Component {
  render() {
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i
              className="fa fa-exclamation-circle"
              style={{ marginLeft: "5px" }}
            />
            Học phí gia sư
          </div>
        </div>
        <p style={{ fontSize: "15px", color: "#474545" }}>
          Trung Tâm Gia Sư Dạy Kèm đưa ra Bảng Học Phí Gia Sư 1 tháng dạy của
          gia sư cho quý phụ huynh và các bạn gia sư tham khảo (một buổi dạy là
          2 tiết = 1h30′).
          <br />
          <br />
          Mức học phí áp dụng với 1 học sinh, nếu học nhóm hay có yêu cầu khác
          vui lòng liên hệ trung tâm.
        </p>
        <h4>1. Gia sư dạy 3 buổi một tuần:</h4>
        <div className="row quytrinh-nhanlop">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Lớp</th>
                <th>Sinh viên</th>
                <th>Giáo viên</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lớp: 1, 2, 3, 4, 5</td>
                <td>1.000.000</td>
                <td>1.500.000</td>
              </tr>
              <tr>
                <td>Lớp: 6, 7, 8, 9</td>
                <td>1.200.000</td>
                <td>1.600.000</td>
              </tr>
              <tr>
                <td>Lớp: 10, 11, 12</td>
                <td>1.400.000</td>
                <td>1.800.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="xemthem">
          <Link to="/tutor-fee">
            <i className="fa fa-play" />
            Xem thêm...
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeParentPage;
