import { useContext } from "react";
import { UserContext } from "../userContext";

export const useProfileData = () => {
  const { state } = useContext(UserContext);

  return {
    ...state,
  };
};
