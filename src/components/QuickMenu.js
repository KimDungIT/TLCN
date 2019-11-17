import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class QuickMenu extends Component {
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
                                to='/find-tutor'>
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
                                to='/class-list'>Lớp dạy mới
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

export default QuickMenu;