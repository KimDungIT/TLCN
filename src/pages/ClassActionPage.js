import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import callApi from './../utils/apiCaller';
import {actAddClassRequest} from './../actions/index';
import {connect} from 'react-redux';

class ClassActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            idClass: null,
            classTeach: '',
            subject: '',
            timeTeach: '',
            address: '',
            salary: null,
            serviceFee: 0.25,
            genderRequirement: 'Không yêu cầu',
            levelRequirement: 'Không yêu cầu',
            status: 'Lớp mới',
            statusParent: 'old'
        }
    }
    
    render() {
        return (
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Thêm lớp mới</li>
                    </ol>
                    <div className="card mb-3">
                        <div className="card-body">
                            <form onSubmit={this.onSave}>
                                <Step1
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    
                                />
                                <Step2
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    statusParent={this.state.statusParent}
                                />                            
                                {this.previousButton()}
                                {this.nextButton()}
                            </form>                           
                        </div>
                    </div>


                </div>
            </div>
        );
    }
    

    onSave = (e) => {
        e.preventDefault();
        var {history} = this.props;
        var statusParent = this.state.statusParent;
        
        var dataClass = {
            idClass: this.state.idClass,
            classTeach: this.state.classTeach,
            subject: this.state.subject,
            timeTeach: this.state.timeTeach,
            address: this.state.address,
            salary: this.state.salary,
            serviceFee: this.state.serviceFee,
            genderRequirement: this.state.genderRequirement,
            levelRequirement: this.state.levelRequirement,
            status: this.state.status
        }
        var phoneParent = this.state.phoneParent;
        if(statusParent === 'old'){
            this.props.onAddClass(dataClass, phoneParent);
            history.goBack();
        }else if(statusParent === 'new'){
            
            var dataParent = {
                name: this.state.nameParent,
                phone: this.state.phoneParent,
                address: this.state.addressParent,
                email: this.state.emailParent,
                password: this.state.phoneParent
            }
            callApi('users?type=PHUHUYNH',
                'POST', dataParent
            ).then(res => {
                this.props.onAddClass(dataClass, phoneParent);
                history.goBack();
            });
        }
        
    }
    
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 2) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null;
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddClass: (classs, phoneParent) => {
            dispatch(actAddClassRequest(classs, phoneParent));
        }
    }
}

export default connect(null, mapDispatchToProps)(ClassActionPage);