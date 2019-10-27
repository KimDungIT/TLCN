import React, { Component } from 'react';

class ClassItem extends Component {
    render() {
        var { classItem } = this.props
        return (
            <div className="col-sm-4">
                <div className="dslop-home">
                    <h4>
                        <i className="fa fa-mortar-board" /> Mã: {classItem.id}
                    </h4>
                    <div className="dslop-body">
                        <p>
                            <strong>Lớp dạy: </strong>{classItem.grade}
                            </p>
                        <p>
                            <strong>Môn dạy: </strong>{classItem.subject}
                        </p>
                        <p className="diachi">
                            <a href="https://www.google.com/maps?q=Nguy%E1%BB%85n+Tr%C3%A3i,+P8,+Q5&hl=vi&ie=UTF8" 
                                target="_blank"
                                rel="noopener noreferrer">
                                <strong>
                                    <i className="ha-red fa fa-map-marker fa-2x" />
                                </strong>
                                {classItem.address}
                            </a>
                        </p>
                        <p>
                            <strong>Mức lương: </strong>
                            <span className="ha-red">{classItem.salary}</span>
                        </p>
                        <p>
                            <strong>Số buổi: </strong>
                            {classItem.timeTeach}
                        </p>
                        <p className="thoigianday">
                            <strong>Thời gian dạy: </strong>
                            {classItem.timeTeach}
                        </p>
                        <p>
                            <strong>Yêu cầu trình độ: </strong>
                            {classItem.levelRequirement}
                        </p>
                        <p>
                            <strong>Yêu cầu giới tính: </strong>
                            {classItem.genderRequirement}
                        </p>
                        <p>
                            <strong>Liên hệ: 
                                <span className="ha-red">0902684422 - 0902504900</span>
                            </strong>
                        </p>
                        <div className="phinhanlop" 
                            title="Phí nhận lớp 35%">{classItem.serviceFee}
                        </div>
                        <a href="https://github.com" 
                            className="btn btn-success pull-right chitiet" 
                            role="button">
                            <i className="fa fa-pencil-square-o" />
                             Đăng ký dạy
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassItem;