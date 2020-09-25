export const initialState = {
  fetching: false,
  product: [],
  error: {},
  successMsg: null,
  filters: {
    page: 1,
    rpp: 20,
    search: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ACCOUNT_PENDING':
      return {
        ...state,
        fetching: true,
        successMsg: null,
      };

    case 'REQUEST_ACCOUNT_FULFILLED':
      return {
        ...state,
        fetching: false,
        product: action.payload,
        successMsg: 'Data created successfully',
      };

    case 'REQUEST_ACCOUNT_REJECTED':
      return {
        ...state,
        error: action.payload,
        fetching: false,
        successMsg: null,
      };

    default:
      return state;
  }
}
