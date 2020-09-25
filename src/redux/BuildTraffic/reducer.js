import * as actions from './actions';

const initialState = {
  fetching: false,
  addBuildTraffic: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TRAFFIC_REQ:
      return {
        ...state,
        fetching: true,
      };

    case actions.ADD_TRAFFIC_SUCCESS:
      return {
        ...state,
        fetching: false,
        addBuildTraffic: action.payload,
      };

    case actions.ADD_TRAFFIC_ERROR:
      return {
        ...state,
        fetching: false,
        addBuildTraffic: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
