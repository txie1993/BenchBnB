import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT} from "../actions/session_actions";
import merge from 'lodash/merge';


const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, defaultState, {currentUser});
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, defaultState, {errors});
    case LOGOUT:
      return merge({}, defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
