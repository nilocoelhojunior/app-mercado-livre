const axios = require('axios');

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

module.exports = {
  getProduct, getSearch, getUser, getCategory,
};
