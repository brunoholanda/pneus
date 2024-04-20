'use strict'

const Model = use('Model')

class SucoPneu extends Model {
    static get table () {
        return 'suco_pneus'
    }

    company () {
        return this.belongsTo('App/Models/Company')
    }

    veiculo () {
        return this.belongsTo('App/Models/Veiculo')
    }
}

module.exports = SucoPneu
