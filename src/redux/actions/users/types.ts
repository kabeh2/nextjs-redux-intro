export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export type UserReduxTypes =
  | typeof USER_REQUEST
  | typeof USER_SUCCESS
  | typeof USER_ERROR;

export type UserActionType = {
  type: UserReduxTypes;
  payload?: any;
};
