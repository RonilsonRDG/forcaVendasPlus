const router = require('express').Router()

//import controllers
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')

//Usuários
router.post('/login', UserController.login)
router.post('/user-create', UserController.create)
router.post('/user-update', UserController.update)

//Produtos
router.post('/product-create', ProductController.productCreate)
router.post('/product-list', ProductController.productList)
router.post('/product-update', ProductController.productUpdate)

//Categorias
router.post('/category-create', ProductController.categoryCreate)
router.post('/category-list', ProductController.categoryList)
router.post('/category-update', ProductController.categoryUpdate)

//TipoProduto
router.post('/producttype-create', ProductController.productTypeCreate)
router.post('/producttype-list', ProductController.productTypeList)
router.post('/producttype-update', ProductController.productTypeUpdate)

//Fabricantes
router.post('/manufacturer-create', ProductController.manufacturerCreate)
router.post('/manufacturer-list', ProductController.manufacturerList)
router.post('/manufacturer-update', ProductController.manufacturerUpdate)



module.exports = router

