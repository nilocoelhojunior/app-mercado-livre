const axios = require('axios');

const getMe = async () => {
  try {
    const response = await axios.get('https://api.mercadolibre.com/users/me?access_token=APP_USR-5795559625902317-062100-8cb862536b12d06de7835f3cb7c7b16c-136551423');
    return response.data;
  } catch (e) {
    return e;
  }
};

const getCategory = async (id) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/categories/${id}`);
    return response.data;
  } catch (e) {
    return e;
  }
};

const getUser = async (id) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/users/${id}`);
    return response.data;
  } catch (e) {
    return e;
  }
};

const getSearch = async (query) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`);
    return response.data;
  } catch (e) {
    return e;
  }
};

const getProduct = async (id) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    return response.data;
  } catch (e) {
    return e;
  }
};

const getProductDescription = async (id) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
    return response.data;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getProduct, getProductDescription, getSearch, getUser, getCategory, getMe,
};
