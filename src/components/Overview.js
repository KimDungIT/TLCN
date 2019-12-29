import React, { Component } from 'react';
import callApi from './../utils/apiCaller';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalClass: 0,
            totalTutor: 0,
            totalParent: 0,
            totalAdmin: 0
        }
    }
    componentDidMount(){
        callApi('classes/countTotal', "GET", null).then(res => {
            this.setState({
                totalClass: res.data.result.totalClass,
                totalTutor: res.data.result.totalTutor,
                totalParent: res.data.result.totalParent,
                totalAdmin: res.data.result.totalAdmin
            })
        })  
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-primary o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fas fa-user-circle fa-fw" />
                            </div>
                            <div className="mr-5">
                                <h4 className="number">{this.state.totalClass} Lớp</h4>
                            </div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fas fa-angle-right" />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fas fa-fw fa-list" />
                            </div>
                            <div className="mr-5"> 
                                <h4 className="number">{this.state.totalTutor} Gia sư</h4>
                            </div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fas fa-angle-right" />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fas fa-fw fa-comments" />
                            </div>
                            <div className="mr-5"> 
                                <h4 className="number">{this.state.totalParent} Phụ huynh</h4>
                            </div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fas fa-angle-right" />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                            <div className="card-body-icon">
                                <i className="fas fa-fw fa-life-ring" />
                            </div>
                            <div className="mr-5"> 
                                <h4 className="number">{this.state.totalAdmin} Admin</h4>
                            </div>
                        </div>
                        <a className="card-footer text-white clearfix small z-1" href="">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                                <i className="fas fa-angle-right" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;