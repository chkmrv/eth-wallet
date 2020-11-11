import { Dispatch } from "redux";
import { Data } from "../../types";
import { apikey } from "utils";

const axios = require("axios");

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_BALANCE = "FETCH_BALANCE";
export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";

// ------------------------------------
// Actions
// ------------------------------------

export const fetchBalance = (address: any) => (
  dispatch: Dispatch<any>,
  getState: Data
) => {
  // @ts-ignore
  const state = getState();
  return (
    axios.get(`https://${state.url.network}/api?module=account&action=balance&address=${address}&apikey=${apikey}`)
      .then((response: any) => {
         let eth = state.eth;
         eth[address] = response.data;
            dispatch({
                type: FETCH_BALANCE,
                payload: eth,
            });
       })
      .catch((e: any) => console.log(e))
  )
};

export const fetchTransaction = (address: any) => (
  dispatch: Dispatch<any>,
  getState: Data
) => {
  // @ts-ignore
  const state = getState();
  return (
    axios.get(`https://${state.url.network}/api?module=account&action=txlist&sort=desc&address=${address}&apikey=${apikey}`)
    .then((response: any) => {
      let eth = state.eth;
      eth[address].transactions = response.data.result;
      dispatch({
        type: FETCH_TRANSACTIONS,
        payload: eth,
      });
    })
    .catch((e: any) => console.log(e))
  )
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_BALANCE]: (state: Data, action: any) => ({...state, ...action.payload,}),
  [FETCH_TRANSACTIONS]: (state: Data, action: any) => ({
    ...state,
    ...action.payload,
  }),
};

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {};

export default function listReducer(state = initialState, action: any) {
  if (action.error) return state;
  // @ts-ignore
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
