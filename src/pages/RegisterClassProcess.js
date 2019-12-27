import React, { Component } from "react";

class RegisterClassProcess extends Component {
  render() {
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-exclamation-circle" style={{ marginLeft: 5 }} />
            Quy trình nhận lớp
          </div>
        </div>
        <div className="row quytrinh-nhanlop">
          <div className="col-sm-3">
            <img src="images/1.png" style={{ textAlign: "center" }} alt="part1"/>
            <h4 className="tieude-quytrinh">ĐĂNG KÝ TÀI KHOẢN</h4>
            <p className="noidung">
              Để đăng ký nhận lớp, trước tiên bạn cần đăng kí tài khoản, chọn mục đăng ký tài khoản gia sư.
              Sau đó bạn vui lòng nhập các thông tin.Chúng tôi rất mong các bạn sẽ điền đầy đủ thông tin và
              chi tiết(upload hình ảnh là hình thẻ của Bạn).
            </p>
          </div>
          <div className="col-sm-3">
            <img src="images/2.png" alt="part2"/>
            <h4 className="tieude-quytrinh">ĐĂNG KÝ NHẬN LỚP</h4>
            <p className="noidung">
              Bạn hãy đọc kĩ thông tin của lớp dạy đó. Sau khi xem xét kĩ càng và
              thấy đủ khả năng về trình độ, bằng cấp nhận dạy lớp đó, Bạn hãy
              click vào “ ĐANG KÍ DẠY ” của lớp đó để đăng kí nhận dạy. Trong form
              Đăng ký nhận lớp, bạn vui lòng chọn ngày nhận lớp,
              hình thức nhận lớp và yêu cầu thêm (nếu có)
            </p>
          </div>
          <div className="col-sm-3">
            <img src="images/3.png" alt="part3"/>
            <h4 className="tieude-quytrinh">KIỂM DUYỆT THÔNG TIN</h4>
            <p className="noidung">
              Trung tâm kiểm duyệt thông tin đăng kí của Bạn trên lớp mới đó.
              Khi thấy bạn đủ khả năng + trình độ + bằng
              cấp, trung tâm sẽ thông báo trên Website là đủ điều kiện. 
              Khi Bạn thấy mình đủ điều kiện Bạn vui
              lòng gọi lại trung tâm GẤP để nhận lớp.
            </p>
          </div>
          <div className="col-sm-3">
            <img src="images/4.png" alt="part4"/>
            <h4 className="tieude-quytrinh">XÁC NHẬN VÀ ĐÓNG LỆ PHÍ</h4>
            <p className="noidung">
              Trung tâm ưu tiên Bạn đủ điều kiện, đóng lệ phí sớm. Trước khi chuyển khoản hoặc tới 
              trung tâm theo giờ bạn đã hẹn hãy gọi số 0902684422 để kiểm tra trạng
              thái lớp chính xác. Trung tâm sẽ giữ lớp đó cho Bạn trong khoảng
              3h, nếu Bạn không đóng phí thì trung tâm có quyền giao đi
              cho Bạn khác đủ điều kiện.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterClassProcess;
