import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from "./Reducers/rootReducer";

export const history = createBrowserHistory();
const middleware = [routerMiddleware(history), thunk];

export default function configureStore(preloadedState) {

const store = createStore(
  rootReducer(history),
  preloadedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

return store;
}
