import React, { Component } from 'react';

class ClassDetail extends Component {
    
    render() {
        var { classRegister } = this.props
        return (
            <div className="col-sm-6 lop-moi">
                <p>
                    <strong>Mã lớp: </strong>{classRegister.idClass}                    
                </p>
                <p>
                    <strong>Lớp dạy: </strong>{classRegister.classTeach}
                </p>
                <p>
                    <strong>Môn dạy: </strong>{classRegister.subject}
                </p>
                <p className="diachi">
                    <a href="https://www.google.com/maps?q=Nguy%E1%BB%85n+Tr%C3%A3i,+P8,+Q5&hl=vi&ie=UTF8" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <strong>
                            <i className="ha-red fa fa-map-marker fa-2x" />
                        </strong>
                        {classRegister.address}, {classRegister.district}, TP. Hồ Chí Minh
                    </a>
                </p>
                <p>
                    <strong>Mức lương: </strong>
                    <span className="ha-red">{classRegister.salary}</span>
                </p>
                <p className="thoigianday">
                    <strong>Thời gian dạy: </strong>
                    {classRegister.timeTeach}
                </p>
                <p>
                    <strong>Yêu cầu trình độ: </strong>
                   {classRegister.levelRequirement}
                </p>
                <p>
                    <strong>Yêu cầu giới tính: </strong>
                    {classRegister.genderRequirement}
                </p>
                <p>
                    <strong>Liên hệ: 
                        <span className="ha-red"> 0902684422 - 0902504900</span>
                    </strong>
                </p>
                    
            </div>
        );
    }
}


export default ClassDetail;