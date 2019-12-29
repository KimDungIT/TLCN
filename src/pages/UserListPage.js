import React, { Component } from 'react';
import UserList from '../components/UserList';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actFetchUsersRequest} from './../actions/index';
import UserItem from '../components/UserItem';

class UserListPage extends Component {
    componentDidMount(){
        this.props.fetchAllUsers();
    }
    render() {
        var {users} = this.props;
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý user</li>
                    </ol>

                    <div className="card mb-3">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-10">
                                    <i className="fas fa-table" />
                                    <span>Danh sách tất cả user</span>
                                </div>
                                <div className="col-2">
                                    <Link to="user-add"><button type="button" className="btn btn-dark btn-sm">+ Thêm user</button></Link>
                                </div>
                            </div>

                        </div>
                        <UserList>
                            {this.showUser(users)}
                        </UserList>
                    </div>
                </div>
            </div>
        );
    }
    showUser(users) {
        var result = null;
        if(users.length > 0){
            result = users.map((useritem, index) => {
                return (
                    <UserItem 
                        key={index}
                        useritem={useritem}
                        index={index}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers : () => {
            dispatch(actFetchUsersRequest());
        }
        // onDeleteClass : (id) => {
        //     dispatch(actDeleteClassRequest(id));
        // }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);