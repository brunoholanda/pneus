'use strict'

const Schema = use('Schema')

class AddCompanyIdToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.integer('company_id').unsigned().references('id').inTable('companies').after('id').onDelete('CASCADE')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('company_id')
    })
  }
}

module.exports = AddCompanyIdToUsersSchema
