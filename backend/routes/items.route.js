const { Router } = require('express');
const router = Router();
const { searchItem, getItemsInformation, } = require('../controllers/items.controller');

router.get('/search/:query', searchItem);
router.get('/:id', getItemsInformation);

module.exports = router;