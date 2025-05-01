import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL 

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Product API
export const productAPI = {
  getAllProducts: () => {
    return api.get('/api/products');
  },
  getProductById: (id) => {
    return api.get(`/api/products/${id}`);
  },
  createProduct: (data) => {
    return api.post('/api/products', data);
  },
  updateProduct: (id, data) => {
    return api.put(`/api/products/${id}`, data);
  },
  deleteProduct: (id) => {
    return api.delete(`/api/products/${id}`);
  },
};

// Category API
export const categoryAPI = {
  getAllCategories: () => {
    return api.get('/api/categories');
  },
  getCategoryById: (id) => {
    return api.get(`/api/categories/${id}`);
  },
  createCategory: (data) => {
    return api.post('/api/categories', data);
  },
  updateCategory: (id, data) => {
    return api.put(`/api/categories/${id}`, data);
  },
  deleteCategory: (id) => {
    return api.delete(`/api/categories/${id}`);
  },
};

// Order API
export const orderAPI = {
  getAllOrders: () => {
    return api.get('/api/orders');
  },
  getOrderById: (id) => {
    return api.get(`/api/orders/${id}`);
  },
  updateOrderStatus: (id, data) => {
    return api.put(`/api/orders/${id}/status`, data);
  },
};

// Dashboard API
export const dashboardAPI = {
  getStats: () => {
    return api.get('/api/dashboard/stats');
  },
}; 