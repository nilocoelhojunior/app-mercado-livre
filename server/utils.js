const api = require('./api');

const parseSearch = async (data) => {
  const { query, paging } = data;
  try {
    const results = await Promise.all(data.results.map(async (item) => {
      const {
        id, title, price: decimals, thumbnail, condition, free, seller,
        category_id: categoryId,
        currency_id: currencyId,
        installments: { amount },
        shipping: { free_shipping },
        seller_address,
      } = item;
      const user = await api.getUser(seller.id);
      const category = await api.getCategory(categoryId);
      const product = await api.getProduct(id);
      return {
        id,
        title,
        picture: product.pictures[0].url,
        free,
        author: { nickname: user.nickname },
        categories: category.path_from_root,
        condition,
        free_shipping,
        price: {
          currency: currencyId,
          amount,
          decimals,
        },
        seller_address,
      };
    }));
    return { query, paging, results };
  } catch (e) {
    return { query, paging, results: [] };
  }
};

const parseProduct = (data) => {};

module.exports = { parseProduct, parseSearch };
