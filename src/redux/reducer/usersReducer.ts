import {
  UserActionType,
  USER_ERROR,
  USER_REQUEST,
  USER_SUCCESS,
} from '../actions/users/types';

export const INIT_STATE = {
  loading: false,
  data: <any>[],
  error: '',
};

export const usersReducer = (state = INIT_STATE, action: UserActionType) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.payload.data],
        error: '',
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
