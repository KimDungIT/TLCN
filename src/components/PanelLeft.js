import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PanelLeft extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-3 mx-auto" id="col-left">
                <div id="left">
                    <div className="list-group">
                        <h4 className="widget-title">Lớp cần gia sư</h4>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 1
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 2
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 3
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 4
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 5
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 6
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 7
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 8
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 9
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 10
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 11
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lớp 12
                        </Link>
                        <h4 className="widget-title">Tìm lớp theo môn</h4>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Toán
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Lý
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Hoá
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Tiếng Anh
                        </Link>
                        <h4 className="widget-title">Tìm lớp theo quận</h4>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 1
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 2
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 3
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 4
                        </Link>
                        <Link className="list-group-item" to='/class-list'>
                            <i className="fa fa-play" 
                                style={{ color: '#F28E11' }} />
                                Quận 5
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelLeft;