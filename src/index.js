import counter from './counter';
// import { createStore } from 'redux';
import createStore from './customStore';

// console.log(counter(1, 'INCREMENT'));
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})