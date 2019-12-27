import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { actSearchRequest } from "./../actions/index";
import { actFetchClassesRequest } from "./../actions/index";
import {actSearchInputRequest} from './../actions/index';
import { connect } from "react-redux";

class PanelLeft extends Component {
    handleOnClick = event => {
        let searchInfo = {
            classTeach: event.target.id,
            subject: "",
            district: ""
          };
        this.props.onSearch(searchInfo, 0);
        this.props.onSearchInput(searchInfo);
    }
    handleOnClickSubject = event => {
        let searchInfo = {
            classTeach: "",
            subject: event.target.id,
            district: ""
          };
        this.props.onSearch(searchInfo, 0);
        this.props.onSearchInput(searchInfo);
    }
    handleOnClickDistrict = event => {
        let searchInfo = {
            classTeach: "",
            subject: "",
            district: event.target.id
          };
        this.props.onSearch(searchInfo, 0);
        this.props.onSearchInput(searchInfo);
    }
    handleOnClickMore = () => {
        this.props.fetchAllClasses(0);
    }
    render() {
       
        return (
            <div className="col-lg-3 col-md-3 col-sm-3 mx-auto" id="col-left">
                <div id="left">
                    <div className="list-group">
                        <h4 className="widget-title">Lớp cần gia sư</h4>
                        <Link className="list-group-item" to='/classes/Lớp 1' id='Lớp 1' onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 1
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 2' id='Lớp 2'  onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 2
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 3' id="Lớp 3" onClick={this.handleOnClick}>
                            <i className="fa fa-play"
                                style={{ color: '#F28E11' }} />
                                Lớp 3
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 4' id="Lớp 4" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 4
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 5' id="Lớp 5" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 5
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 6' id="Lớp 6" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 6
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 7' id="Lớp 7" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 7
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 8' id="Lớp 8" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 8
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 9' id="Lớp 9" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 9
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 10' id="Lớp 10" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 10
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 11' id="Lớp 11" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 11
                        </Link>
                        <Link className="list-group-item" to='/classes/Lớp 12' id="Lớp 12" onClick={this.handleOnClick}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 12
                        </Link>
                        <h4 className="widget-title">Tìm lớp theo môn</h4>
                        <Link className="list-group-item" to='/classes/Toán' id="Toán" onClick={this.handleOnClickSubject}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Toán
                        </Link>
                        <Link className="list-group-item" to='/classes/Lý' id="Lý" onClick={this.handleOnClickSubject}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lý
                        </Link>
                        <Link className="list-group-item" to='/classes/Hoá' id="Hoá" onClick={this.handleOnClickSubject}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Hoá
                        </Link>
                        <Link className="list-group-item" to='/classes/Tiếng Anh' id="Tiếng Anh" onClick={this.handleOnClickSubject}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Tiếng Anh
                        </Link>
                        <h4 className="widget-title">Tìm lớp theo quận</h4>
                        <Link className="list-group-item" to='/classes/Quận 1' id="Quận 1" onClick={this.handleOnClickDistrict}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 1
                        </Link>
                        <Link className="list-group-item" to='/classes/Quận 2' id="Quận 2" onClick={this.handleOnClickDistrict}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 2
                        </Link>
                        <Link className="list-group-item" to='/classes/Quận 3' id="Quận 3" onClick={this.handleOnClickDistrict}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 3
                        </Link>
                        <Link className="list-group-item" to='/classes/Quận 4' id="Quận 4" onClick={this.handleOnClickDistrict}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 4
                        </Link>
                        <Link className="list-group-item" to='/classes/Quận 5' id="Quận 5" onClick={this.handleOnClickDistrict}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 5
                        </Link>
                        <Link className="list-group-item" to='/class-list'  onClick={this.handleOnClickMore}>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Xem thêm
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      classes: state.classes,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onSearch: (searchInfo, pageSearch) => {
        dispatch(actSearchRequest(searchInfo, pageSearch));
      },
      onSearchInput: (search) => {
        dispatch(actSearchInputRequest(search));
      },
      fetchAllClasses: page => {
        dispatch(actFetchClassesRequest(page));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PanelLeft);