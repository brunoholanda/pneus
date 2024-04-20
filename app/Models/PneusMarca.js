'use strict'

const Model = use('Model')

class PneusMarca extends Model {
  static get table () {
    return 'pneus_marcas'
  }
}

module.exports = PneusMarca
