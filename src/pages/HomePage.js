import React, { Component } from 'react';
import ChartBar from '../components/ChartBar';
import ChartPie from '../components/ChartPie';
import Overview from '../components/Overview';

class HomePage extends Component {
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
                    <Overview />

                    {/* Area Chart Example*/}
                    
                    <div className="row ">
                        <div className="col-md-7">
                            <ChartBar />
                        </div>
                        <div className="col-md-5">
                            <ChartPie />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;