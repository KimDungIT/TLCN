import React, { Component } from 'react';
import QuickMenu from '../components/QuickMenu';
import FormSearch from '../components/FormSearch';
import ClassList from '../components/ClassList';

class HomePage extends Component {
    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-9">
                <QuickMenu />
                <div className="row">
                    <div className="panel-heading">
                        <i className="fa fa-graduation-cap" 
                            style={{ marginLeft: '5px' }} />
                            Lớp dạy kèm mới
                    </div>
                </div>
                <FormSearch />
                <ClassList />
                <ClassList />
                <div className="xemthem">
                    <a href="https://github.com">
                        <i className="fa fa-play" />Xem thêm...
                    </a>
                </div>
                
            </div>
        );
    }
}

export default HomePage;