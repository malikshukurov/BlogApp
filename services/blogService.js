import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blog-api-t6u0.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    // SSR zamanı sorğunun keşlənməsinin qarşısını almaq üçün:
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    Pragma: 'no-cache',
  },
});

export const blogService = {
  // GET: Bütün postlar (Home Page - SSR)
  getAllPosts: async () => {
    try {
      const response = await api.get('/posts');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Postlar yüklənərkən xəta baş verdi (500).');
    }
  },

  // GET: Tək bir post (Detail & Edit Page - SSR)
  getPostById: async (id) => {
    try {
      const response = await api.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error('Axtardığınız bloq yazısı tapılmadı (404).');
      }
      throw new Error('Post gətirilərkən texniki xəta baş verdi.');
    }
  },

  // POST: Yeni post yaratmaq (Create Page - Client)
  createPost: async (postData) => {
    try {
      const response = await api.post('/posts', postData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Post yaradıla bilmədi.');
    }
  },

  // PUT: Postu redaktə etmək (Edit Page - Client)
  updatePost: async (id, postData) => {
    try {
      const response = await api.put(`/posts/${id}`, postData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Post yenilənə bilmədi.');
    }
  },

  // DELETE: Postu silmək (Detail Page - Client Action)
  deletePost: async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      return true;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Post silinərkən xəta baş verdi.');
    }
  },
};