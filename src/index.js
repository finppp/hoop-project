import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import newActivityApp from './reducers/reducers'
import { Provider } from 'react-redux'
import { updateField } from './actions/actions'


//could use this to get state from localStorage
// const store = createStore(todoApp, window.STATE_FROM_SERVER)
//added redux tools
const store = createStore(newActivityApp ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
