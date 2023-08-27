import { api } from './api'

export const authApi = {

  login: async (payload) => {
    return api.send('post', '/auth/login', payload);
  }

}
