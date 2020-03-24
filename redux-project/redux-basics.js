const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

//Reducer (Function that is executed then passed into the store)
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER'){
    return {
      ...state,
        counter: state.counter + 1
    };
  }
  if (action.type === 'ADD_COUNTER'){
    return {
      ...state,
        counter: state.counter + action.value
    };
  }
  return state;
};

//Store (GLOBAL Store for state variables)

const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscribe(() => {
  console.log('[Subscription', store.getState());
});

//Dispatching Action (Holds the data that is then passed to the reducer)
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
