// AXIOS
import axiosConfig from '../../config/axios';

// GET REQUEST
export const getRequest = async (path: string) => {
  try {
    const resp = await axiosConfig.get(path);
    return resp;
  } catch( error ) {
    console.log( error );
    return [];
  }
}