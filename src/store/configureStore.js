import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
 //  return createStore(
 //   rootReducer,
 //   compose(
 //     applyMiddleware(thunk)
 //   ),initialState
 // )
}
 // export default compose(applyMiddleware(thunk))(createStore)(rootReducer);
// export default compose(applyMiddleware(thunk))(createStore)(rootReducer);
// export default configureStore = () => compose(applyMiddleware(thunk))(createStore)(rootReducer);
