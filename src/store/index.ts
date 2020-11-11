import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

function configureStore(initialState: any = {}) {
  const middleware = [thunk];

  const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(
    reducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
// @ts-ignore
const index = configureStore(window.REDUX_INITIAL_DATA);

export default index;
