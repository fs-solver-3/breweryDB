import { connect } from 'react-redux';
import { getCountries, getRegion } from 'redux/constants/actionCreators';
import { postRequestAccount } from 'redux/requestAccount/actionCreators';
import RequestAccount from './RequestAccount';
import './style.css';

const mapStateToProps = ({ requestAccount, authReucer }) => {
  return {
    requestAccount,
    isLoggedIn: authReucer.isLoggedIn,
  };
};

export default connect(mapStateToProps, {
  getCountries,
  getRegion,
  postRequestAccount,
})(RequestAccount);
