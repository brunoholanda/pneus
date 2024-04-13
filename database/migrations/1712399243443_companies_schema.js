'use strict'

const Schema = use('Schema')

class CompaniesSchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.string('nome', 255).notNullable()
      table.string('cnpj', 18).notNullable().unique()
      table.string('telefone', 15)
      table.string('endereco', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompaniesSchema
