import { BASE_URL } from '../../../utils/consts';
import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from './types';

export const userRequest = () => ({
  type: USER_REQUEST,
});

export const userSuccess = (data: Record<string, string>[]) => ({
  type: USER_SUCCESS,
  payload: { data },
});

export const userError = (error: any) => ({
  type: USER_ERROR,
  payload: { error },
});

export const asyncUserFetch = () => async (dispatch: any) => {
  dispatch(userRequest);
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    dispatch(userSuccess(data.results));
  } catch (error: any) {
    dispatch(userError(error.message));
  }
};
