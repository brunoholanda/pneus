'use strict'

const Model = use('Model')

class CaminhaoMarca extends Model {
  static get table () {
    return 'caminhoes_marca'
  }
}

module.exports = CaminhaoMarca
