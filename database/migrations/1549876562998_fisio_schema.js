'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FisioSchema extends Schema {
  up () {
    this.create('fisios', (table) => {
      table.increments()
      table.integer('therapi_id')
      table.integer('user_id')
      table.string('nama_lengkap',255)
      table.integer('jenis')
      table.text('deskripsi')
      table.timestamps()
    })
  }

  down () {
    this.drop('fisios')
  }
}

module.exports = FisioSchema
