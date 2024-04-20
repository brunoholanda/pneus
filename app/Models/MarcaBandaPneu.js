'use strict'

const Model = use('Model')

class MarcaBandaPneu extends Model {
    static get table () {
        return 'marca_banda_pneus'
    }

    company () {
        return this.belongsTo('App/Models/Company')
    }

    veiculo () {
        return this.belongsTo('App/Models/Veiculo')
    }
}

module.exports = MarcaBandaPneu
