import { combineReducers } from 'redux';
import products from './products/reducer';
import dataReducer from './reducers/dataReducer';
import authReducer from './reducers/authReducer';
import registerUser from './registerUser/reducer';
import requestAccount from './requestAccount/reducer';
import userProfile from './userProfile/reducer';
import constants from './constants/reducer';
import locations from './locations/reducer';
import teamMembers from './teamMembers/reducer';
import buildTraffic from './BuildTraffic/reducer';

const rootReducer = combineReducers({
  authReucer: authReducer,
  products,
  dataReducer,
  registerUser,
  requestAccount,
  userProfile,
  constants,
  locations,
  teamMembers,
  buildTraffic,
});

export default rootReducer;
