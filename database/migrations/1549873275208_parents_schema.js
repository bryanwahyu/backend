'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParentsSchema extends Schema {
  up () {
    this.create('parents', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('nama_lengkap',255)
      table.text('alamat')
      table.integer('jenis_kelamin')
      table.string('info_dari',255)
      table.date('tanggal_bergabung')
      table.timestamps()
    })
  }

  down () {
    this.drop('parents')
  }
}

module.exports = ParentsSchema
