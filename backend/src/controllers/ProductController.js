const connection = require('../database/connection')

const responseModel = {
  success: false,
  data: [],
  error: []
}

module.exports = {
  async productCreate(req, res) {
    const response = {...responseModel}

    const {nome, codigo, idFabricante, estoque, prVenda, prCompra, idCategoria, idTipoProduto, dtCadastro, dtModificacao} = req.body

    const [, affectrows] = await connection.query(`
      INSERT INTO tbProdutos VALUES (DEFAULT, UPPER('${nome}'), '${codigo}', ${idFabricante}, ${estoque}, 
                                              '${prVenda}', '${prCompra}', ${idCategoria}, ${idTipoProduto}, NOW(), NOW())
    `)

    response.success = affectrows > 0

    return res.json(response)
  },
  
  async productList(req, res) {
    const response = {...responseModel}

    const {nome} = req.body

    const [, data] = await connection.query(`
      SELECT codigo, nome, estoque, prVenda, idTipoproduto FROM tbProdutos WHERE nome LIKE '%${nome}%' OR codigo='${nome}' ORDER BY nome
    `)

    response.success = data.length > 0

    return res.json(data)
  },

  async productUpdate(req, res) {
    const response = {...responseModel}

    const {idProduto, nome, codigo, idFabricante, estoque, prVenda, prCompra, idCategoria, idTipoProduto, dtModificacao} = req.body

    const [, affectrows] = await connection.query(`
      UPDATE tbProdutos SET nome=UPPER('${nome}'), codigo='${codigo}', idFabricante=${idFabricante}, 
                            estoque=${estoque}, prVenda='${prVenda}', prCompra='${prCompra}', 
                            idCategoria=${idCategoria}, idTipoProduto=${idTipoProduto}, dtModificacao=NOW()
      WHERE idProduto = ${idProduto}
    `)

    response.success = affectrows > 0

    return res.json(response)
  },

  async categoryCreate(req, res) {
    const response = {...responseModel}

    const {nome} = req.body

    const [, affectrows] = await connection.query(`
      INSERT INTO tbCategorias VALUES (DEFAULT, UPPER('${nome}'))    
    `)

    response.success = affectrows > 0

    return res.json(response)
  },

  async categoryList(req, res) {
    const response = {...responseModel}

    const [, data] = await connection.query(`
      SELECT * FROM tbCategorias ORDER BY nome
    `)

    response.success = data.length > 0

    return res.json(data)
  },

  async categoryUpdate(req, res) {
    const response = {...responseModel}

    const {nome, idCategoria} = req.body

    const [, affectrows] = await connection.query(`
      UPDATE tbCategorias SET nome=UPPER('${nome}') WHERE idCategoria=${idCategoria}  
    `)

    response.success = affectrows > 0

    return res.json(response)
  },
  async productTypeCreate(req, res) {
    const response = {...responseModel}

    const {nome} = req.body

    const [, affectrows] = await connection.query(`
      INSERT INTO tbTipoProduto VALUES (DEFAULT, UPPER('${nome}'))    
    `)

    response.success = affectrows > 0

    return res.json(response)
  },

  async productTypeList(req, res) {
    const response = {...responseModel}

    const [, data] = await connection.query(`
      SELECT * FROM tbTipoProduto ORDER BY nome
    `)

    response.success = data.length > 0

    return res.json(data)    
  },

  async productTypeUpdate(req, res) {
    const response = {...responseModel}

    const {nome, idTipoProduto} = req.body

    const [, affectrows] = await connection.query(`
      UPDATE tbTipoProduto SET nome=UPPER('${nome}') WHERE idTipoProduto=${idTipoProduto}  
    `)

    response.success = affectrows > 0

    return res.json(response) 
  },

  async manufacturerCreate(req, res) {
    const response = {...responseModel}

    const {nome} = req.body

    const [, affectrows] = await connection.query(`
      INSERT INTO tbFabricantes VALUES (DEFAULT, UPPER('${nome}'))    
    `)

    response.success = affectrows > 0

    return res.json(response)
  },

  async manufacturerList(req, res) {
    const response = {...responseModel}

    const [, data] = await connection.query(`
      SELECT * FROM tbFabricantes ORDER BY nome
    `)

    response.success = data.length > 0

    return res.json(data)   
  },

  async manufacturerUpdate(req, res) {
    const response = {...responseModel}

    const {nome, idFabricante} = req.body

    const [, affectrows] = await connection.query(`
      UPDATE tbFabricantes SET nome=UPPER('${nome}') WHERE idFabricante=${idFabricante}  
    `)

    response.success = affectrows > 0

    return res.json(response)   
  },
}