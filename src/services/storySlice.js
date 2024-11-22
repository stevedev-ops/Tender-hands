// src/services/storyService.js
import api from './api';

export const storyService = {
  getStories: async () => {
    return await api.get('/api/stories');
  },
  
  getCharityStories: async (charityId) => {
    return await api.get(`/api/charities/${charityId}/stories`);
  },
  
  createStory: async (storyData) => {
    return await api.post('/api/stories', storyData);
  },
  
  updateStory: async (storyId, storyData) => {
    return await api.put(`/api/stories/${storyId}`, storyData);
  },
  
  deleteStory: async (storyId) => {
    return await api.delete(`/api/stories/${storyId}`);
  }
};

// Add a default export if you want to use import storyService
export default storyService;