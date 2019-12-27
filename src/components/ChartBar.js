import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import callApi from '../utils/apiCaller';

class ChartBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Số lượng lớp',
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
        callApi('classes/countDataChart', "GET", null).then(res => {
            chartData.datasets[0].data = res.data.result
            this.setState({chartData: chartData})
        })  
    }

    render() {
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <Bar
                        data={this.state.chartData}
                        options={
                            {
                                title: {
                                    display: true,
                                    text: 'Biểu đồ thống kê số lượng lớp năm 2019',
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

export default ChartBar;