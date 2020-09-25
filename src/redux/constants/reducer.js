export const initialState = {
  fetching: false,
  error: null,
  country_region: [],
  countries: [],
  successMessage: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COUNTRIES_PENDING':
      return {
        ...state,
        fetching: true,
        successMessage: null,
        error: null,
      };

    case 'GET_COUNTRY_REGION_FULFILLED':
      return {
        ...state,
        country_region: action.payload.data,
        fetching: false,
      };

    case 'COUNTRIES_FULFILLED':
      return {
        ...state,
        countries: action.payload.data,
        fetching: false,
      };

    case 'REGISTER_USER_REJECTED':
    case 'COUNTRIES_REJECTED':
      return {
        ...state,
        error: action.payload,
        fetching: false,
        successMessage: null,
      };

    default:
      return state;
  }
}
