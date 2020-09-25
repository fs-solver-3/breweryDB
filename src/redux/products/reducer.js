import * as actions from './actions';

export const initialState = {
  fetching: false,
  product: [],
  error: {},
  filters: {
    page: 1,
    rpp: 20,
    search: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.PRODUCTS_LIST_PENDING: {
      return {
        ...state,
        fetching: true,
      };
    }

    case actions.PRODUCTS_LIST_FULFILLED:
      return {
        ...state,
        fetching: false,
        product: action.payload,
      };

    case actions.PRODUCTS_LIST_REJECTED: {
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
