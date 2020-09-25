import * as actions from './actions';

export const initialState = {
  fetching: false,
  location: [],
  error: {},
  filters: {
    page: 1,
    rpp: 20,
    search: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOCATIONS_LIST_PENDING: {
      return {
        ...state,
        fetching: true,
      };
    }

    case actions.LOCATIONS_LIST_FULFILLED:
      return {
        ...state,
        fetching: false,
        location: action.payload,
      };

    case actions.LOCATIONS_LIST_REJECTED: {
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    }

    default:
      return state;
  }
}
