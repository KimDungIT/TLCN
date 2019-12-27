import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PannelLeftParent extends Component {
      render() {
            return (
                  <div className="col-lg-3 col-md-3 col-sm-3 mx-auto" id="col-left">
                  <div id="left">
                      <div className="list-group">
                          <h4 className="widget-title">Dành cho phụ huynh</h4>
                          <Link className="list-group-item" to='/find-tutor'>
                              <i className="fa fa-play" 
                                  style={{ color: '#F28E11' }} />
                                  Đăng ký tìm gia sư
                          </Link>
                          <Link className="list-group-item" to='/parent-classes'>
                              <i className="fa fa-play" 
                                  style={{ color: '#F28E11' }} />
                                  Lớp đã đăng
                          </Link>
                         
                          <Link className="list-group-item" to='/tutor-fee'>
                              <i className="fa fa-play" 
                                  style={{ color: '#F28E11' }} />
                                  Học phí gia sư
                          </Link>
                          <Link className="list-group-item" to='/change-password'>
                              <i className="fa fa-play" 
                                  style={{ color: '#F28E11' }} />
                                  Đổi mật khẩu
                          </Link>
                      </div>
                  </div>
              </div>
            );
      }
}

export default PannelLeftParent;