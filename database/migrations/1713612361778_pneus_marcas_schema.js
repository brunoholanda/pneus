'use strict'

const Schema = use('Schema')

class PneusMarcasSchema extends Schema {
  up () {
    this.create('pneus_marcas', (table) => {
      table.increments()
      table.string('nome', 255).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('pneus_marcas')
  }
}

module.exports = PneusMarcasSchema
