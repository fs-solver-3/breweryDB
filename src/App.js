import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { checkLoginStatus } from 'redux/actions/authActions';
import { setUserFromLocalStorage } from 'redux/userProfile/actionCreators';

import TeamMembers from 'containers/TeamMembers';
import GetOnTheMap from 'containers/GetOnTheMap';
import BuildTraffic from 'containers/BuildTraffic';
import Dashboard from 'containers/Dashboard';
import Locations from 'containers/Locations';
import Products from 'containers/Products';
import AddLocation from 'containers/Locations/AddLocation';
import EditLocation from 'containers/Locations/EditLocation';
import EditProducts from 'containers/Products/EditProduct';
import AddProducts from 'containers/Products/AddProduct';
import Login from 'containers/Login';
import UserProfile from 'containers/UserProfile';
import RegisteredUsers from 'containers/RegisteredUsers';
import RequestAccount from 'containers/RequestAccount';
import RegisterUser from './adminPortal/RegisterUser';
import Header from 'components/molecules/Header';
import PrivateRoute from 'components/PrivateRoute';
import './App.css';
import history from 'redux/history/history';

const PrivateRoutes = () => (
  <>
    <Header />
    <div>
      <Switch>
        <Route path="/get_on_the_map" component={GetOnTheMap} />
        <Route path="/team_members" component={TeamMembers} />
        <Route path="/locations/add" component={AddLocation} />
        <Route path="/locations/edit" component={EditLocation} />
        <Route path="/locations" component={Locations} />
        <Route path="/profile/:id" component={UserProfile} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/products/edit/:id" component={EditProducts} />
        <Route path="/build_traffic/:locationId" component={BuildTraffic} />
        <Route path="/products/add" component={AddProducts} />
        <Route path="/products" component={Products} />
        <Route path="/registered_users" component={RegisteredUsers} />
      </Switch>
    </div>
  </>
);

function App(props) {
  React.useEffect(() => {
    props.checkLoginStatus();
    props.setUserFromLocalStorage();
  }, []);

  return (
    <div>
      {!props.isLoginCheckInProgress && (
        <Router history={history}>
          <Switch>
            {/* {isLoggedIn ? (
              <PrivateRoute path="/" component={PrivateRoutes} authUser={isLoggedIn} />
            ) : (
              <>
                <Route exact path="/request_account" component={RequestAccount} />
                <Route path="/admin/register_user" component={RegisterUser} />
                <Route exact path="/login" component={Login} />
              </>
            )} */}
            <Route exact path="/request_account" component={RequestAccount} />
            <Route path="/admin/register_user" component={RegisterUser} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/" component={PrivateRoutes} authUser={props.isLoggedIn} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

App.propTypes = {
  checkLoginStatus: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isLoginCheckInProgress: PropTypes.bool,
  setUserFromLocalStorage: PropTypes.func,
};

export default connect(
  ({ authReucer }) => ({
    authUser: authReucer.loginStatus,
    checkingCurrent: authReucer.checkingCurrent,
    isLoggedIn: authReucer.isLoggedIn,
    isLoginCheckInProgress: authReucer.isLoginCheckInProgress,
  }),
  {
    checkLoginStatus,
    setUserFromLocalStorage,
  },
)(App);
