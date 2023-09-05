import { api } from './api'

export const imagesApi = {

  getAllImages: async (payload) => {
    return api.send('get', '/images', payload)
  },

  getImagesById: async (itemId) => {
    return api.send('get', `/images/${itemId}`)
  },

  addNewImage: async (payload) => {
    return api.send('post', '/images', payload)
  },

  updateImage: async (itemId, payload) => {
    return api.send('put', `/images/${itemId}`, payload)
  },

  deleteImage: async (itemId) => {
    return api.send('delete', `/images/${itemId}`)
  },

}