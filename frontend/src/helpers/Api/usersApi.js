import { api } from './api'

export const usersApi = {

  getAllUsers: async () => {
    return api.send('get', '/users')
  },

  getUserById: async (itemId) => {
    return api.send('get', `/users/${itemId}`)
  },

  addNewUser: async (payload) => {
    return api.send('post', '/users', payload)
  },

  updateUser: async (itemId, payload) => {
    return api.send('put', `/users/${itemId}`, payload)
  },

  deleteUser: async (itemId) => {
    return api.send('delete', `/users/${itemId}`)
  },

}