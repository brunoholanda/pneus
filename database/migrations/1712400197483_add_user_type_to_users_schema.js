'use strict'

const Schema = use('Schema')

class AddUserTypeToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('user_type').defaultTo('1')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('user_type')
    })
  }
}

module.exports = AddUserTypeToUsersSchema
