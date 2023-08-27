import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PORT,
});

//- implement getting logged user id and set it up to the headers in a function

export const api = {
  send: async (method, url, payload) => {
    if (method === 'get' || method === 'delete') {
      const res = await instance[method](url);
      return res.data;
    } else {
      const res = await instance[method](url, payload);
      return res.data;
    }
  }
}

