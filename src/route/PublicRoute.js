import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';

const PublicRoute = ({ component, ...rest }) => {
  return <Route {...rest}
    render={(props) => {
      return rest.loggedIn === false
        ? React.createElement(component, {...props})
        : <Redirect
          to='/'
        />
    }
    }
  />
}
const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
}

export default connect(mapStateToProps, null)(PublicRoute);
