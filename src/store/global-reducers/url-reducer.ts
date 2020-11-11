import { Dispatch } from "redux";

// ------------------------------------
// Constants
// ------------------------------------
export const SWITCH_NETWORK = "SWITCH_NETWORK";

// ------------------------------------
// Actions
// ------------------------------------

export const switchNet = (main: boolean) => (dispatch: Dispatch<any>) => {
  const url = main ? "api.etherscan.io" : "api-rinkeby.etherscan.io";
  dispatch({
    type: SWITCH_NETWORK,
    payload: url,
  });
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SWITCH_NETWORK]: (state: any, action: any) => ({
    ...state,
    network: action.payload,
  }),
};

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  network: "api.etherscan.io",
};

export default function listReducer(state = initialState, action: any) {
  if (action.error) return state;
  // @ts-ignore
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
