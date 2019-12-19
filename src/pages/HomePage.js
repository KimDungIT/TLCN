import React, { Component } from "react";
import QuickMenu from "../components/QuickMenu";
import FormSearch from "../components/FormSearch";
import ClassList from "../components/ClassList";
import { Link } from "react-router-dom";
import ClassItem from "../components/ClassItem";

import { actFetchClassesRequest } from "./../actions/index";
import { actSearchRequest } from "./../actions/index";
import { connect } from "react-redux";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
        input: null,
        classList: [],
    }
}
  componentDidMount() {
    this.props.fetchAllClasses();
  }
  onSave = search => {
    let id = 0;
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
      this.props.onSearch(searchInfo);
    }
  };

  render() {
    let { search } = this.props;
    let content = this.props.classes.content;
    var { isAuthenticated } = this.props.auth;
    if(search.content) {
      if( search.content.length > 0) {
        content = search.content;
      }
      else {
        content = [];
      }
  }
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        {!isAuthenticated ? <QuickMenu /> : ""}
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-graduation-cap" style={{ marginLeft: "5px" }} />
            Lớp dạy kèm mới
          </div>
        </div>
        <FormSearch onSearchClasses={this.onSave}/>
        <ClassList>{this.showClasses(content)}</ClassList>
        <div className="xemthem">
          <Link to="/class-list">
            <i className="fa fa-play" />
            Xem thêm...
          </Link>
        </div>
      </div>
    );
  }
  showClasses(content) {
    var result = null;
    if(content === undefined) {
      return;
    }
    if (content.length > 0) {
      result = content.map((classItem, index) => {
        return <ClassItem key={index} classItem={classItem} />;
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    classes: state.classes,
    auth: state.auth,
    search: state.search
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllClasses: () => {
      dispatch(actFetchClassesRequest());
    },
    onSearch: searchInfo => {
      dispatch(actSearchRequest(searchInfo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
