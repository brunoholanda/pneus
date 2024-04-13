
'use strict'

const Schema = use('Schema')

class DotPneusSchema extends Schema {
  up () {
    this.create('dot_pneus', (table) => {
      table.increments()
      table.integer('1du')
      table.integer('1eu')
      table.integer('2de')
      table.integer('2di')
      table.integer('2ei')
      table.integer('2ee')
      table.integer('3de')
      table.integer('3di')
      table.integer('3ei')
      table.integer('3ee')
      table.integer('4de')
      table.integer('4di')
      table.integer('4ei')
      table.integer('4ee')
      table.integer('5de')
      table.integer('5di')
      table.integer('5ei')
      table.integer('5ee')
      table.integer('6de')
      table.integer('6di')
      table.integer('6ei')
      table.integer('6ee')
      table.integer('7de')
      table.integer('7di')
      table.integer('7ei')
      table.integer('7ee')
      table.integer('steep')
      table.integer('company_id').unsigned().references('id').inTable('companies')
      table.integer('veiculo_id').unsigned().references('id').inTable('veiculos')
      table.timestamps()
    })
  }

  down () {
    this.drop('dot_pneus')
  }
}

module.exports = DotPneusSchema
