'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentSchema extends Schema {
  up () {
    this.create('coments', (table) => {
      table.increments()
      table.integer('content_id')
      table.text('komentar')
      table.timestamps()
    })
  }

  down () {
    this.drop('coments')
  }
}

module.exports = ComentSchema
