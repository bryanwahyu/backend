'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TherapisSchema extends Schema {
  up () {
    this.create('therapis', (table) => {
      table.increments()
      table.string('nama',255)
      table.text('alamat')
      table.string('lat',255).nullable()
      table.string('long',255).nullable()
      table.integer('jenis')
      table.timestamps()
    })
  }

  down () {
    this.drop('therapis')
  }
}

module.exports = TherapisSchema
