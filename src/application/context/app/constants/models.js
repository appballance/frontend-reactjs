export const initialStateAppReducer = {
  path: null,
  message: null,
  isLoading: false,
};

export const appContextModel = {
  state: initialStateAppReducer,
  dispatch: () => {},
};
