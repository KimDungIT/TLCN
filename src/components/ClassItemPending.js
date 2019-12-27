import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClassItemPending extends Component {
    render() {
        var { classitem, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{classitem.idClass}</td>
                <td>{classitem.classTeach}</td>
                <td>{classitem.subject}</td>
                <td>{classitem.salary}</td>
                <td>{classitem.serviceFee}</td>
                <td>{classitem.status}</td>
                <td>
                    <Link 
                        to={`/class/${classitem.idClass}`} 
                        className="btn btn-success btn-sm">
                        Duyệt
                    </Link>
                </td>
            </tr>
        );
    }
}

export default ClassItemPending;