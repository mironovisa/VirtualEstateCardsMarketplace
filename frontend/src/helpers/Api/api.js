import axios from "axios";
import { getStorageToken, getStorageUser } from "../../Auth/storage"

const userId = getStorageUser();
const accessToken = getStorageToken();

console.log(userId, 'api userid');

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PORT
})

const getConfig = () => {
  return {
      headers: {
          userId: userId,
          accessToken: accessToken,
      }
  }
}


export const api = {
  send: async (method, url, payload) => {
      if (method === 'get') {
          const resp = await instance[method](url, { ...getConfig(), params: payload });
          return resp.data;
      } else {
          if (!payload) {
              const resp = await instance[method](url, getConfig());
              return resp.data;
          } else {
              const resp = await instance[method](url, payload, getConfig());
              return resp.data;
          }
      }

  }
}
