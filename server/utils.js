const api = require('./api');

const renderResponse = async ({ categories }, { name, value }) => {
  const me = await api.getMe();
  return {
    [name]: value, categories, author: { name: me.first_name, lastname: me.last_name },
  };
};

const decimalPart = value => (value % 1).toFixed(2) * 100;

const parseSearch = async (data) => {
  const { filters } = data;
  const categories = filters.find(f => f.id === 'category').values[0].path_from_root.map(p => p.name);
  try {
    const items = await Promise.all(data.results.map(async (item) => {
      const {
        id, title, price, condition,
        currency_id: currencyId,
        shipping: { free_shipping },
        seller_address,
      } = item;
      const product = await api.getProduct(id);
      return {
        id,
        title,
        picture: product.pictures[0].url,
        condition,
        free_shipping,
        price: {
          currency: currencyId,
          amount: price,
          decimals: decimalPart(price),
        },
        seller_address,
      };
    }));
    return await renderResponse({ categories }, { name: 'items', value: items });
  } catch (e) {
    return {
      items: [], categories: [],
    };
  }
};

const parseProduct = async (data) => {
  try {
    const {
      id, title, price, condition, category_id,
      currency_id: currencyId,
      shipping: { free_shipping },
      pictures,
      sold_quantity,
    } = data;

    const description = await api.getProductDescription(id);
    const category = await api.getCategory(category_id);
    const categories = category.path_from_root.map(p => p.name);

    return await renderResponse({ categories }, {
      name: 'item',
      value: {
        id,
        title,
        price: {
          currency: currencyId,
          amount: price,
          decimals: decimalPart(price),
        },
        picture: pictures[0].url,
        condition,
        free_shipping,
        sold_quantity,
        description: description.plain_text,
      },
    });
  } catch (e) {
    console.log(e);
    return { item: {} };
  }
};

module.exports = {
  parseProduct, parseSearch, renderResponse, decimalPart,
};
