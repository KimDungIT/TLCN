import React, { Component } from 'react';
import callApi from './../utils/apiCaller';

class InvoiceItem extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: ''
        }
    }
    
    componentDidMount(){
        var { classRegisteritem } = this.props;
        var idTutor = classRegisteritem.tutors.idTutor;
        callApi(`tutors/getTutor/getUser?idTutor=${idTutor}`, "GET", null).then(res => {
            this.setState({name: res.data.result.name })
        })  
    }
    render() {
        var { classRegisteritem, index } = this.props;
        let colorStatus = 
            classRegisteritem.status === "Xem xét"
                ? '#ffffff'
                : classRegisteritem.status === "Không đạt"
                ? '#efdada'
                : classRegisteritem.status === "Đã nhận lớp"
                ? '#c1e2a9'
                : '#9b0000';
        return (
            <tr style={{ backgroundColor: `${colorStatus}`}}>
                <td>{index + 1}</td>
                <td> 
                    {this.state.name}<br/>
                    Hiện là: {classRegisteritem.tutors.level} 
                </td>
                <td>
                    Mã lớp: {classRegisteritem.classes.idClass} <br/>
                    {classRegisteritem.classes.classTeach} , Môn: {classRegisteritem.classes.subject} <br/>
                    Địa chỉ: {classRegisteritem.classes.address}, {classRegisteritem.classes.district} <br/> 
                    Lương: {classRegisteritem.classes.salary} VNĐ                   
                </td>
                <td>
                    {classRegisteritem.payments} <br/>
                    {classRegisteritem.classes.serviceFee * 100}% = 
                        {classRegisteritem.classes.serviceFee * classRegisteritem.classes.salary} VNĐ
                </td>
                <td>
                    {classRegisteritem.status}
                </td>
            </tr>
        );
    }
}

export default InvoiceItem;