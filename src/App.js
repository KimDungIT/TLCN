import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import MenuMain from './components/MenuMain';
import Banner from './components/Banner';
import Footer from './components/Footer';
// import routes from './routes';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PanelLeft from './components/PanelLeft';
import {notification} from 'antd';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ClassListPage from './pages/ClassListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SigupPage';
import RegisterToFindTuTorPage from './pages/RegisterToFindTutorPage';
import RegisterToMakeTutorPage from './pages/RegisterToMakeTutorPage';
import TutorFeePage from './pages/TutorFeePage';

const PrivateRoute = ({ component, isAuthenticated }) => {
  return <Route
    render={props => {
      return isAuthenticated
        ? React.createElement(component, props)
        : <Redirect
          to='/login'
        />
    }
    }
  />
}

class App extends Component {
  
  render(){
    notification.config({
      duration: 3,
    });
    const {isAuthenticated} = this.props.auth;
    console.log(isAuthenticated);
    return (
      <Router>
        <div className="container">
          <Logo />
          <MenuMain />
          <Banner />
          <div className="row" id="main">
                <PanelLeft />
                <Switch>
                  <Route path="/" exact component={HomePage}></Route>
                  {/* <Route path="/find-tutor" component={RegisterToFindTuTorPage}></Route> */}
                  {/* <Route path="/make-tutor" component={RegisterToMakeTutorPage}></Route> */}
                  <Route path="/class-list" component={ClassListPage}></Route>
                  <Route path="/tutor-fee" component={TutorFeePage}></Route>
                  <Route path="/signup" component={SignupPage}></Route>
                  <Route path="/login" component={LoginPage}></Route>
                  <PrivateRoute
                    path="/find-tutor"
                    component={RegisterToFindTuTorPage}
                    isAuthenticated={isAuthenticated}
                  />
                  <PrivateRoute
                    path="/make-tutor"
                    component={RegisterToMakeTutorPage}
                    isAuthenticated={isAuthenticated}
                  />
                  {/* <Route component={NotFoundPage}></Route> */}
                 
                </Switch>
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state =>{
    return {
      auth : state.auth
    }
}

export default connect(mapStateToProps, null)(App);
