'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coment extends Model {
    user(){
        return this.belongsTo('App/Models/user')
    }
    content(){
        return this.belongsTo('App/Models/Content')
    }
    

}


module.exports = Coment
