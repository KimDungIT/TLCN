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
    var { match } = this.props;
    if (match) {
      var { value } = match.params;
      console.log("info: ", value);
    }
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
    let content = this.props.classes.content;
    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-lightbulb-o" style={{ marginLeft: "5px" }} />
            Lớp gợi ý cho bạn
          </div>
        </div>
        <ClassList>{this.showClasses(content)}</ClassList>
        <Pagination
          current={this.state.activePage}
          onChange={this.onChange}
          defaultPageSize={this.props.classes.size}
          total={this.props.classes.totalElements}
        />
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
    classes: state.classSuggest,
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
