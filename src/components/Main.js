import React, { Component } from 'react';
import PanelLeft from './PanelLeft';
import ContentRight from './ContentRight';

class Main extends Component {
    render() {
        return (
            <div className="row" id="main">
                <PanelLeft />
                <ContentRight />
            </div>
        );
    }
}

export default Main;