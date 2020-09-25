import Locations from './Locations';
import { connect } from 'react-redux';
import { locationsList } from 'redux/locations/actionCreators';

export default connect(
    ({  locations, userProfile }) => ({
      locations:locations,
      userDetails: userProfile.userDetails,
    }),
    { locationsList },
  )(Locations);
