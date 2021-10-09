import axios from "axios";
import Settings from "../Settings";

export const authenticate = async (email, password) => {
  const body = {
    email: email,
    password: password,
  };
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/${Settings.ROUTES.AUTH}`,
    body
  );
  console.log(response);
  return response.data;
};
