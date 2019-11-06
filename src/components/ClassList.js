import React, { Component } from 'react';

class ClassList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}

export default ClassList;