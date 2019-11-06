import React, { Component } from 'react';
import QuickMenu from '../components/QuickMenu';
import FormSearch from '../components/FormSearch';
import ClassList from '../components/ClassList';
import {Link} from 'react-router-dom';
import ClassItem from '../components/ClassItem';

import { actFetchClassesRequest } from './../actions/index';
import { connect } from 'react-redux';

class HomePage extends Component {
    componentDidMount(){
        this.props.fetchAllClasses();
    }
    render() {
        var classes = this.props.classes;
        return (
            
            <div className="col-lg-9 col-md-9 col-sm-9">
                <QuickMenu />
                <div className="row">
                    <div className="panel-heading">
                        <i className="fa fa-graduation-cap" 
                            style={{ marginLeft: '5px' }} />
                            Lớp dạy kèm mới
                    </div>
                </div>
                <FormSearch />
                <ClassList>
                    {this.showClasses(classes)}
                </ClassList>
                <div className="xemthem">
                    <Link to='/class-list'>
                        <i className="fa fa-play" />Xem thêm...
                    </Link>
                </div>
                
            </div>
        );
        
    }
    showClasses(classes) {
        var result = null;
        if(classes.length > 0){
            result = classes.map((classItem, index) =>{
                return (
                    <ClassItem
                     key = { index }
                     classItem = {classItem}/>
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllClasses : () => {
            dispatch(actFetchClassesRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);