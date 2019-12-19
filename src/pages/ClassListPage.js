import React, { Component } from "react";
import FormSearch from "../components/FormSearch";
import ClassList from "../components/ClassList";
import ClassItem from "../components/ClassItem";

import { actFetchClassesRequest } from "./../actions/index";
import { actSearchRequest } from "./../actions/index";
import { connect } from "react-redux";
import { Pagination } from "antd";

class ClassListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      idClass: 0,
      classTeach: '',
      subject: '',
      district: ''
    };
  }
  componentDidMount() {
    let number = this.state.activePage - 1;
    this.props.fetchAllClasses(number);
    var { match } = this.props;
    console.log("ma: ", match);
    if (match) {
      var { value } = match.params;
      console.log("info: ", value);
      
    }
  }
  onSave = search => {
    let id = 0;
    let number = this.state.activePage - 1;
    if (
      search.keywordIdClass !== "" ||
      search.keywordClass !== "" ||
      search.keywordSubject !== "" ||
      search.keywordDistrict !== ""
    ) {
      if (search.keywordIdClass !== "") {
        id = parseInt(search.keywordIdClass);
      }
      let searchInfo = {
        idClass: id,
        classTeach: search.keywordClass,
        subject: search.keywordSubject,
        district: search.keywordDistrict
      };
      this.props.onSearch(searchInfo, number);
    }
  };
  onChange = page => {
    console.log(page);
    this.setState({
      activePage: page
    });
    let number = page - 1;
    this.props.fetchAllClasses(number);
    let id = 0;
    let {search} = this.props;
    if (
      search.keywordIdClass !== "" ||
      search.keywordClass !== "" ||
      search.keywordSubject !== "" ||
      search.keywordDistrict !== ""
    ) {
      if (search.keywordIdClass !== "") {
        id = parseInt(search.keywordIdClass);
      }
      let searchInfo = {
        idClass: id,
        classTeach: search.keywordClass,
        subject: search.keywordSubject,
        district: search.keywordDistrict
      };
      this.props.onSearch(searchInfo, number);
    }

  };

  render() {
    let { search } = this.props;
    let { classes } = this.props;
    let size = classes.size;
    let totalElements = classes.totalElements;
    let content = this.props.classes.content;
    if (search.content) {
      size = search.size;
      totalElements = search.totalElements;
      if (search.content.length > 0) {
        content = search.content;
      } else {
        content = [];
      }
    }
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);
