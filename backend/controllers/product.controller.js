const axios = require('axios');
const API_URL = `https://api.mercadolibre.com`;

const searchProduct = (req, res) => {
  const query = req.params.query;
  const url = `${API_URL}/sites/MLA/search?q=:${query}`;

  axios.get(url)
    .then(response => {
      let products = response?.data?.results;
      products = products.map(product => {
        return {
          author: {
            name: 'Ernesto',
            lastname: 'Colina'
          },
          ...product
        }
      });

      res.json(products);
    })
    .catch(error => {
      res.send(error);
    });
};

const getProductInformation = (req, res) => {
  const id = req.params.id;
  const query = req.query.q || '';
  const url = `${API_URL}/items/${id}/${query}`

  axios.get(url)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.send(error);
    })
};

module.exports = { searchProduct, getProductInformation };
