import React from 'react';

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div className="form-group">
            <h3>Thêm thông tin lớp</h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label>Lớp dạy</label>
                        <input
                            type="text"
                            className="form-control"
                            name="classTeach"
                            value={props.classTeach} 
                            onChange={props.handleChange} required/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Lương (VNĐ)</label>
                        <input
                            type="number"
                            className="form-control"
                            name="salary"
                            value={props.salary} 
                            onChange={props.handleChange} required/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label>Môn dạy</label>
                <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={props.subject} 
                    onChange={props.handleChange} required/>
            </div>
            <div className="form-group">
                <label>Thời gian dạy</label>
                <input
                    type="text"
                    className="form-control"
                    name="timeTeach"
                    value={props.timeTeach} 
                    onChange={props.handleChange} required/>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="form-group">
                        <label>Địa chỉ dạy</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={props.address} 
                            onChange={props.handleChange} required/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-group">
                        <label>Quận / Huyện</label>
                        <select required
                            className="form-control"
                            name="district"
                            value={props.district} 
                            onChange={props.handleChange}>
                            <option>Quận Thủ Đức</option>
                            <option>Quận Gò Vấp</option>
                            <option>Quận Tân Phú</option>
                            <option>Quận Bình Tân</option>
                            <option>Quận Phú Nhuận</option>
                            <option>Quận Bình Thạnh</option>
                            <option>Quận Tân Bình</option>
                            <option>Quận 1</option>
                            <option>Quận 2</option>
                            <option>Quận 3</option>
                            <option>Quận 4</option>
                            <option>Quận 5</option>
                            <option>Quận 6</option>
                            <option>Quận 7</option>
                            <option>Quận 8</option>
                            <option>Quận 9</option>
                            <option>Quận 10</option>
                            <option>Quận 11</option>
                            <option>Quận 12</option>
                            <option>Huyện Cần Giờ</option>
                            <option>Huyện Nhà Bè</option>
                            <option>Huyện Củ Chi</option>
                            <option>Huyện Bình Chánh</option>
                            <option>Huyện Hóc Môn</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label>Yêu cầu trình độ</label>
                        <select required
                            className="form-control"
                            name="levelRequirement"
                            value={props.levelRequirement} 
                            onChange={props.handleChange}>
                            <option>Không yêu cầu</option>
                            <option>Sinh viên</option>
                            <option>Giáo viên</option>
                            <option>Cử nhân sư phạm</option>
                            <option>Thạc sỹ/Tiến sỹ</option>
                        </select>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Yêu cầu giới tính</label>
                        <select required
                            className="form-control"
                            name="genderRequirement"
                            value={props.genderRequirement} 
                            onChange={props.handleChange}>
                            <option>Không yêu cầu</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label>Phí dịch vụ</label>
                        <input
                            type="number"
                            className="form-control"
                            name="serviceFee"
                            value={props.serviceFee} 
                            onChange={props.handleChange} required/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Trạng thái</label>
                        <select required
                            className="form-control"
                            name="status"
                            value={props.status}
                            onChange={props.handleChange}>
                            <option>Lớp mới</option>
                            <option>Chờ duyệt</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Step1;