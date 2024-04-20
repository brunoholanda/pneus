'use strict'

const Schema = use('Schema')

class CaminhoesMarcaSchema extends Schema {
  up () {
    this.create('caminhoes_marca', (table) => {
      table.increments()
      table.string('nome', 255).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('caminhoes_marca')
  }
}

module.exports = CaminhoesMarcaSchema
