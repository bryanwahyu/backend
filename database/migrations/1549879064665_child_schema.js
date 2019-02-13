'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChildSchema extends Schema {
  up () {
    this.create('children', (table) => {
      table.increments()
      table.integer('parent_id').nullable()
      table.integer('user_id').nullable()
      table.string('nama',255)
      table.text('alamat')
      table.integer('pendidikan')
      table.string('cita_cita',255)
      table.date('tanggal_lahir')
      table.string('notelp',255)
      table.integer('jenis_kelamin')
      table.string('jenis_cp',255)
      table.string('hobi',255)
      table.timestamps()
    })
  }

  down () {
    this.drop('children')
  }
}

module.exports = ChildSchema
