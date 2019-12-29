import React, { Component } from 'react';
import ClassRegisterList from '../components/ClassRegisterList';
import {connect} from 'react-redux';
import {actFetchClassRegisterPendingRequest} from '../actions/index';
import ClassRegisterItem from '../components/ClassRegisterItem';


class ClassRegisterListPage extends Component {
    componentDidMount(){
        this.props.fetchAllClassRegisterPending();        
    }
    render() {
        var {classRegister} = this.props;
        console.log("render: "+ classRegister);
           
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item ">Kiểm duyệt lớp</li>
                        <li className="breadcrumb-item active">Lớp được đăng ký</li>
                    </ol>

                    <div className="card mb-3">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-12">
                                    <i className="fas fa-table" />
                                    <span>Danh sách tất cả lớp được đăng ký</span>
                                </div>
                            </div>

                        </div>
                        <ClassRegisterList>
                            {this.showClassRegister(classRegister)}
                        </ClassRegisterList>
                    </div>
                </div>
            </div>
        );
    }
    showClassRegister(classRegister) {
        var result = null;              
        if(classRegister.length > 0){           
            result = classRegister.map((classitem, index) => {
                return (
                    <ClassRegisterItem 
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
    console.log(state.classRegister);  
    return {
        classRegister: state.classRegister
        
    };
    
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllClassRegisterPending : () => {     
            dispatch(actFetchClassRegisterPendingRequest());
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ClassRegisterListPage);