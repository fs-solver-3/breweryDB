import { connect } from 'react-redux';
import * as actionCreators from 'redux/registerUser/actionCreators';
import RegisterUser from './RegisterUser';

export default connect(({ registerUser }) => registerUser, actionCreators)(RegisterUser);
