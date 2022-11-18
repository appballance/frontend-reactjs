import { useContext } from "react";
import { isNull } from "lodash";
import { getService } from "infrastructure/services/pic-service-api";
import { current, setXProfile } from "infrastructure/shared/lib/login-store";
import { UserContext } from "../userContext";
import { USER_ACTIONS } from "../constants";

export const useProfileServices = () => {
  const { state, dispatch } = useContext(UserContext);

  const setLoading = (subject, active) => {
    dispatch({ type: USER_ACTIONS.SET_LOADING, payload: { subject, active } });
  };

  const setFilters = (filters) => {
    dispatch({ type: USER_ACTIONS.SET_FILTERS, payload: filters });
  };

  const getList = async (params) => {
    setLoading("list", true);

    await getService("usuarios", params)
      .then((result) => {
        if (result && Array.isArray(result.result)) {
          dispatch({ type: USER_ACTIONS.LOAD_RESULT, payload: result });
        } else {
          dispatch({
            type: USER_ACTIONS.LOAD_RESULT,
            payload: { result: [], pagination: {} },
          });
        }

        setLoading("list", false);
      })
      .catch(() => {
        dispatch({
          type: USER_ACTIONS.LOAD_RESULT,
          payload: { result: [], pagination: {} },
        });
        setLoading("list", false);
      });
  };

  const loadOrCreateUser = () =>
    new Promise((resolve, reject) => {
      getService("usuarios/me")
        .then((_user) => {
          const user = !!_user && _user.login ? _user : null;

          dispatch({ type: USER_ACTIONS.REFRESH_USER, payload: _user });

          if (_user) resolve(_user);
          else reject(user);
        })
        .catch((e) => {
          dispatch({ type: USER_ACTIONS.REFRESH_USER, payload: null });
          reject(e);
        });
    });

  const changeProfile = (p) => {
    setXProfile(p);
    window.location = "/";
  };

  const checkAuth = () => {
    if (current() && (!state.id || state.id !== window.localStorage.getItem("idtoken"))) {
      loadOrCreateUser().then(() => {
        dispatch({
          type: USER_ACTIONS.SET_ID,
          payload: window.localStorage.getItem("idtoken"),
        });
      });
    }

    return true;
  };

  const loadInfoUser = async (login) => {
    const data = await getService(`usuarios/${login}`);
    dispatch({ type: USER_ACTIONS.LOAD_INFO_USER, payload: data });
  };

  const currentIsActive = () => !isNull(current());

  return {
    getList,
    loadOrCreateUser,
    changeProfile,
    checkAuth,
    loadInfoUser,
    currentIsActive,
    setFilters,
  };
};
