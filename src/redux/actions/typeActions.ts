import typeTypes from '../types/typeTypes';

export const getTypeSuccess = (data: string) => ({
  type: typeTypes.SET_TYPES_SUCCESS,
  payload: data
});

export const cleanTypes = () => ({
  type: typeTypes.CLEAN_TYPES,
});