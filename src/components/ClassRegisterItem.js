import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClassRegisterItem extends Component {
    render() {
        var { classitem, index } = this.props;
        var date = new Date(classitem.dateReceive);
        var cdate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(date);
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{classitem.idClassRegister}</td>
                <td>{classitem.classes.idClass}</td>
                <td>{classitem.classes.classTeach}</td>
                <td>{classitem.tutors.idTutor}</td>
                <td>{cdate}</td>
                <td>{classitem.payments}</td>
                <td>
                    <Link 
                        to={`/classRegister/${classitem.idClassRegister}`} 
                        className="btn btn-success btn-sm">
                        Xem
                    </Link>
                </td>
            </tr>
        );
    }
}

export default ClassRegisterItem;