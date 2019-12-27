import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import callApi from '../utils/apiCaller';

class ChartPie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            chartData: {
                labels: ['Lớp mới', 'Đã giao', 'Chờ duyệt', 'Không đạt'],
                datasets: [
                    {
                        label: 'Lớp',
                        data: [],
                        backgroundColor: [
                            'rgba(54,162,235,0.6)',
                            'rgb(255, 99, 132, 0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(153,255,51,0.6)'                           
                        ]
                    }
                ]
            }
        }
    }
    componentDidMount() {
        var chartData = {...this.state.chartData}       
        callApi('classes/calPercentDataChart', "GET", null).then(res => {
            chartData.datasets[0].data = res.data.result
            this.setState({chartData: chartData})
        })  
    }

    render() {
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <Pie
                        data={this.state.chartData}
                        options={
                            {
                                title: {
                                    display: true,
                                    text: 'Biểu đồ tỷ lệ lớp' ,
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

export default ChartPie;