import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import cookie from 'js-cookie';
import Nav from './components/Nav';
import Menu from './components/Menu';
import ClassListPage from './pages/ClassListPage';
import PrivateRoute from './route/PrivateRoute';
import ClassActionPage from './pages/ClassActionPage';
import {connect} from 'react-redux';
import ClassActionPageEdit from './pages/ClassActionPageEdit';
import ClassDetail from './pages/ClassDetail';
import ClassListPendingPage from './pages/ClassListPendingPage';
import ClassRegisterListPage from './pages/ClassRegisterListPage';
import ClassRegisterPage from './pages/ClassRegisterPage';
import UserListPage from './pages/UserListPage';
import UserActionPage from './pages/UserActionPage';
import UserEditPage from './pages/UserEditPage';
import ReportPage from './pages/ReportPage';

class App extends Component {
  render() {
    const token = cookie.get('token');
    const {loggedIn} = this.props;
    
    return (
      <Router>
        <div >
          {loggedIn ? <Nav/> : ''}
          <div id="wrapper">
            {loggedIn ? <Menu /> : ''}

            <Switch>                        
              <Route path="/login" component={LoginPage} />
              <PrivateRoute path='/' exact={true} component={HomePage} token={token} />
              <PrivateRoute path='/class-list' component={ClassListPage} token={token} />
              <PrivateRoute path='/class-add' component={ClassActionPage} token={token} history/>
              <PrivateRoute path='/class-edit/:id' component={ClassActionPageEdit} token={token} match history/>
              <PrivateRoute path='/class/:id' component={ClassDetail} token={token} match history/>
              <PrivateRoute path='/class-list-pending' component={ClassListPendingPage} token={token} match history/>
              <PrivateRoute path='/class-register-list' component={ClassRegisterListPage} token={token} match history/>
              <PrivateRoute path='/classRegister/:id' component={ClassRegisterPage} token={token} match history/>
              <PrivateRoute path='/user-list' component={UserListPage} token={token} />
              <PrivateRoute path='/user-add' component={UserActionPage} token={token} history/>
              <PrivateRoute path='/user-edit/:id' component={UserEditPage} token={token} history/>
              <PrivateRoute path='/report' component={ReportPage} token={token} history/>
            </Switch>
            {/* {loggedIn ? <Footer /> : ''} */}
          </div>
        </div>
      </Router>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
}

export default connect(mapStateToProps, null)(App);
