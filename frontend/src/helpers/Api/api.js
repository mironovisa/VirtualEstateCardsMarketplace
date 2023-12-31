import axios from "axios";
import { getUserFromCookie } from '../../helpers/cookieManager';


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PORT
})

const getConfig = () => {
  return {
      headers: {
          userId: getUserFromCookie(),
          accessToken: getUserFromCookie(),
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
