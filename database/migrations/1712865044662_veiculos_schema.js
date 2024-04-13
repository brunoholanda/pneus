'use strict'

const Schema = use('Schema')

class VeiculosSchema extends Schema {
  up () {
    this.create('veiculos', (table) => {
      table.increments()
      table.string('placa').notNullable().unique()
      table.string('qt_eixos')
      table.string('motorista')
      table.integer('medida_aro')
      table.string('tipo_veiculo')
      table.string('marca')
      table.string('modelo')
      table.integer('qt_diferenciais')
      table.boolean('hodometro').defaultTo(false)
      table.integer('qt_pneus')
      table.integer('company_id').unsigned().references('id').inTable('companies')
      table.timestamps()
    })
  }

  down () {
    this.drop('veiculos')
  }
}

module.exports = VeiculosSchema
