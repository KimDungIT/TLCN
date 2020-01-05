import React, { Component } from "react";
import ClassList from "../components/ClassList";
import ClassItem from "../components/ClassItem";

import { actFetchClassesSuggestRequest } from "./../actions/index";
import { Pagination } from "antd";
import { connect } from "react-redux";

class ClassListSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
  componentDidMount() {
    let number = this.state.activePage - 1;
    this.props.onFetchClassSuggest(this.props.auth.user.idUser, number);
  }
  onChange = page => {
    console.log(page);
    this.setState({
      activePage: page
    });
    let number = page - 1;
    this.props.onFetchClassSuggest(this.props.auth.user.idUser, number);
  };
  render() {
    let {classSuggest} = this.props;
    let size = classSuggest.size;
    let totalElements = classSuggest.totalElements;
    let content = this.props.classSuggest.content;
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-lightbulb-o" style={{ marginLeft: "5px" }} />
            Lớp gợi ý cho bạn
          </div>
        </div>
        <ClassList>{this.showClasses(content)}</ClassList>
        {totalElements > 0 ? (
          <Pagination
            current={this.props.classSuggest.number + 1}
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
  showClasses(content) {
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
  }
}

const mapStateToProps = state => {
  return {
    classSuggest: state.classSuggest,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchClassSuggest: (idUser, number) => {
      dispatch(actFetchClassesSuggestRequest(idUser, number));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassListSearchPage);
