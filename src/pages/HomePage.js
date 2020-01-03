import React, { Component } from "react";
import QuickMenu from "../components/QuickMenu";
import ClassList from "../components/ClassList";
import { Link } from "react-router-dom";
import ClassItem from "../components/ClassItem";
import { actFetchClassesRequest } from "./../actions/index";
import { actFetchTopSixRequest } from "./../actions/index";
import callApi from "../utils/apiCaller";
import { connect } from "react-redux";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
        input: null,
        listClassTop: [],
    }
}
  componentDidMount() {
    this.props.fetchTopSixClass();
   //get list class top
    callApi('api/classes/top',
    "GET",
    null).then(res => {
        if(res.status === 200) {
          this.setState({
            listClassTop: res.data.result
          })
        }
      }
    ).catch(error => {
      console.log(error);
    });
  }

  handleOnClickMore = () => {
    this.props.fetchAllClasses(0);
  }

  render() {
    let content = this.props.classes;
    var { isAuthenticated } = this.props.auth;

    return (
      <div className="col-lg-9 col-md-9 col-sm-9">
        {!isAuthenticated ? <QuickMenu /> : ""}
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-book" style={{ marginLeft: "5px" }} />
            Lớp dạy kèm nổi bật
          </div>
        </div>
        <ClassList>{this.showClasses(this.state.listClassTop)}</ClassList>
        <div className="row">
          <div className="panel-heading">
            <i className="fa fa-graduation-cap" style={{ marginLeft: "5px" }} />
            Lớp dạy kèm mới
          </div>
        </div>
        <ClassList>{this.showClasses(content)}</ClassList>
        <div className="xemthem">
          <Link to="/class-list" onClick={this.handleOnClickMore}>
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
    classes: state.childClass,
    auth: state.auth,
    // search: state.search
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllClasses: page => {
      dispatch(actFetchClassesRequest(page));
    },
    fetchTopSixClass: () => {
      dispatch(actFetchTopSixRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
