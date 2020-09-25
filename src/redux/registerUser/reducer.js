export const initialState = {
  fetching: false,
  error: null,
  successMessage: null,
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_USER_PENDING':
      return {
        ...state,
        fetching: true,
        successMessage: null,
        error: null,
      };

    case 'REGISTER_USER_FULFILLED':
      return {
        ...state,
        ...action.payload,
        successMessage: 'user registered successfully',
        fetching: false,
      };

    case 'GET_REGISTERED_USERS_FULFILLED':
      return {
        ...state,
        users: action.payload.data.Items,
        fetching: false,
      };

    case 'REGISTER_USER_REJECTED':
    case 'GET_REGISTERED_USERS_REJECTED':
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
