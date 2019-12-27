import React, { Component } from "react";
import FormSearch from "../components/FormSearch";
import ClassList from "../components/ClassList";
import ClassItem from "../components/ClassItem";

import { actFetchClassesRequest } from "./../actions/index";
import {actFetchClassesByClassRequest}from "./../actions/index";
import { actSearchRequest } from "./../actions/index";
import { connect } from "react-redux";
import { Pagination } from "antd";

class ClassListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      idClass: 0,
      value: "all"
    };
  }
  componentDidMount() {
    let number = this.state.activePage - 1;
    this.props.fetchAllClasses(number);
  }
  onSave = (search, check) => {
    console.log("check: ", check);
    let number = this.state.activePage - 1;
    if (
      search.classTeach !== "" ||
      search.subject !== "" ||
      search.district !== ""
    ) {
      let searchInfo = {
        classTeach: search.classTeach,
        subject: search.subject,
        district: search.district
      };
      this.props.onSearch(searchInfo, number);
    }
  };
  onChange = page => {
    console.log(page);
    this.setState({
      activePage: page,
    });
    let number = page - 1;
    if (
      this.props.search.classTeach !== "" ||
      this.props.search.subject !== "" ||
      this.props.search.district !== ""
    ) {
      this.props.onSearch(this.props.search, number);
    }
    else {
      this.props.fetchAllClasses(number);
    }
  };

  render() {
    let { classes } = this.props;
    let size = classes.size;
    let totalElements = classes.totalElements;
    let content = this.props.classes.content;
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-graduation-cap" style={{ marginLeft: "5px" }} />
            Lớp dạy kèm mới
          </div>
        </div>
        <FormSearch onSearchClasses={this.onSave} />
        <ClassList>{this.showClasses(content)}</ClassList>
        {totalElements > 0 ? (
          <Pagination
            current={this.state.activePage}
            onChange={this.onChange}
            defaultPageSize={size}
            total={totalElements}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
  showClasses = content => {
    var result = null;
    if (content === undefined) {
      return;
    }
    if (content.length > 0) {
      result = content.map((classItem, index) => {
        return <ClassItem key={index} classItem={classItem} />;
      });
    }
    return result;
  };
}

const mapStateToProps = state => {
  return {
    classes: state.classes,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllClasses: page => {
      dispatch(actFetchClassesRequest(page));
    },
    onSearch: (searchInfo, pageSearch) => {
      dispatch(actSearchRequest(searchInfo, pageSearch));
    },
    onFetchClassesByClassTeach: (classTeach, page) => {
      dispatch(actFetchClassesByClassRequest(classTeach, page))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);
