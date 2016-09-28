// ./store.js
import {
  createStore,
  applyMiddleware
} from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';

const initialUserState = {
  firstName: '',
  lastName: '',
  email: ''
};

let devToolsMiddleWare = window.devToolsExtension && window.devToolsExtension();
let thunkMiddleWare = applyMiddleware(thunk);

const store = createStore(combineForms({
  user: initialUserState,
}), devToolsMiddleWare, thunkMiddleWare);

export default store;
