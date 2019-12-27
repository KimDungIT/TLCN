import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import callApi from '../utils/apiCaller';

class ServiceFeeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'VNĐ',
                        data: [],
                        backgroundColor: [
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(54,162,235,0.6)'
                        ]
                    }
                ]
            }
        }
    }

    componentDidMount() {
        var chartData = {...this.state.chartData}       
        callApi('invoices/serviceFee', "GET", null).then(res => {
            chartData.datasets[0].data = res.data.result
            this.setState({chartData: chartData})
        })  
    }

    render() {
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <Line
                        width={70}
                        height={25}
                        data={this.state.chartData}
                        options={
                            {
                                title: {
                                    display: true,
                                    text: 'Biểu đồ thống kê doanh thu theo tháng',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }
                            }
                        }
                    />
                </div>
            </div>
        );
    }
}

export default ServiceFeeChart;