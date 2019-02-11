'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PsikologSchema extends Schema {
  up () {
    this.create('psikologs', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('nama',255)
      table.string('jabatan',255)
      table.text('alamat')
      table.integer('jenis_permasalahan',255)
      table.timestamps()
    })
  }

  down () {
    this.drop('psikologs')
  }
}

module.exports = PsikologSchema
