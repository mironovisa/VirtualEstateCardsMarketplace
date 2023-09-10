import { api } from './api'

export const usersApi = {

  getAllUsers: async () => {
    return api.send('get', '/users')
  },

  getAllTransactions: async () => {
    return api.send('get', '/users/transactions')
  },

  getCardByUserId: async (itemId) => {
    return api.send('get', `/users/${itemId}/images`)
  },

  getUserById: async () => {
    return api.send('get', `/users/id`)
  },

  addNewUser: async (payload) => {
    return api.send('post', '/users', payload)
  },

  updateUser: async (payload) => {
    return api.send('put', `/users/`, payload)
  },

  updateUserCart: async (payload) => {
    return api.send('put', `/users/cart/`, payload)
  },

  removeUserCart: async (payload) => {
    return api.send('put', `/users/cart/remove`, payload)
  },

  deleteUser: async (itemId) => {
    return api.send('delete', `/users/${itemId}`)
  },

  boughtImage: async (payload) => {
    return api.send('put', `/users/bought`, payload)
  },

}
