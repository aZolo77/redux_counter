// {Store} coordinates work with Data in Redux
import { createStore, bindActionCreators } from 'redux';

// {Reducer} fn
import reducer from './reducer';

// {Action Creators}
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store; // binded to store by default

// bind {Actions Creators} to {Store.dispatch} func: [Action, Store.dispatch] ** arguments pass by default **
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// {subscribe} store on any changes
store.subscribe(() => {
  // show state
  console.log(store.getState());
});

// action processing
document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
  const randomNum = Math.ceil(Math.random() * 10);
  // pass parameters
  rnd(randomNum);
});

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);
