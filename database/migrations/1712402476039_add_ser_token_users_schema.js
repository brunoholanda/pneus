'use strict'

const Schema = use('Schema')

class AddUserTypeToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('token')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('token')
    })
  }
}

module.exports = AddUserTypeToUsersSchema
