import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getUser } from "../../services/user-service";

export const useHomeAuthenticated = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch((error) => {
        console.log(error);
        history.push("login");
      });
  }, []);

  return {
    user,
    setUser,
  };
};
