import {
  GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL, POST_DATA, POST_DATA_SUCCESS,
  POST_DATA_FAIL
} from './type'
import { NavigationActions } from 'react-navigation';


export default function reducer(state = { result: null }, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: true, result:null, error: false};
    case GET_DATA_SUCCESS:
      console.log('reducer action.payload: ' + JSON.stringify(action.payload));
      return { ...state, loading: false, result: action.payload.data, error:false};
    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        result: null,
        error: true
      };

    case POST_DATA:
      return { ...state, loading: true, result:null, error:false };
    case POST_DATA_SUCCESS:
      return { ...state, loading: false, result: { status: 'success', responseData: action.payload.data}, error:false};
    case POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        result: null,
        error: true,
      };

    default:
      return state;
  }
}