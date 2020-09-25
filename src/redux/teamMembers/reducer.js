import * as actions from './actions';

export const initialState = {
  fetching: false,
  members: [],
  error: {},
  errorInMemberDeletion: null,
  memberDeletionInProgress: false,
  memberDeletionSuccess: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.MEMBERS_LIST_PENDING: {
      return {
        ...state,
        fetching: true,
      };
    }

    case actions.MEMBERS_LIST_FULFILLED:
      return {
        ...state,
        fetching: false,
        members: action.payload.data.Users,
      };

    case actions.MEMBERS_LIST_REJECTED: {
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    }

    case actions.DELETE_MEMBER_PENDING:
      return {
        ...state,
        memberDeletionInProgress: true
      };

    case actions.DELETE_MEMBER_FULFILLED:
      return {
        ...state,
        memberDeletionInProgress: false,
        memberDeletionSuccess: action.payload.data.Message
      };

    case actions.DELETE_MEMBER_REJECTED:
      return {
        ...state,
        errorInMemberDeletion: action.payload,
        memberDeletionInProgress: false,
        memberDeletionSuccess: false
      };

    case actions.RESET_MEMBER_DELETION_DATA:
      return {
        ...state,
        errorInMemberDeletion: null,
        memberDeletionInProgress: false,
        memberDeletionSuccess: false
      };

    default:
      return state;
  }
}
