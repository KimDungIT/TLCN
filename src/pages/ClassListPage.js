import React, { Component } from 'react';
import FormSearch from '../components/FormSearch';
import ClassList from '../components/ClassList';
import ClassItem from '../components/ClassItem';

import { actFetchClassesRequest } from './../actions/index';
import { actSearchByClassTeachRequest } from './../actions/index';
import { connect } from 'react-redux';
import { Pagination, Alert } from 'antd';

class ClassListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: null,
            activePage: 1,
        }
    }
    componentDidMount(){
        // var { match } = this.props;
        // if (match.params) {
        //     var {search} = match.params;
        //     this.setState({
        //         input: search
        //     })
        //     console.log("search: ", this.state.input);
        //     this.props.onSearchByClassTeach(search);
        // }
        let number = this.state.activePage - 1;
        
        this.props.fetchAllClasses(number);
        
        
        

    }
    // componentDidUpdate(){
    //     if(this.props.classes.content !== this.state.classList) {
    //         this.setState({
    //             classList: this.props.classes.content,
    //         })
    //     }
    // }
    onChange = page => {
        console.log(page);
        this.setState({
          activePage: page,
        });
        let number = page - 1;
        this.props.fetchAllClasses(number);
      };

    render() {
        let {keyword} = this.props;
        let  content = this.props.classes.content;
        let id = 0;
        if(this.props.keyword.keywordIdClass!=='' || this.props.keyword.keywordClass !=='' 
        || this.props.keyword.keywordSubject !=='' 
        || this.props.keyword.keywordDistrict !== '') {
            if(this.props.keyword.keywordIdClass!=='') {
                id = parseInt(this.props.keyword.keywordIdClass);
            }
            
            let searchInfo = {
                
                idClass: id,
                classTeach: this.props.keyword.keywordClass,
                subject: this.props.keyword.keywordSubject,
                district: this.props.keyword.keywordDistrict
            }
            console.log('search info: ', searchInfo);
        }
        //search
        // if(keyword.keywordClass !=='' || keyword.keywordSubject !=='' || keyword.keywordDistrict !== '') {
        //     if(this.props.classes.content && this.props.classes.content.length > 0){
        //         content = content.filter((classesInfo) => {
        //             return classesInfo.subject.toLowerCase() === (keyword.keywordSubject.toLowerCase()) && 
        //             classesInfo.classTeach.toLowerCase() === (keyword.keywordClass.toLowerCase()) &&
        //             classesInfo.district.toLowerCase() === (keyword.keywordDistrict.toLowerCase());
        //         })
        //     }
        // }
        
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
                    {this.showClasses(content)}
                </ClassList> 
                <Pagination 
                    current={this.state.activePage} 
                    onChange={this.onChange} 
                    defaultPageSize= {this.props.classes.size}
                    total={this.props.classes.totalElements} 
                />
               
            </div>
        );
    }
    showClasses = (content) => {
        var result = null;
        if(content === undefined) {
            return;
        }
        if(content.length > 0){
            result = content.map((classItem, index) =>{
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
        classes: state.classes,
        keyword: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllClasses : (page) => {
            dispatch(actFetchClassesRequest(page));
        },
        // onSearchByClassTeach : (searchInput) => {
        //     dispatch(actSearchByClassTeachRequest(searchInput));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);