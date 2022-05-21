const axios = require('axios');
const API_URL = `https://api.mercadolibre.com`;

const searchItem = (req, res) => {
  const query = req.params.query;
  const url = `${API_URL}/sites/MLA/search?q=:${query}`;

  axios.get(url)
    .then(response => {
      let items = response?.data?.results;
      items = items.map(item => {
        return {
          author: {
            name: 'Ernesto',
            lastname: 'Colina'
          },
          ...item
        }
      });

      res.json(items);
    })
    .catch(error => {
      res.send(error);
    });
};

const getItemsInformation = (req, res) => {
  const id = req.params.id;
  const query = req.query.q || '';
  const url = `${API_URL}/items/${id}/${query}`

  axios.get(url)
    .then(itemInformation => {
      res.json(itemInformation.data);
    })
    .catch(error => {
      res.send(error);
    })
};

module.exports = { searchItem, getItemsInformation };
