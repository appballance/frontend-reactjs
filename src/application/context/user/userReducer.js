import { USER_ACTIONS } from "./constants";

const setID = (id, state) => ({ ...state, id });

const refreshUser = (user, state) => {
  const newState = {
    ...state,
  };
  newState.user = user;
  return newState;
};

const loadResult = (payload, state) => {
  const newState = { ...state, ...{ list: { ...payload } } };
  return newState;
};

const setLoading = (payload, state) => {
  const newState = { ...state };
  newState[payload.subject].loading = payload.active;
  return newState;
};

const listStatus = (payload, state) => {
  const newState = { ...state, listStatus: payload };
  return newState;
};

const loadingStatus = (payload, state) => {
  const newState = { ...state, loadingStatus: payload };
  return newState;
};

const loadUserData = (payload, state) => {
  const newState = { ...state };
  newState.userData.data = payload;

  return newState;
};

const setFilters = (payload, state) => {
  const newState = { ...state, filters: payload };
  return newState;
};

export const UserReducer = (state, action) => {
  if (!action.type) throw new Error("No action specified");

  const USER_REDUCERS = {
    [USER_ACTIONS.REFRESH_USER]: () => ({
      ...refreshUser(action.payload, state),
    }),
    [USER_ACTIONS.SET_ID]: () => ({
      ...setID(action.payload, state),
    }),
    [USER_ACTIONS.LOAD_RESULT]: () => ({
      ...loadResult(action.payload, state),
    }),
    [USER_ACTIONS.SET_LOADING]: () => ({
      ...setLoading(action.payload, state),
    }),
    [USER_ACTIONS.LOAD_STATUS]: () => ({
      ...listStatus(action.payload, state),
    }),
    [USER_ACTIONS.LOADING_STATUS]: () => ({
      ...loadingStatus(action.payload, state),
    }),
    [USER_ACTIONS.LOAD_INFO_USER]: () => ({
      ...loadUserData(action.payload, state),
    }),
    [USER_ACTIONS.SET_FILTERS]: () => ({
      ...setFilters(action.payload, state),
    }),
  };

  return USER_REDUCERS[action.type]();
};
