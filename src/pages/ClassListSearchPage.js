import React, { Component } from 'react';
import FormSearch from '../components/FormSearch';
import ClassList from '../components/ClassList';
import ClassItem from '../components/ClassItem';

//import { actSearchByClassTeachRequest } from './../actions/index';
import { connect } from 'react-redux';

class ClassListSearchPage extends Component {
   
    componentDidMount(){
        var { match } = this.props;
        if (match) {
            var {value} = match.params;
            console.log("info: ", value);
            //this.props.onSearchByClassTeach(search);
        }
    }
    render() {
        var classes = this.props.classes;
        console.log("class:", classes);
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

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        
        // onSearchByClassTeach : (searchInput) => {
        //     dispatch(actSearchByClassTeachRequest(searchInput));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassListSearchPage);