import {createStore} from 'redux'

const counterReducer = (state={counter: 0}, action:{type: string}) => {
  return state
}

const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState()
  console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'})