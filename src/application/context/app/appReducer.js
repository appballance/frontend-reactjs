import { APP_ACTIONS } from "./constants";

const fns = {
  [APP_ACTIONS.SET_PATH]: (payload, state) => {
    const newState = { ...state };
    newState.path = payload.split("/")[1];
    return newState;
  },
  [APP_ACTIONS.SET_MESSAGE]: (message, state) => {
    const newState = {
      ...state,
    };
    newState.message = message;
    return newState;
  },
  [APP_ACTIONS.SET_IS_LOADING]: (payload, state) => {
    const { isLoading } = payload;
    const newState = {
      ...state,
      isLoading,
    };
    return newState;
  },
};

export default (state, action) => (fns[action.type] || (() => state))(action.payload, state);
