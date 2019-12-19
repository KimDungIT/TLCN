import React, { Component } from 'react';

const arr = ["./vendor/jquery/jquery.min.js","./vendor/chart.js/Chart.min.js", "./vendor/datatables/jquery.dataTables.js",
"./js/demo/datatables-demo.js","./vendor/datatables/dataTables.bootstrap4.js"]


class ClassRegisterList extends Component {
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
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Mã lớp</th>
                                <th>Lớp dạy</th>
                                <th>Mã gia sư</th>
                                <th>Ngày nhận lớp</th>
                                <th>Hình thức thanh toán</th>
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Mã lớp</th>
                                <th>Lớp dạy</th>
                                <th>Mã gia sư</th>
                                <th>Ngày nhận lớp</th>
                                <th>Hình thức thanh toán</th>
                                <th>Tác vụ</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ClassRegisterList;