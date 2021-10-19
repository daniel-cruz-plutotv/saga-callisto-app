// TYPES
import typeTypes from '../types/typeTypes';

interface ITypes {
  loading: boolean,
  error: boolean,
  types: any[]
}

// INITIAL STATE
const initial_state: ITypes = {
  loading: false,
  error: false,
  types: []
};

// REDUCER
const typeReducer = ( state = initial_state, action: any ) => {
  switch( action.type ) {
    case typeTypes.SET_TYPES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        types: [...state.types, action.payload]
      }
    }
    case typeTypes.CLEAN_TYPES: {
      return initial_state;
    }
    default: {
      return state;
    }
  }
};

export default typeReducer;