'use strict'

const Model = use('Model')

class DotPneu extends Model {
    static get table () {
        return 'dot_pneus'
    }

    company () {
        return this.belongsTo('App/Models/Company')
    }

    veiculo () {
        return this.belongsTo('App/Models/Veiculo')
    }
}

module.exports = DotPneu
