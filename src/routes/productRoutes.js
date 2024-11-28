const { createProduct } = require('../controllers/productController/create');
const { readProduct } = require('../controllers/productController/read');
const { updateProduct } = require('../controllers/productController/update');
const { deleteProduct } = require('../controllers/productController/delete');

const { authenticate } = require('../common/middlewares/authMiddleware');

const express = require('express');

const router = express.Router();

router.post('/create', authenticate, createProduct)
router.get('/all', readProduct)
router.put('/update/:pid', authenticate, updateProduct)
router.delete('/delete/:pid', authenticate, deleteProduct)

module.exports = router;