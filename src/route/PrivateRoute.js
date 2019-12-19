import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';

const PrivateRoute = ({ component, token, ...rest }) => {
  return <Route {...rest}
    render={(props) => {
      if (rest.loggedIn === true){
        return React.createElement(component, {...props})
      }
      else if(!token){
        return <Redirect to='/login'/>
      }
    }
    }
  />
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);