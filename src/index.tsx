import * as React from "react";
import * as ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { counterReducer } from "./store/counter/reducer";
import App from "./app";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
