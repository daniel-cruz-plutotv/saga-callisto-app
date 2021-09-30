import typeTypes from '../types/typeTypes';

export const getTypeSuccess = (data: string) => ({
  type: typeTypes.SET_TYPES_SUCCESS,
  payload: data
});
