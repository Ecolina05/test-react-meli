const { Router } = require('express');
const router = Router();
const { searchProduct, getProductInformation, } = require('../controllers/product.controller');

router.get('/search/:query', searchProduct);
router.get('/:id', getProductInformation);

module.exports = router;