import { useContext, useCallback } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../appContext";
import { APP_ACTIONS } from "../constants";

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error("Expected to be wrapped in a AppProvider");

  const { state, dispatch } = context;
  const { isLoading } = state;

  const setPath = (path) => {
    dispatch({ type: APP_ACTIONS.SET_PATH, payload: path });
  };

  const goTo = (url, type) => {
    window.open(url, type);
  };

  const showToastMessage = useCallback((text, type) => {
    switch (type) {
      case "msgError":
        toast.error(text);
        break;
      case "msgAlert":
        toast(text, {
          className: "Orange_Toast_Container",
          bodyClassName: "Orange_Toast_Body",
          progressClassName: "Orange_Toast_Progress",
        });
        break;
      case "msgWarning":
        toast.warning(text);
        break;
      default:
        toast.success(text);
        break;
    }
  }, []);

  const setIsLoading = (_isLoading) => {
    dispatch({
      type: APP_ACTIONS.SET_IS_LOADING,
      payload: {
        isLoading: _isLoading,
      },
    });
  };
  
  return {
    ...state,
    setPath,
    goTo,
    showToastMessage,
    isLoading,
    setIsLoading,
  };
};
