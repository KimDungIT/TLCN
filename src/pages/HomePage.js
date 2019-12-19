import React, { Component } from 'react';

const arr = ["./vendor/jquery/jquery.min.js","./vendor/chart.js/Chart.min.js", "./vendor/datatables/jquery.dataTables.js",
"./js/demo/datatables-demo.js","./js/demo/chart-area-demo.js","./vendor/datatables/dataTables.bootstrap4.js"]

class HomePage extends Component {
    componentDidMount(){
        arr.forEach(item => {
            let script = document.createElement("script");
            script.src = item;
            script.async = true;
            document.body.appendChild(script);
            
        })
    }
    render() {
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    {/* Breadcrumbs*/}
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Overview</li>
                    </ol>
                    {/* Icon Cards*/}
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-3">
                            <div className="card text-white bg-primary o-hidden h-100">
                                <div className="card-body">
                                    <div className="card-body-icon">
                                        <i className="fas fa-user-circle fa-fw" />
                                    </div>
                                    <div className="mr-5">26 Users!</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="users">
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
                                    <div className="mr-5">11 Lớp</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="quanlylop">
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
                                    <div className="mr-5">123 Góp ý</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="quanlygopy">
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
                                    <div className="mr-5">13 Thông báo</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="thongbao">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right">
                                        <i className="fas fa-angle-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Area Chart Example*/}
                    <div className="card mb-3">
                        <div className="card-header">
                            <i className="fas fa-chart-area" />
                            Area Chart Example</div>
                        <div className="card-body">
                            <canvas id="myAreaChart" width="100%" height="30"/>        
                        </div>
                        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                    </div>
                    {/* DataTables Example */}
                    <div className="card mb-3">
                        <div className="card-header">
                            <i className="fas fa-table" />
                            Data Table Example</div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                    <thead>
                                        <tr>
                                            <th>Họ tên</th>
                                            <th>Số điện thoại</th>
                                            <th>Địa chỉ</th>
                                            <th>Quyền</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>Shad Decker</td>
                                            <td>Regional Director</td>
                                            <td>Edinburgh</td>
                                            <td>51</td>
                                            <td>2008/11/13</td>
                                            <td>$183,000</td>
                                        </tr>
                                        <tr>
                                            <td>Michael Bruce</td>
                                            <td>Javascript Developer</td>
                                            <td>Singapore</td>
                                            <td>29</td>
                                            <td>2011/06/27</td>
                                            <td>$183,000</td>
                                        </tr>
                                        <tr>
                                            <td>Donna Snider</td>
                                            <td>Customer Support</td>
                                            <td>New York</td>
                                            <td>27</td>
                                            <td>2011/01/25</td>
                                            <td>$112,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;