import {GET_DATA, POST_DATA} from './type'

export function getUsers() {
    return {
      type: GET_DATA,
      payload: {
        request: {
          url: '/api/users'
        }
      }
    };
  }
  
  
  export function getResources() {
    return {
      type: GET_DATA,
      payload: {
        request: {
          url: '/api/unknown'
        }
      }
    };
  }
  
  export function createUser(user) {
    return {
      type: POST_DATA,
      payload: {
        request: {
          url: '/api/users',
          method: 'POST',
          data: {
            name: user.name,
            job: user.job
          }
        }
      }
  
    };
  }
  
