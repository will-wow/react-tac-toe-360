import * as React from "react";
import thunk from "redux-thunk";
import {
  applyMiddleware,
  compose,
  createStore,
  Store,
  StoreEnhancer
} from "redux";
import { connect } from "react-redux";
import reducers from "./reducers";

declare global {
  interface Window {
    devToolsExtension: () => StoreEnhancer;
  }
}

// To handle typing issues with splat args.
const connectAny: any = connect;

const configureStore = (initialState = {}): Store => {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};

export const store = configureStore();

/**
 * Like connect, but connect to the global store.
 */
export const connectWithStore = (...args: any[]) => (
  WrappedComponent: React.ComponentType
) => {
  const ConnectedWrappedComponent = connectAny(...args)(WrappedComponent);
  return props => {
    return <ConnectedWrappedComponent {...props} store={store} />;
  };
};
