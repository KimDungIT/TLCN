import React, { Component } from 'react';
import FormSearch from '../components/FormSearch';
import ClassList from '../components/ClassList';
import ClassItem from '../components/ClassItem';

class ClassListPage extends Component {
    render() {
        var classes = [];
        return (
            <div className="col-lg-9 col-md-9 col-sm-9">
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
                    <a href="https://github.com">
                        <i className="fa fa-play" />Xem thêm...
                    </a>
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
                )
            })
        }
        return result;
    }
}

export default ClassListPage;