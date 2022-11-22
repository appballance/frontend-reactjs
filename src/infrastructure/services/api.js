import axios from "axios";

export const getService = async (path) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `${process.env.REACT_APP_BASE_URL}/${path}`;

  const response = await axios.get(url, config);
  return response?.data;
};

export const postService = async (path, body) => {
  const url = `${process.env.REACT_APP_BASE_URL}/${path}`;
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(url, body, config);
    return response?.data; 
  } catch (error) {
    return error;
  }
};

// export const putService = (path, obj) => {
//   const url = `${window.__.endpoints.base}/${path}`;
//   return request.put(url, obj);
// };

// export const deleteService = (path, obj) => {
//   const url = `${window.__.endpoints.base}/${path}`;
//   return request.delete(url, obj);
// };
