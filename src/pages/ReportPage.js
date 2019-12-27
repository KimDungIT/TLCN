import React, { Component } from 'react';
import ServiceFeeChart from '../components/ServiceFeeChart';
import InvoiceList from '../components/InvoiceList';
import InvoiceItem from '../components/InvoiceItem';
import { connect } from 'react-redux';
import { actFetchClassRegisterRequest } from './../actions/index';

class ReportPage extends Component {
    componentDidMount() {
        this.props.fetchAllClassRegister();
    }
    render() {
        var { classRegister } = this.props;
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Thống kê nhận lớp</li>
                    </ol>
                    <ServiceFeeChart />
                    <div className="card mt-60" >
                        <div className="card-header">
                            <i className="fas fa-table" />
                            <span>Thống kê nhận lớp</span>
                        </div>
                        <InvoiceList>
                            {this.showInvoices(classRegister)}
                        </InvoiceList>
                    </div>
                </div>
            </div>

        );
    }
    showInvoices(classRegister) {
        var result = null;
        if (classRegister.length > 0) {
            result = classRegister.map((classRegisteritem, index) => {
                return (
                    <InvoiceItem
                        key={index}
                        classRegisteritem={classRegisteritem}
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
        classRegister: state.classRegister
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllClassRegister: () => {
            dispatch(actFetchClassRegisterRequest());
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);