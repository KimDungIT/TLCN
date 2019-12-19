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
                            onChange={props.handleChange} />
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
                            onChange={props.handleChange} />
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
                    onChange={props.handleChange} />
            </div>
            <div className="form-group">
                <label>Thời gian dạy</label>
                <input
                    type="text"
                    className="form-control"
                    name="timeTeach"
                    value={props.timeTeach} 
                    onChange={props.handleChange} />
            </div>
            <div className="form-group">
                <label>Địa chỉ dạy</label>
                <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={props.address} 
                    onChange={props.handleChange} />
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label>Yêu cầu trình độ</label>
                        <select
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
                        <select
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
                            onChange={props.handleChange} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Trạng thái</label>
                        <select
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