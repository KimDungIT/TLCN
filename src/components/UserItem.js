import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserItem extends Component {
    render() {
        var { useritem } = this.props;
        return (
            <tr>
                <td>{useritem.idUser}</td>
                <td>{useritem.name}</td>
                <td>{useritem.phone}</td>
                <td>{useritem.address}</td>
                <td>{useritem.roles[0].roleName}</td>
                <td>
                    <Link 
                        to={`/user-edit/${useritem.idUser}`} 
                        className="btn btn-success btn-sm">
                        Xem
                    </Link>
                </td>
            </tr>
        );
    }
}

export default UserItem;