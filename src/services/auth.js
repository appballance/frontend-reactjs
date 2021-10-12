import axios from "axios";
import Settings from "../Settings";

export const authenticate = async (email, password) => {
  try {
    const body = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/${Settings.ROUTES.AUTH}`,
      body
    );
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};
