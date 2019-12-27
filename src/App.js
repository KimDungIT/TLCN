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
import StatusClassTutorRegisterPage from './pages/StatusClassTutorRegisterPage';
import PannelLeftParent from './components/PannelLeftParent';
import StatusClassParentRegisterPage from './pages/StatusClassParentRegisterPage';
import HomeParentPage from './pages/HomeParentPage';
import ClassListSearchPage from './pages/ClassListSearchPage';
import RegisterClassProcess from './pages/RegisterClassProcess';

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

  state = {idLabel: "all"};
  getIdLabel = () => {
   
  }
  render(){
    notification.config({
      duration: 5,
    });
    const {isAuthenticated} = this.props.auth;
    const { role } = this.props.auth.user;
    
    return (
      <Router>
        <div className="container">
          <Logo />
          <MenuMain />
          <Banner />
          <div className="row" id="main">
              {isAuthenticated && role === '[PHUHUYNH]'? <PannelLeftParent /> : <PanelLeft onClick={this.getIdLabel} />}
             
                <Switch>
                  <Route path="/" exact component={HomePage}></Route>
                  <Route path="/class-list" component={ClassListPage}></Route>
                  <Route path="/classes/:value" component={ClassListPage}></Route>
                  <Route path="/tutor-fee" component={TutorFeePage}></Route>
                  <Route path="/signup" component={SignupPage}></Route>
                  <Route path="/login" component={LoginPage}></Route>
                  <Route path="/make-tutor" component={RegisterToMakeTutorPage}></Route>
                  <Route path="/register-process" component={RegisterClassProcess}></Route>
                  <PrivateRoute 
                    path="/classes-suggest"
                    component={ClassListSearchPage}
                    isAuthenticated = {isAuthenticated}/>
                  <PrivateRoute 
                    path="/parent"
                    component={HomeParentPage}
                    isAuthenticated = {isAuthenticated}/>
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
                    path="/parent-classes"
                    component={StatusClassParentRegisterPage}
                    isAuthenticated = {isAuthenticated}
                  />
                  <PrivateRoute 
                    path="/class/:id/register"
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
                  <PrivateRoute
                    path="/tutor-classes"
                    component={StatusClassTutorRegisterPage}
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
