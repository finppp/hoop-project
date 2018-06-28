//No need to combine reducers

// import { combineReducers } from 'redux'
//   //import other reducers here
//
// export default combineReducers({
//   //imported reducers go here
// })

import { UPDATE_FIELD } from '../actions/actions';
import { OPEN_MODAL } from '../actions/actions';
import { CLOSE_MODAL } from '../actions/actions';
import { FETCH_ADDRESSES } from '../actions/actions';


const initialState = {
  fields:{},
  modalIsOpen: false,
  addresses: []
}

//this is an es6 default argument statment!
function newActivityApp(state = initialState, action) {

  switch (action.type){
    case "UPDATE_FIELD":
      //duplicates state as to not be a pointer
      return Object.assign({}, state, {
        fields: {
          //this copies all previous fields across.
          ...state.fields,
          [action.fieldToUpdate]: action.text
        }
      })

      case 'OPEN_MODAL':
      return Object.assign({}, state, {
        modalIsOpen: true
      })

      case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        modalIsOpen: false
      })

      case 'FETCH_ADDRESSES':
      return Object.assign({}, state, {
        addresses: action.addresses
      })

      default:
      return state
  }
  return state
}


export default newActivityApp
