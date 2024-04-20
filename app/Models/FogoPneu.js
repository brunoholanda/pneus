'use strict'

const Model = use('Model')

class FogoPneu extends Model {
    static get table () {
        return 'fogo_pneus'
    }

    company () {
        return this.belongsTo('App/Models/Company')
    }

    veiculo () {
        return this.belongsTo('App/Models/Veiculo')
    }
}

module.exports = FogoPneu
