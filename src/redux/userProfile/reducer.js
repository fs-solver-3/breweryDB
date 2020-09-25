export const initialState = {
  fetching: false,
  userDetails: {},
  userList: [],
  error: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_DETAILS_PENDING': {
      return {
        ...state,
        fetching: true,
      };
    }

    case 'USER_DETAILS_FULFILLED':
      return {
        ...state,
        fetching: false,
        userDetails: action.payload.data,
      };

    case 'USER_DETAILS_REJECTED': {
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    }
    case 'USERS_LIST_PENDING': {
      return {
        ...state,
        fetching: true,
      };
    }

    case 'USERS_LIST_FULFILLED1':
      return {
        ...state,
        fetching: false,
        userList: action.payload.data.Users,
      };

    case 'USERS_LIST_REJECTED': {
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    }
    case 'FETCH_USER':
      return {
        ...state,
        userDetails: action.payload,
      };

    default:
      return state;
  }
}
