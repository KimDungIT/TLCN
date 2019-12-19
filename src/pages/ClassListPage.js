import React, { Component } from 'react';
import ClassList from './../components/ClassList';
import ClassItem from './../components/ClassItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actFetchClassesRequest, actDeleteClassRequest} from './../actions/index';

class ClassListPage extends Component {
    
    componentDidMount(){
        this.props.fetchAllClasses();
    }

    onDelete = (id) => {     
        this.props.onDeleteClass(id);
    }
   
    render() {
        var {classes} = this.props;
        
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý lớp</li>
                    </ol>

                    <div className="card mb-3">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-10">
                                    <i className="fas fa-table" />
                                    <span>Danh sách tất cả lớp</span>
                                </div>
                                <div className="col-2">
                                    <Link to="class-add"><button type="button" className="btn btn-dark btn-sm">+ Thêm lớp</button></Link>
                                </div>
                            </div>

                        </div>
                        <ClassList>
                            {this.showClasses(classes)}
                        </ClassList>
                    </div>
                </div>
            </div>
        );
    }
    showClasses(classes) {
        var result = null;
        if(classes.length > 0){
            result = classes.map((classitem, index) => {
                return (
                    <ClassItem 
                        key={index}
                        classitem={classitem}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllClasses : () => {
            dispatch(actFetchClassesRequest());
        },
        onDeleteClass : (id) => {
            dispatch(actDeleteClassRequest(id));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);