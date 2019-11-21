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
import ChangePasswordPage from './pages/ChangePasswordPage';
import RegisterClassPage from './pages/RegisterClassPage';
import AccountPage from './pages/AccountPage';
import AccountTutorPage from './pages/AccountTutorPage';
import AccountTutorEditPage from './pages/AccountTutorEditPage';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  return <Route {...rest}
    render={(props) => {
      return isAuthenticated
        ? React.createElement(component, {...props})
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
      duration: 6,
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
                  <Route path="/class-list" component={ClassListPage}></Route>
                  <Route path="/tutor-fee" component={TutorFeePage}></Route>
                  <Route path="/signup" component={SignupPage}></Route>
                  <Route path="/login" component={LoginPage}></Route>
                  <Route path="/make-tutor" component={RegisterToMakeTutorPage}></Route>
                  {/* <Route path="/change-password" component={ChangePasswordPage}></Route> */}
                  <PrivateRoute 
                    path="/change-password"
                    component={ChangePasswordPage}
                    isAuthenticated = {isAuthenticated}/>
                  <PrivateRoute 
                    path="/account-gs"
                    component={AccountTutorPage}
                    isAuthenticated = {isAuthenticated}
                  />
                  <PrivateRoute 
                    path="/account-ph"
                    component={AccountPage}
                    isAuthenticated = {isAuthenticated}
                  />
                  <PrivateRoute 
                    path="/classs/:id/register"
                    component={RegisterClassPage}
                    isAuthenticated = {isAuthenticated}
                    />
                  <PrivateRoute 
                    path="/account/:id/edit"
                    component={AccountTutorEditPage}
                    isAuthenticated = {isAuthenticated}
                    />
                  
                  <PrivateRoute
                    path="/find-tutor"
                    component={RegisterToFindTuTorPage}
                    isAuthenticated={isAuthenticated}
                  />
                 <Route component={NotFoundPage}></Route>
                 
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
