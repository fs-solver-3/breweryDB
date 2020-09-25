import { connect } from 'react-redux';

import AddProduct from './AddProduct';

const mapStateToProps = ({ userProfile }) => {
  return {
    userDetails: userProfile.userDetails,
  };
};

export default connect(mapStateToProps)(AddProduct);
