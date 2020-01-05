import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {actSearchInputRequest} from './../actions/index';
import { connect } from "react-redux";

class QuickMenu extends Component {
    handleOnClick = () => {
        let searchInfo = {
          classTeach: "",
          subject: "",
          district: "",
          isSearch: false
        };
        this.props.onSearchInput(searchInfo);
    
    }
    render() {
        return (
            <div className="row menu-nhanh">
                <div className="col-sm-6" style={{ borderRight: 'solid 2px#fff470' }}>
                    <h3 className="tieude">Dành cho phụ huynh</h3>
                    <ul className="menu-phuhuynh">
                        <li>
                            <Link 
                                to = '/tutor-fee'>
                                Học phí gia sư
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to='/signup'>
                                Đăng ký tìm gia sư
                            </Link>
                        </li>
                    </ul>
                    <div className="bottom-lienhe">
                        <p className="lienhe">Phụ huynh liên hệ</p>
                        <p className="dtlienhe">0933160610</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h3 className="tieude">Dành cho gia sư</h3>
                    <ul className="menu-phuhuynh">
                        <li>
                            <Link 
                                to='/class-list' onClick={this.handleOnClick}>Lớp dạy mới
                            </Link>
                        </li>
                        <li>
                            <Link to='/make-tutor'>
                                Đăng ký làm gia sư
                            </Link>
                        </li>
                    </ul>
                    <div className="bottom-lienhe">
                        <p className="lienhe">Gia sư liên hệ</p>
                        <p className="dtlienhe">0974315184</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onSearchInput: (search) => {
        dispatch(actSearchInputRequest(search));
      },
    };
  };

export default connect(null, mapDispatchToProps)(QuickMenu);