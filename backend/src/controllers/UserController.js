const connection = require('../database/connection')

const responseModel = {
    success: false,
    data: [],
    error: []
}

module.exports = {
    
  async create(req, res) {
    const response = {...responseModel}

    const {nome, username, password} = req.body

    const [, affectrows] = await connection.query(`
      INSERT INTO tbUsuarios VALUES (DEFAULT, '${nome}', '${username}', '${password}', NOW(), NOW())
    `)

    response.success = affectrows > 0

    return res.json(response)
  },
  
  async login(req, res) {
    const response = {...responseModel}

    const {username, password} = req.body

    const [, data] = await connection.query(`
      SELECT * FROM tbUsuarios WHERE username = '${username}' AND password = '${password}'
    `)

    response.success = data.length > 0

    return res.json(response)
  },

  async update(req, res) {
    const response = {...responseModel}

    const {idUsuario, nome, username, password} = req.body

    const [, affectrows] = await connection.query(`
      UPDATE tbUsuarios SET nome='${nome}', username='${username}', password='${password}', dtModificacao=NOW() WHERE idUsuario=${idUsuario}
    `)

    response.success = affectrows > 0

    return res.json(response)
  }
}