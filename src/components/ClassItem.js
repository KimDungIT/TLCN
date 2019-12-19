import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClassItem extends Component {
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
                        Xem
                    </Link>
                    <Link
                        to={`/class-edit/${classitem.idClass}`}
                        className="btn btn-danger btn-sm">
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => this.onDelete(classitem.idClass)}>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
    onDelete = (id) => {
        if (confirm(`Bạn có chắc chắn muốn xóa lớp có id ${id} không?`)) { //eslint-disable-line
            this.props.onDelete(id);
        }


    }
}

export default ClassItem;