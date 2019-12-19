import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class FormSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtId: '',
            selectClass: '',
            selectSubject: '',
            selectDistrict: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var {txtId, selectClass, selectSubject, selectDistrict} = this.state;
        let search = {
            keywordIdClass: txtId, 
            keywordClass: selectClass,
            keywordSubject: selectSubject,
            keywordDistrict: selectDistrict
        }
        this.props.onSearch(search);
    }
    render() {
        return (
            <div className="row">
                <form className="form-search" onSubmit = {this.onSave}>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control form-control-sm" 
                            id="exampleInputEmail1" 
                            name = 'txtId'
                            onChange = {this.onChange}
                            placeholder="Nhập mã lớp và tìm kiếm..." />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <select id="lop" name = 'selectClass' onChange = {this.onChange} className="form-control">
                                <option value="">...Chọn lớp...</option>
                                <option value="Lớp 1">Lớp 1</option>
                                <option value="Lớp 2">Lớp 2</option>
                                <option value="Lớp 3">Lớp 3</option>
                                <option value="Lớp 4">Lớp 4</option>
                                <option value="Lớp 5">Lớp 5</option>
                                <option value="Lớp 6">Lớp 6</option>
                                <option value="Lớp 7">Lớp 7</option>
                                <option value="Lớp 8">Lớp 8</option>
                                <option value="Lớp 9">Lớp 9</option>
                                <option value="Lớp 10">Lớp 10</option>
                                <option value="Lớp 11">Lớp 11</option>
                                <option value="Lớp 12">Lớp 12</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <select id="mon" className="form-control" name = 'selectSubject' onChange = {this.onChange}>
                                <option value="">...Chọn môn học...</option>
                                <option value="Toán">Toán</option>
                                <option value="Lý">Lý</option>
                                <option value="Hóa">Hóa</option>
                                <option value="Văn">Văn</option>
                                <option value="Tiếng Anh">Tiếng Anh</option>
                                <option value="Sinh">Sinh</option>
                                <option value="Sử">Sử</option>
                                <option value="Địa">Địa</option>
                                <option value="Báo bài">Báo bài</option>
                                <option value="Tiếng Việt">Tiếng Việt</option>
                                <option value="Tin học">Tin học</option>
                                <option value="Vẽ">Vẽ</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <select id="mon" className="form-control" name = 'selectDistrict' onChange = {this.onChange}>
                                <option value="">...Chọn quận...</option>
                                <option value="Quận 1">Quận 1</option>
                                <option value="Quận 2">Quận 2</option>
                                <option value="Quận 3">Quận 3</option>
                                <option value="Quận 4">Quận 4</option>
                                <option value="Quận 5">Quận 5</option>
                                <option value="Quận 6">Quận 6</option>
                                <option value="Quận 7">Quận 7</option>
                                <option value="Quận 8">Quận 8</option>
                                <option value="Quận 9">Quận 9</option>
                                <option value="Quận 10">Quận 10</option>
                                <option value="Quận 11">Quận 11</option>
                                <option value="Quận 12">Quận 12</option>
                                <option value="Quận Thủ Đức">Quận Thủ Đức</option>
                                <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
                                <option value="Quận Tân Bình">Quận Tân Bình</option>
                                <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <button 
                                type="submit" 
                                name="submit" 
                                className="btn btn-primary" 
                                style={{ width: '100%' }}>
                                    Tìm kiếm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch : (search) => {
            dispatch(actions.searchClass(search));
        }
    }
}

export default connect(null, mapDispatchToProps)(FormSearch);