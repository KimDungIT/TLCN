import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import MenuMain from './components/MenuMain';
import Banner from './components/Banner';
import Footer from './components/Footer';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PanelLeft from './components/PanelLeft';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <Logo />
          <MenuMain />
          <Banner />
          <div className="row" id="main">
                <PanelLeft />
                {this.showContentMenus(routes)}
            </div>
            <Footer />
        </div>
      </Router>
    );
  }

  showContentMenus = routes => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) =>{
        return(
          <Route 
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component = {route.main} />
        )
      })
    }
    return <Switch>{result}</Switch>;
  }
  
}

export default App;
