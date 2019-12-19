import React, { Component } from 'react';
import ClassList from '../components/ClassList';
import ClassItemPending from '../components/ClassItemPending';
import {connect} from 'react-redux';
import {actFetchClassesPendingRequest} from './../actions/index';


class ClassListPendingPage extends Component {
    componentDidMount(){
        this.props.fetchAllClassesPending();
    }
    render() {
        var {classes} = this.props;
                
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item ">Kiểm duyệt lớp</li>
                        <li className="breadcrumb-item active">Lớp mới chờ duyệt</li>
                    </ol>

                    <div className="card mb-3">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-10">
                                    <i className="fas fa-table" />
                                    <span>Danh sách lớp mới chờ duyệt</span>
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
                    <ClassItemPending 
                        key={index}
                        classitem={classitem}
                        index={index}
                        // onDelete={this.onDelete}
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
        fetchAllClassesPending : () => {
            dispatch(actFetchClassesPendingRequest());
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPendingPage);